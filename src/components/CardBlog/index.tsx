"use client"

import React from 'react'
import styles from './style.module.css';
import SubmitButton from '../SubmitButton';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export interface CardBlogProps {
 imgSrc: string,
 title: string,
 description: string,
 author: string
}

function CardBlog({ imgSrc, title, description, author } : CardBlogProps) {
  return (
    <div className={styles.cardBlog}>
        <div className={styles.cardBlogBody}>
            <img src={imgSrc} className={styles.cardBlogContentImg} />
            <h2 className={styles.cardBlogTitle}>{title}</h2>
            <p className={styles.cardBlogBy}>Por: {author}</p>
            <p className={styles.cardBlogDescription}>{description}</p>
        </div>
        <div className={styles.cardBlogButton}>
            <SubmitButton text='Ver Detalhes' icon={faArrowUpRightFromSquare}></SubmitButton>
        </div>
    </div>
  )
}

export default CardBlog
