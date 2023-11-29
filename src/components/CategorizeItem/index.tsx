import React from 'react'
import { HexagonFill } from 'react-bootstrap-icons';
import styles from './style.module.css';
import Link from 'next/link';

export interface CategorizeItemProps {
    text : string, 
    to: string 
}

function CategorizeItem({ text, to } : CategorizeItemProps) {
  return (
    <Link href={to}>
      <p className={styles.blogCategorizeItem}>
          <HexagonFill className={styles.blogCategorizeItemIcon} /> 
          <label className={styles.blogCategorizeItemLink}>{text}</label>
      </p>
    </Link>
  )
}

export default CategorizeItem;
