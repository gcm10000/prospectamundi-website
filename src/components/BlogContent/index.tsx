import React from 'react';
import style from './style.module.css';
import { CalendarFill } from 'react-bootstrap-icons';
import AuthorBox from '@/components/AuthorBox';
import { PostDto } from '@/interfaces/PostDto';

function BlogContent({ post, content, preview }: { post: PostDto, content: string, preview: boolean}) {

    const createMarkup = () => {
        return { __html: content };
      };

    function getPreviewStyle() : React.CSSProperties | undefined {
        if (preview) {
            const style : React.CSSProperties = {
                border: '1px dashed #000',
                background: 'white'
            };
            return style;
        }
        return undefined;
    }

  return (
    <div className={style.contentWrapper} style={getPreviewStyle()}>
        <section className={style.postHeader}>
            <div className={style.postHeaderContent}>
                <h1 className={style.postHeaderTitle}>{post.title}</h1>
                <div className={style.postDateTime}>
                    <CalendarFill />
                    {!preview && post.createdAt}
                    {preview && '01/01/0001 12h00'}
                </div>
                { post.imageURL && <img src={post.imageURL} 
                        alt={post.title}
                        className={style.postHeaderImg} /> }
            </div>
        </section>
        <section className={style.postContentContainer} dangerouslySetInnerHTML={createMarkup()}>
        </section>
        { !preview && 
            <div style={{marginTop: '60px'}}>
                <AuthorBox srcImg={post.authorProfileImageUrl}
                            name={post.authorName}
                            description={post.authorBio} 
                />
            </div>
        }
    </div>
  )
}

export default BlogContent;
