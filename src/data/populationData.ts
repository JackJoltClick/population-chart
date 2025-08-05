export interface CountryPopulation {
  country: string;
  code: string;
  population: number;
  year: number;
}

export interface YearData {
  year: number;
  countries: CountryPopulation[];
}

export const populationData: YearData[] = [
  {
    year: 2015,
    countries: [
      { country: "China", code: "CN", population: 1371, year: 2015 },
      { country: "India", code: "IN", population: 1311, year: 2015 },
      { country: "United States", code: "US", population: 321, year: 2015 },
      { country: "Indonesia", code: "ID", population: 258, year: 2015 },
      { country: "Brazil", code: "BR", population: 206, year: 2015 },
      { country: "Pakistan", code: "PK", population: 189, year: 2015 },
      { country: "Nigeria", code: "NG", population: 182, year: 2015 },
      { country: "Bangladesh", code: "BD", population: 161, year: 2015 },
      { country: "Russia", code: "RU", population: 144, year: 2015 },
      { country: "Japan", code: "JP", population: 127, year: 2015 },
      { country: "Mexico", code: "MX", population: 127, year: 2015 },
      { country: "Philippines", code: "PH", population: 101, year: 2015 },
      { country: "Ethiopia", code: "ET", population: 99, year: 2015 },
      { country: "Vietnam", code: "VN", population: 93, year: 2015 },
      { country: "Egypt", code: "EG", population: 91, year: 2015 },
      { country: "Germany", code: "DE", population: 81, year: 2015 },
      { country: "Turkey", code: "TR", population: 78, year: 2015 },
      { country: "Iran", code: "IR", population: 79, year: 2015 },
      { country: "Thailand", code: "TH", population: 68, year: 2015 },
      { country: "United Kingdom", code: "GB", population: 65, year: 2015 },
    ],
  },
  {
    year: 2016,
    countries: [
      { country: "China", code: "CN", population: 1378, year: 2016 },
      { country: "India", code: "IN", population: 1327, year: 2016 },
      { country: "United States", code: "US", population: 323, year: 2016 },
      { country: "Indonesia", code: "ID", population: 261, year: 2016 },
      { country: "Brazil", code: "BR", population: 208, year: 2016 },
      { country: "Pakistan", code: "PK", population: 193, year: 2016 },
      { country: "Nigeria", code: "NG", population: 186, year: 2016 },
      { country: "Bangladesh", code: "BD", population: 163, year: 2016 },
      { country: "Russia", code: "RU", population: 144, year: 2016 },
      { country: "Mexico", code: "MX", population: 128, year: 2016 },
      { country: "Japan", code: "JP", population: 127, year: 2016 },
      { country: "Philippines", code: "PH", population: 103, year: 2016 },
      { country: "Ethiopia", code: "ET", population: 102, year: 2016 },
      { country: "Vietnam", code: "VN", population: 94, year: 2016 },
      { country: "Egypt", code: "EG", population: 93, year: 2016 },
      { country: "Germany", code: "DE", population: 82, year: 2016 },
      { country: "Iran", code: "IR", population: 80, year: 2016 },
      { country: "Turkey", code: "TR", population: 79, year: 2016 },
      { country: "Thailand", code: "TH", population: 69, year: 2016 },
      { country: "United Kingdom", code: "GB", population: 66, year: 2016 },
    ],
  },
  {
    year: 2017,
    countries: [
      { country: "China", code: "CN", population: 1386, year: 2017 },
      { country: "India", code: "IN", population: 1344, year: 2017 },
      { country: "United States", code: "US", population: 325, year: 2017 },
      { country: "Indonesia", code: "ID", population: 264, year: 2017 },
      { country: "Brazil", code: "BR", population: 209, year: 2017 },
      { country: "Pakistan", code: "PK", population: 197, year: 2017 },
      { country: "Nigeria", code: "NG", population: 191, year: 2017 },
      { country: "Bangladesh", code: "BD", population: 165, year: 2017 },
      { country: "Russia", code: "RU", population: 144, year: 2017 },
      { country: "Mexico", code: "MX", population: 130, year: 2017 },
      { country: "Japan", code: "JP", population: 127, year: 2017 },
      { country: "Philippines", code: "PH", population: 105, year: 2017 },
      { country: "Ethiopia", code: "ET", population: 105, year: 2017 },
      { country: "Vietnam", code: "VN", population: 95, year: 2017 },
      { country: "Egypt", code: "EG", population: 95, year: 2017 },
      { country: "Germany", code: "DE", population: 83, year: 2017 },
      { country: "Iran", code: "IR", population: 81, year: 2017 },
      { country: "Turkey", code: "TR", population: 80, year: 2017 },
      { country: "Thailand", code: "TH", population: 69, year: 2017 },
      { country: "United Kingdom", code: "GB", population: 66, year: 2017 },
    ],
  },
  {
    year: 2018,
    countries: [
      { country: "China", code: "CN", population: 1393, year: 2018 },
      { country: "India", code: "IN", population: 1361, year: 2018 },
      { country: "United States", code: "US", population: 327, year: 2018 },
      { country: "Indonesia", code: "ID", population: 267, year: 2018 },
      { country: "Brazil", code: "BR", population: 210, year: 2018 },
      { country: "Pakistan", code: "PK", population: 201, year: 2018 },
      { country: "Nigeria", code: "NG", population: 196, year: 2018 },
      { country: "Bangladesh", code: "BD", population: 166, year: 2018 },
      { country: "Russia", code: "RU", population: 144, year: 2018 },
      { country: "Mexico", code: "MX", population: 131, year: 2018 },
      { country: "Japan", code: "JP", population: 126, year: 2018 },
      { country: "Ethiopia", code: "ET", population: 109, year: 2018 },
      { country: "Philippines", code: "PH", population: 107, year: 2018 },
      { country: "Egypt", code: "EG", population: 97, year: 2018 },
      { country: "Vietnam", code: "VN", population: 96, year: 2018 },
      { country: "Germany", code: "DE", population: 83, year: 2018 },
      { country: "Iran", code: "IR", population: 82, year: 2018 },
      { country: "Turkey", code: "TR", population: 81, year: 2018 },
      { country: "Thailand", code: "TH", population: 70, year: 2018 },
      { country: "United Kingdom", code: "GB", population: 67, year: 2018 },
    ],
  },
  {
    year: 2019,
    countries: [
      { country: "China", code: "CN", population: 1398, year: 2019 },
      { country: "India", code: "IN", population: 1380, year: 2019 },
      { country: "United States", code: "US", population: 329, year: 2019 },
      { country: "Indonesia", code: "ID", population: 270, year: 2019 },
      { country: "Brazil", code: "BR", population: 211, year: 2019 },
      { country: "Pakistan", code: "PK", population: 205, year: 2019 },
      { country: "Nigeria", code: "NG", population: 201, year: 2019 },
      { country: "Bangladesh", code: "BD", population: 168, year: 2019 },
      { country: "Russia", code: "RU", population: 144, year: 2019 },
      { country: "Mexico", code: "MX", population: 132, year: 2019 },
      { country: "Japan", code: "JP", population: 126, year: 2019 },
      { country: "Ethiopia", code: "ET", population: 112, year: 2019 },
      { country: "Philippines", code: "PH", population: 108, year: 2019 },
      { country: "Egypt", code: "EG", population: 99, year: 2019 },
      { country: "Vietnam", code: "VN", population: 97, year: 2019 },
      { country: "Germany", code: "DE", population: 83, year: 2019 },
      { country: "Iran", code: "IR", population: 83, year: 2019 },
      { country: "Turkey", code: "TR", population: 83, year: 2019 },
      { country: "Thailand", code: "TH", population: 70, year: 2019 },
      { country: "United Kingdom", code: "GB", population: 67, year: 2019 },
    ],
  },
  {
    year: 2020,
    countries: [
      { country: "China", code: "CN", population: 1402, year: 2020 },
      { country: "India", code: "IN", population: 1396, year: 2020 },
      { country: "United States", code: "US", population: 331, year: 2020 },
      { country: "Indonesia", code: "ID", population: 274, year: 2020 },
      { country: "Pakistan", code: "PK", population: 221, year: 2020 },
      { country: "Brazil", code: "BR", population: 213, year: 2020 },
      { country: "Nigeria", code: "NG", population: 206, year: 2020 },
      { country: "Bangladesh", code: "BD", population: 170, year: 2020 },
      { country: "Russia", code: "RU", population: 144, year: 2020 },
      { country: "Mexico", code: "MX", population: 134, year: 2020 },
      { country: "Japan", code: "JP", population: 125, year: 2020 },
      { country: "Ethiopia", code: "ET", population: 115, year: 2020 },
      { country: "Philippines", code: "PH", population: 110, year: 2020 },
      { country: "Egypt", code: "EG", population: 102, year: 2020 },
      { country: "Vietnam", code: "VN", population: 98, year: 2020 },
      { country: "Iran", code: "IR", population: 84, year: 2020 },
      { country: "Turkey", code: "TR", population: 84, year: 2020 },
      { country: "Germany", code: "DE", population: 83, year: 2020 },
      { country: "Thailand", code: "TH", population: 70, year: 2020 },
      { country: "United Kingdom", code: "GB", population: 68, year: 2020 },
    ],
  },
  {
    year: 2021,
    countries: [
      { country: "China", code: "CN", population: 1412, year: 2021 },
      { country: "India", code: "IN", population: 1408, year: 2021 },
      { country: "United States", code: "US", population: 333, year: 2021 },
      { country: "Indonesia", code: "ID", population: 277, year: 2021 },
      { country: "Pakistan", code: "PK", population: 226, year: 2021 },
      { country: "Brazil", code: "BR", population: 214, year: 2021 },
      { country: "Nigeria", code: "NG", population: 211, year: 2021 },
      { country: "Bangladesh", code: "BD", population: 172, year: 2021 },
      { country: "Russia", code: "RU", population: 143, year: 2021 },
      { country: "Mexico", code: "MX", population: 136, year: 2021 },
      { country: "Japan", code: "JP", population: 125, year: 2021 },
      { country: "Ethiopia", code: "ET", population: 118, year: 2021 },
      { country: "Philippines", code: "PH", population: 111, year: 2021 },
      { country: "Egypt", code: "EG", population: 104, year: 2021 },
      { country: "Vietnam", code: "VN", population: 99, year: 2021 },
      { country: "Iran", code: "IR", population: 85, year: 2021 },
      { country: "Turkey", code: "TR", population: 85, year: 2021 },
      { country: "Germany", code: "DE", population: 83, year: 2021 },
      { country: "Thailand", code: "TH", population: 70, year: 2021 },
      { country: "United Kingdom", code: "GB", population: 68, year: 2021 },
    ],
  },
  {
    year: 2022,
    countries: [
      { country: "India", code: "IN", population: 1420, year: 2022 },
      { country: "China", code: "CN", population: 1418, year: 2022 },
      { country: "United States", code: "US", population: 335, year: 2022 },
      { country: "Indonesia", code: "ID", population: 280, year: 2022 },
      { country: "Pakistan", code: "PK", population: 231, year: 2022 },
      { country: "Nigeria", code: "NG", population: 216, year: 2022 },
      { country: "Brazil", code: "BR", population: 215, year: 2022 },
      { country: "Bangladesh", code: "BD", population: 174, year: 2022 },
      { country: "Russia", code: "RU", population: 143, year: 2022 },
      { country: "Mexico", code: "MX", population: 138, year: 2022 },
      { country: "Japan", code: "JP", population: 124, year: 2022 },
      { country: "Ethiopia", code: "ET", population: 121, year: 2022 },
      { country: "Philippines", code: "PH", population: 113, year: 2022 },
      { country: "Egypt", code: "EG", population: 106, year: 2022 },
      { country: "Vietnam", code: "VN", population: 100, year: 2022 },
      { country: "Iran", code: "IR", population: 86, year: 2022 },
      { country: "Turkey", code: "TR", population: 86, year: 2022 },
      { country: "Germany", code: "DE", population: 84, year: 2022 },
      { country: "Thailand", code: "TH", population: 71, year: 2022 },
      { country: "United Kingdom", code: "GB", population: 69, year: 2022 },
    ],
  },
  {
    year: 2023,
    countries: [
      { country: "India", code: "IN", population: 1432, year: 2023 },
      { country: "China", code: "CN", population: 1421, year: 2023 },
      { country: "United States", code: "US", population: 338, year: 2023 },
      { country: "Indonesia", code: "ID", population: 283, year: 2023 },
      { country: "Pakistan", code: "PK", population: 236, year: 2023 },
      { country: "Nigeria", code: "NG", population: 221, year: 2023 },
      { country: "Brazil", code: "BR", population: 216, year: 2023 },
      { country: "Bangladesh", code: "BD", population: 176, year: 2023 },
      { country: "Russia", code: "RU", population: 142, year: 2023 },
      { country: "Mexico", code: "MX", population: 140, year: 2023 },
      { country: "Ethiopia", code: "ET", population: 124, year: 2023 },
      { country: "Japan", code: "JP", population: 123, year: 2023 },
      { country: "Philippines", code: "PH", population: 115, year: 2023 },
      { country: "Egypt", code: "EG", population: 108, year: 2023 },
      { country: "Vietnam", code: "VN", population: 101, year: 2023 },
      { country: "Iran", code: "IR", population: 87, year: 2023 },
      { country: "Turkey", code: "TR", population: 87, year: 2023 },
      { country: "Germany", code: "DE", population: 84, year: 2023 },
      { country: "Thailand", code: "TH", population: 71, year: 2023 },
      { country: "United Kingdom", code: "GB", population: 69, year: 2023 },
    ],
  },
];

// Get available years from the data
export const getAvailableYears = (): number[] => {
  return populationData.map((data) => data.year);
};

// Get data for a specific year
export const getDataForYear = (year: number): CountryPopulation[] => {
  const yearData = populationData.find((data) => data.year === year);
  return yearData ? yearData.countries : [];
};

// Get top N countries for a specific year
export const getTopCountries = (
  year: number,
  count: number = 10
): CountryPopulation[] => {
  const data = getDataForYear(year);
  return data.sort((a, b) => b.population - a.population).slice(0, count);
};