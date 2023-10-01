import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.subContainer}>
        <div className={styles.titles}>
          <p>Welcome to Moodvies, your custom mood movie selector!</p>
        </div>
      
      </div>
      <div className={styles.tag}>
        <p>
          <strong>Moodvies</strong> helps you keep pick a movie based on your current mood.
        </p>
      </div>
    </div>
  );
}