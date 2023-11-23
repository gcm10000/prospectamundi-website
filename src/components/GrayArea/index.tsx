import React, { ReactNode } from 'react';
import styles from './style.module.css';

function GrayArea({children, style }: {
    children: ReactNode,
    style?: React.CSSProperties | undefined
}) {
  return (
    <article className={styles.grayArea} style={style}>
        { children }
    </article>
  )
}

export default GrayArea;
