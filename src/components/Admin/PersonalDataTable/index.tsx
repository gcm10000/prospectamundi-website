import React from 'react';
import styles from './style.module.css';

function PersonalDataTable({ children } : {
    children: React.ReactNode
}) {
  return (
    <table className={styles.personalDataTable}>
        {children}
    </table>

  )
}

export default PersonalDataTable;
