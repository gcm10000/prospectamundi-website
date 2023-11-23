import React from 'react';
import style from './style.module.css';
import LayoutBase from '../LayoutBlogBase';
import { CalendarFill } from 'react-bootstrap-icons';
import AuthorBox from '@/components/AuthorBox';


function PostLayout() {
  return (
    <>
        <LayoutBase>
            <div>
                <section className={style.postHeader}>
                    <div className={style.postHeaderContent}>
                        <h1 className={style.postHeaderTitle}>Terceirizar a prospecção de empresas é um bom negócio?</h1>
                        <div className={style.postDateTime}>
                            <CalendarFill />
                            14 DE NOVEMBRO DE 2023 - 12H00
                        </div>
                        <img src="https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400" 
                             alt="" 
                             className={style.postHeaderImg} />
                    </div>
                </section>
                <section className={style.postContentContainer}>
                    <h2 className={style.postSubHeading}>Create Best UX Design</h2>
                    <p className={style.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa. Proin nec sapien velit. Sed congue quis nisl id rhoncus. Nullam odio metus, ultricies sed mattis vitae, sollicitudin vitae mi. Donec cursus mauris a urna pharetra, eu tristique nisi dignissim. Aenean at finibus ante. Nullam vulputate neque nec ligula ullamcorper, sed mattis dui consequat. Donec bibendum eu ligula ac tempor.</p>
                    <p className={style.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa. Proin nec sapien velit. Sed congue quis nisl id rhoncus. Nullam odio metus, ultricies sed mattis vitae, sollicitudin vitae mi. Donec cursus mauris a urna pharetra, eu tristique nisi dignissim. Aenean at finibus ante. Nullam vulputate neque nec ligula ullamcorper, sed mattis dui consequat. Donec bibendum eu ligula ac tempor.</p>
                    <h2 className={style.postSubHeading}>Create Best UX Design</h2>
                    <p className={style.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa. Proin nec sapien velit. Sed congue quis nisl id rhoncus. Nullam odio metus, ultricies sed mattis vitae, sollicitudin vitae mi. Donec cursus mauris a urna pharetra, eu tristique nisi dignissim. Aenean at finibus ante. Nullam vulputate neque nec ligula ullamcorper, sed mattis dui consequat. Donec bibendum eu ligula ac tempor.</p>
                    <p className={style.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa. Proin nec sapien velit. Sed congue quis nisl id rhoncus. Nullam odio metus, ultricies sed mattis vitae, sollicitudin vitae mi. Donec cursus mauris a urna pharetra, eu tristique nisi dignissim. Aenean at finibus ante. Nullam vulputate neque nec ligula ullamcorper, sed mattis dui consequat. Donec bibendum eu ligula ac tempor.</p>
                    <p className={style.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa. Proin nec sapien velit. Sed congue quis nisl id rhoncus. Nullam odio metus, ultricies sed mattis vitae, sollicitudin vitae mi. Donec cursus mauris a urna pharetra, eu tristique nisi dignissim. Aenean at finibus ante. Nullam vulputate neque nec ligula ullamcorper, sed mattis dui consequat. Donec bibendum eu ligula ac tempor.</p>
                </section>
                <div style={{marginTop: '60px'}}>
                    <AuthorBox srcImg="/images/samantha.jpg"
                               name="Samantha Sepulveda"
                               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis blandit nisi, sit amet hendrerit enim vestibulum fermentum. Phasellus lobortis orci neque, eget volutpat augue dignissim sit amet. Nunc egestas est ac nibh faucibus, nec malesuada eros vestibulum. Morbi lacus massa, condimentum eget interdum in, lacinia ut massa." 
                    />
                </div>
            </div>
        </LayoutBase>
    </>
  )
}

export default PostLayout;
