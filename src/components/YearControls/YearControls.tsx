"use client";
import { useState, useEffect } from "react";
import styles from "./YearControls.module.scss";

export default function YearControls({ years, currentYear, onYearChange }: { years: number[], currentYear: number, onYearChange: (year: number) => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const currentIndex = years.indexOf(currentYear);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const nextIndex = currentIndex + 1;
      onYearChange(nextIndex >= years.length ? years[0] : years[nextIndex]);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, years, onYearChange]);

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.mainControls}>
        <button className={styles.navButton} onClick={() => onYearChange(years[currentIndex - 1])} disabled={currentIndex <= 0}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <select value={currentYear} onChange={(e) => { onYearChange(parseInt(e.target.value)); setIsPlaying(false); }} className={styles.yearDropdown}>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
        <button className={styles.navButton} onClick={() => onYearChange(years[currentIndex + 1])} disabled={currentIndex >= years.length - 1}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
      <button className={`${styles.playButton} ${isPlaying ? styles.playing : ""}`} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> : 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        }
      </button>
    </div>
  );
}