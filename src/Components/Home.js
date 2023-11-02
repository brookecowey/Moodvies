import React from "react";
import styles from "./Home.module.css";
import MoodSelector from './MoodSelector.js'

export default function Home() {

  
  return (
    <div className={styles.main}>
      <div className={styles.subContainer}>
        <div className={styles.titles}>
          <p>Welcome to Moodvies, your custom mood movie selector!</p>
        </div>

      </div>
      <MoodSelector />
    </div>
  );
}