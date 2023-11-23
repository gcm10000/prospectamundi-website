import React from 'react';
import style from './style.module.css';

function AuthorBox({
    srcImg,
    name,
    description }: {
    srcImg: string,
    name: string,
    description: string
    }) {
  return (
    <section className={style.postAboutAuthor}>
        <img 
            src={srcImg}
            className={style.postAuthorImg}
            width={150}
            height={150} 
        />
        <div className={style.postAuthorText}>
            <p style={{fontSize: 'small'}}>Autor(a)</p>
            <h2 className={style.postAuthorTitle}>{name}</h2>
            <p>{description}</p>
        </div>
    </section>
  )
}

export default AuthorBox;
