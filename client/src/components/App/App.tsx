import React from 'react'
import { Link } from 'src/@core/components/Link';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Hello, I'm Pet Starter</h1>
      <div className={styles.logo}>
        <span className={styles.logoInner}>🐶</span>
      </div>
      <Link className={styles.button} to='/details/someId'>Go to details page!</Link>
    </div>
  );
};
