"use client";
import { useState } from "react";
import SimpleBarChart from "@/components/SimpleBarChart/SimpleBarChart";
import YearControls from "@/components/YearControls/YearControls";
import { getAvailableYears, getTopCountries } from "@/data/populationData";
import styles from "./PopulationChart.module.scss";

export default function PopulationChart({ maxCountries = 15 }: { maxCountries?: number }) {
  const years = getAvailableYears();
  const [currentYear, setCurrentYear] = useState(years[0]);

  return (
    <div className={styles.container}>
      <main className={styles.chartSection}>
        <div className={styles.chartWithControls}>
          <div className={styles.chartHeader}>
            <div className={styles.chartTitle}>
              <h2 className={styles.chartLabel}>Population Rankings</h2>
              <span className={styles.currentYear}>{currentYear}</span>
            </div>
            <YearControls years={years} currentYear={currentYear} onYearChange={setCurrentYear} />
          </div>
          <SimpleBarChart data={getTopCountries(currentYear, maxCountries)} maxItems={maxCountries} />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Population figures in millions • UN estimates for demonstration</p>
      </footer>
    </div>
  );
}