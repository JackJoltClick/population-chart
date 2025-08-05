"use client";
import { CountryPopulation } from "@/data/populationData";
import { getCountryColor } from "@/utils/colors";
import styles from "./SimpleBarChart.module.scss";

export default function SimpleBarChart({ data, maxItems = 15 }: { data: CountryPopulation[], maxItems?: number }) {
  const sorted = data.sort((a, b) => b.population - a.population).slice(0, maxItems);
  const max = sorted[0]?.population ?? 1;

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        {sorted.map((item, i) => (
          <div key={item.code} className={styles.barWrapper} style={{ top: i * 60 }}>
            <div className={styles.barInfo}>
              <span className={styles.rank}>{i + 1}</span>
              <span className={styles.country}>{item.country}</span>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ width: `${item.population / max * 100}%`, backgroundColor: getCountryColor(item.code) }}>
                <span className={styles.population}>{item.population}M</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}