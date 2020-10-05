import React, { ReactElement, useState } from "react";
import styles from "../Main.module.css";

interface Props {}

export default function TimeFrame({}: Props): ReactElement {
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);

  return (
    <div className={styles.timeframe}>
      <div className={styles.timeframeButtonGroup}>
        <button
          style={{ backgroundColor: week ? "#aaaaaa" : "#ffffff" }}
          onClick={(e) => {
            e.preventDefault();
            if (!week) {
              setWeek(true);
              setMonth(false);
              setYear(false);
            }
          }}
        >
          Week
        </button>
        <button
          style={{ backgroundColor: month ? "#aaaaaa" : "#ffffff" }}
          onClick={(e) => {
            e.preventDefault();
            if (!month) {
              setWeek(false);
              setMonth(true);
              setYear(false);
            }
          }}
        >
          Month
        </button>
        <button
          style={{ backgroundColor: year ? "#aaaaaa" : "#ffffff" }}
          onClick={(e) => {
            e.preventDefault();
            if (!year) {
              setWeek(false);
              setMonth(false);
              setYear(true);
            }
          }}
        >
          Year
        </button>
      </div>
    </div>
  );
}
