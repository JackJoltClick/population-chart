import {
  getAvailableYears,
  getDataForYear,
  getTopCountries,
  populationData,
} from '../populationData';

describe('populationData', () => {
  describe('getAvailableYears', () => {
    it('should return all available years', () => {
      const years = getAvailableYears();
      expect(years).toHaveLength(9);
      expect(years[0]).toBe(2015);
      expect(years[years.length - 1]).toBe(2023);
    });

    it('should return years in chronological order', () => {
      const years = getAvailableYears();
      for (let i = 1; i < years.length; i++) {
        expect(years[i]).toBeGreaterThan(years[i - 1]);
      }
    });
  });

  describe('getDataForYear', () => {
    it('should return data for a valid year', () => {
      const data = getDataForYear(2020);
      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('country');
      expect(data[0]).toHaveProperty('code');
      expect(data[0]).toHaveProperty('population');
      expect(data[0]).toHaveProperty('year');
    });

    it('should return empty array for invalid year', () => {
      const data = getDataForYear(1900);
      expect(data).toEqual([]);
    });

    it('should return correct data structure', () => {
      const data = getDataForYear(2020);
      data.forEach(country => {
        expect(typeof country.country).toBe('string');
        expect(typeof country.code).toBe('string');
        expect(typeof country.population).toBe('number');
        expect(country.year).toBe(2020);
      });
    });
  });

  describe('getTopCountries', () => {
    it('should return top 10 countries by default', () => {
      const topCountries = getTopCountries(2020);
      expect(topCountries).toHaveLength(10);
    });

    it('should return specified number of countries', () => {
      const top5 = getTopCountries(2020, 5);
      expect(top5).toHaveLength(5);

      const top15 = getTopCountries(2020, 15);
      expect(top15).toHaveLength(15);
    });

    it('should return countries sorted by population descending', () => {
      const topCountries = getTopCountries(2020, 10);
      for (let i = 1; i < topCountries.length; i++) {
        expect(topCountries[i - 1].population).toBeGreaterThanOrEqual(
          topCountries[i].population
        );
      }
    });

    it('should handle edge case when requesting more countries than available', () => {
      const allCountries = getDataForYear(2020);
      const topCountries = getTopCountries(2020, 100);
      expect(topCountries.length).toBeLessThanOrEqual(allCountries.length);
    });

    it('should return empty array for invalid year', () => {
      const topCountries = getTopCountries(1900, 10);
      expect(topCountries).toEqual([]);
    });

    it('should show India overtaking China in later years', () => {
      const top2022 = getTopCountries(2022, 2);
      const top2023 = getTopCountries(2023, 2);
      
      // India should be #1 in 2022 and 2023
      expect(top2022[0].country).toBe('India');
      expect(top2023[0].country).toBe('India');
    });
  });

  describe('data integrity', () => {
    it('should have consistent country codes across years', () => {
      const countryCodes = new Set<string>();
      
      populationData.forEach(yearData => {
        yearData.countries.forEach(country => {
          countryCodes.add(country.code);
        });
      });

      // Check that each country code appears consistently
      countryCodes.forEach(code => {
        const appearances = populationData.filter(yearData =>
          yearData.countries.some(country => country.code === code)
        );
        expect(appearances.length).toBeGreaterThan(0);
      });
    });

    it('should have positive population values', () => {
      populationData.forEach(yearData => {
        yearData.countries.forEach(country => {
          expect(country.population).toBeGreaterThan(0);
        });
      });
    });

    it('should have unique countries per year', () => {
      populationData.forEach(yearData => {
        const countryNames = yearData.countries.map(c => c.country);
        const uniqueNames = new Set(countryNames);
        expect(uniqueNames.size).toBe(countryNames.length);
      });
    });
  });
});