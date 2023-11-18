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
        <img src="/images/samantha.jpg"
            className={style.postAuthorImg} />
        <div className={style.postAuthorText}>
            <p style={{fontSize: 'small'}}>Autora</p>
            <h2 className={style.postAuthorTitle}>Samantha Sepulveda</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa.</p>
        </div>
    </section>
  )
}

export default AuthorBox;
