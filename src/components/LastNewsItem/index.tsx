import Link from 'next/link';
import React from 'react';
import styles from './style.module.css';

export interface LastNewsItemProps {
    to: string,
    srcImg: string,
    title: string,
    description?: string | undefined
}

function LastNewsItem({
    to,
    srcImg,
    title,
    description
}: LastNewsItemProps) {
  return (
    <Link href={to}>
        <div className={styles.blogNewsContent}>
            <img src={srcImg}
                 className={styles.blogNewsContentImg}
            />
            <div className={styles.blogNewsContentText}>
                <h3>{title}</h3>
                { description && <p>{description}</p> }
            </div>
        </div>
    </Link>
  )
}

export default LastNewsItem;
