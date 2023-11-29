"use client"

import { FormEvent, ReactNode } from 'react'
import styles from './style.module.css'
import SubmitButton from '@/components/SubmitButton';
import CategorizeItem, { CategorizeItemProps } from '@/components/CategorizeItem';
import LastNewsItem, { LastNewsItemProps } from '@/components/LastNewsItem';
import FormSearch from '@/components/FormSearch';
import { PaginatedList } from '@/interfaces/PaginatedList';
import { PostDto } from '@/interfaces/PostDto';
import { CategoryDto } from '@/interfaces/CategoryDto';
import newsletterSubscriberClient from '@/network/lib/newsletterSubscriberClient';
import { messageService } from '@/services/messageService';


function LayoutBase({
    children,
    latestPosts,
    categories
}: {
    children: ReactNode,
    latestPosts: PaginatedList<PostDto>,
    categories: PaginatedList<CategoryDto>
}) {
    const categorizeItems : CategorizeItemProps[] = categories.items.map((x) => ({
        text: x.name,
        to: `/blog/categorias/${x.slug}`
    }));

    const lastNews : LastNewsItemProps[] = latestPosts.items
            .map((x, index) => ({
                key: index,
                title: x.title,
                srcImg: x.imageURL,
                to: '/blog/' + x.slug
            }));

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const client = newsletterSubscriberClient();
        await client.post(formData);
        messageService.success("Seu e-mail foi enviado com sucesso. Em breve você receberá newsletter de novas publicações.");
    }

  return (
    <div style={{minHeight: '100vh', marginTop: '80px', display: 'flex', flexDirection: 'column'}}>
        <div>
            <section className={styles.blogHeader}>
                <h1 className={styles.blogHeadLine}>
                    Blog Prospecta Mundi
                </h1>
                <h2>Inscreva-se e receba atualizações</h2>
                <form className={styles.formNewsletter} onSubmit={handleSubmit}>
                    <input name="email" 
                        className={styles.blogNewsletterInput}
                        type="text" 
                        placeholder='Endereço de E-mail'
                        required
                    />
                    <SubmitButton text='Enviar' 
                        style={{fontWeight: '500'}}
                        type='submit'
                    />
                </form>
            </section>
            <hr />
            <div className={styles.blogWrapper}>
                {children}
                <div className={styles.blogSideBar}>
                    <FormSearch 
                        placeHolder='Quero saber sobre...' 
                        nameSearchInput='q'
                    />
                    <h3 className={styles.blogSideBarTitle}>ÚLTIMAS NOTÍCIAS</h3>
                    <div className={styles.blogNews}>
                        { lastNews.map((x, index) => (
                            <LastNewsItem key={index}
                                title={x.title}
                                srcImg={x.srcImg}
                                to={x.to} />
                        )) }
                    </div>
                    <h3 className={styles.blogSideBarTitle}  
                        style={{marginTop: '18px'}}>
                            CATEGORIAS
                    </h3>
                    <div className={styles.blogCategorize}>
                        {categorizeItems.map((x, index) => (
                            <CategorizeItem key={index} text={x.text} to={x.to} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutBase;
