"use client"

import { ReactNode } from 'react'
import styles from './style.module.css'
import SubmitButton from '@/components/SubmitButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CategorizeItem from '@/components/CategorizeItem';
import LastNewsItem from '@/components/LastNewsItem';
import IconButton from '@/components/IconButton';
import FormSearch from '@/components/FormSearch';

function LayoutBase({
    children
}: {
    children: ReactNode
}) {

  return (
    <div style={{minHeight: '100vh', marginTop: '80px', display: 'flex', flexDirection: 'column'}}>
        <div>
            <section className={styles.blogHeader}>
                <h1 className={styles.blogHeadLine}>
                    Blog Prospecta Mundi
                </h1>
                <h2>Inscreva-se e receba atualizações</h2>
                <form method='get' className={styles.formNewsletter}>
                    <input name="q" 
                        className={styles.blogNewsletterInput}
                        type="text" 
                        placeholder='Endereço de E-mail'
                        autoComplete='off'
                    />
                    <SubmitButton text='Enviar' 
                        style={{fontWeight: '500'}}
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
                        <LastNewsItem title='Postagem do Blog Número 1'
                                      srcImg='https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400'
                                      to='#' />
                        <LastNewsItem title='Postagem do Blog Número 1'
                                      srcImg='https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400'
                                      to='#' />
                        <LastNewsItem title='Postagem do Blog Número 1'
                                      srcImg='https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400'
                                      to='#' />
                        <LastNewsItem title='Postagem do Blog Número 1'
                                      srcImg='https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400'
                                      to='#' />

                        <LastNewsItem title='Postagem do Blog Número 1'
                                      srcImg='https://images.unsplash.com/photo-1581464647110-26e129ce2d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fGNyZWF0b3J8ZW58MHx8fHwxNjYxNDA4ODk0&ixlib=rb-1.2.1&q=80&w=1400'
                                      to='#' />
                    </div>
                    <h3 className={styles.blogSideBarTitle}  
                        style={{marginTop: '18px'}}>
                            CATEGORIAS
                    </h3>
                    <div className={styles.blogCategorize}>
                        <CategorizeItem text='Customer Success' />
                        <CategorizeItem text='Gestão Comercial' />
                        <CategorizeItem text='Inteligência Comercial' />
                        <CategorizeItem text='Prospecção Outbound' />
                        <CategorizeItem text='Vendas B2B' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutBase;
