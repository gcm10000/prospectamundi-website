import React from 'react'
import { HexagonFill } from 'react-bootstrap-icons';
import styles from './style.module.css';
import Link from 'next/link';

function CategorizeItem({ text } : { text : string }) {
  return (
    <p className={styles.blogCategorizeItem}>
        <HexagonFill className={styles.blogCategorizeItemIcon} /> 
        <Link href="#" className={styles.blogCategorizeItemLink}>
            {text}
        </Link>
    </p>
  )
}

export default CategorizeItem;
