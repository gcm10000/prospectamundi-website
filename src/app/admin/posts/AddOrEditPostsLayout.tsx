"use client"

import React, { FormEvent, useEffect, useState } from 'react'
import AdminLayoutBase from '../AdminLayoutBase';
import { EditorState, convertToRaw, convertFromRaw, EditorProps } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { Editor } from 'react-draft-wysiwyg';
import './layout.css';
import SubmitButton from '@/components/SubmitButton';
import GrayArea from '@/components/GrayArea';
import FileUpload from '@/components/Admin/FileUpload';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import slugify from 'slugify';
import postClient from '@/network/lib/postClient';
import { messageService } from '@/services/messageService';
import { setShowError } from '@/handlers/errorHandling';
import { router } from '@/services/redirectService';
import draftToHtml from 'draftjs-to-html';
import { Checkbox, ListItemText, MenuItem } from '@mui/material';
import categoryClient from '@/network/lib/categoryClient';
import { CategoryDto } from '@/interfaces/CategoryDto';
import { PaginatedList } from '@/interfaces/PaginatedList';
import GroupedSelect from '@/components/Admin/GroupedSelect';
import { PostDto } from '@/interfaces/PostDto';
import BlogContent from '@/components/BlogContent';
import { useSearchParams } from 'next/navigation';


import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

export interface AddOrEditPostLayoutProps {
    mode: "add" | "edit";
}

function AddOrEditPostLayout({ mode } : AddOrEditPostLayoutProps) {
  
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [imageName, setImageName] = useState('');
  const [customSlug, setCustomSlug] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [postPreview, setPostPreview] = useState<PostDto | object>({});
  const [contentPreview, setContentPreview] = useState('');
  const [publishNow, setPublishNow] = useState(false);
  const [disabledAt, setDisabledAt] = useState<string | null>(null);


  const [categoriesFromAPI, setCategoriesFromAPI] = useState<PaginatedList<CategoryDto>>({ 
    items: [],
    pageNumber: 0,
    totalCount: 0,
    totalPages: 0
  });
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>([]);


  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorStateChange = (newState : any) => {
    const rawContentState = getRaw(newState);
    const html = draftToHtml(rawContentState);
    setContentPreview(html);
    setEditorState(newState);
  };

  function getRaw(editorState: EditorState) {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return rawContentState;
  }

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    setTitle(title);

    if (!customSlug) {
      const titleWithoutNumbers = title.replace(/\d+/g, '');
      const newSlug = slugify(titleWithoutNumbers, { lower: true });
      setSlug(newSlug);
    }
  }

  const handleSlugInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!customSlug)
      setCustomSlug(true);

    const slug = event.target.value;
    if (slug == '')
      setCustomSlug(false);

    const newSlug = slug.toLowerCase();
    setSlug(newSlug);
  }

  const handleTagsInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tags = event.target.value;
    setTags(tags);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const rawContentState = getRaw(editorState);
    
    const postRawText = JSON.stringify(rawContentState);
    formData.append('Content', postRawText);
    categories.map((x, index) => {
        formData.append(`CategoryIds[${index}]`, x);
    });

    const htmlString = draftToHtml(rawContentState);
    const extractedText = extractTextFromHTML(htmlString);
    const summaryContent = extractWords(extractedText, 35).trim();
    formData.append('SummaryContent', summaryContent);
    formData.append('PublishNow', publishNow.toString());

    const postId = searchParams.get('id');

    const client = postClient();
    if (!postId) {
      await client.post(formData);
      await messageService.success('Postagem salva e publicada com sucesso.');
    } else {
      await client.put(postId, formData);
      await messageService.success('Postagem atualizada com sucesso.');
    }
    router?.push("/admin/posts");
  }

  function extractTextFromHTML(htmlString: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || tempElement.innerText || '';
}

function extractWords(text: string, wordCount: number): string {
  const words = text.split(/\s+/);
  const limitedWords = words.slice(0, wordCount);
  return limitedWords.join(' ');
}

  useEffect(() => {
    setShowError((errorObject) => {
        const errorArray : string[] = errorObject['image'];
        console.log(errorArray);
        if (errorArray) {
            setErrors(errorArray);
      }
    });
  }, []);


  useEffect(() => {
    async function getPost() {

      if (mode != 'edit')
        return;

      const postId = searchParams.get('id');
      if (!postId) {
        messageService.error("Id da postagem inválido.").then(() => {
          router?.push("/admin/posts");
        });
        return;
      }
      const client = postClient();
      const result = await client.get({ id: postId });
      const post = result.data;
      setTitle(post.title);
      setCustomSlug(true);
      setSlug(post.slug);
      setTags(post.tags);
      setImageName(post.imageURL);
      setDisabledAt(post.disabledAt);

      
      const categoryIds = post.categories.map(x => x.id);
      setCategories(categoryIds);

      const rawContentState = JSON.parse(post.content);
      const newContentState = convertFromRaw(rawContentState);
      const newEditorState = EditorState.createWithContent(newContentState);
      setEditorState(newEditorState);

      const html = draftToHtml(rawContentState);
      setContentPreview(html);
    }

    async function getCategories() {
      const client = categoryClient();
      const result = await client.getAll();
      const resultCategories = result.data;
      setCategoriesFromAPI(resultCategories);
    }

    getPost();
    getCategories();
  }, []);

  useEffect(() => {
        setPostPreview({ title: title, imageURL: imageName });
      }, [title, imageName]);


    const handleFileChange = (file: File) => {
      const imageUrl = URL.createObjectURL(file);
      setImageName(imageUrl);
    };

  return (
    <form onSubmit={handleSubmit}>
        <AdminLayoutBase title={ mode == 'add' ? 'Adicionar Postagem' : 'Editar Postagem'}>
            {
                (mode == "edit" && !!disabledAt) &&
                <GrayArea>
                    <SubmitButton text='Publicar' 
                                  onClick={ async () => {
                                    const postId = searchParams.get('id');
                                    if (!postId)
                                        return;

                                    const client = postClient();
                                    await client.publishPost(postId);
                                    await messageService.success("Postagem publicada com sucesso.");
                                    router?.push("/admin/posts");

                                  }} />
                </GrayArea>
            }
            <GrayAreaInput title='Título' inputName='title' text={title} handleInputChange={handleTitleInputChange} />
            <GrayAreaInput title='Slug' inputName='slug' text={slug} handleInputChange={handleSlugInputChange} />
            <GrayArea style={{flexDirection: 'column', gap: '20px'}}>
              <p style={{ fontWeight: 500, fontSize: '20px', display: 'block' }}>
                  Categorias:
              </p>
              <GroupedSelect label='Categorias'
                             renderValue={(selected) => selected.map(x => categoriesFromAPI.items.find(y => y.id == x)?.name).join(', ')}
                             onChange={(values) => { setCategories(values) }}
                             value={categories}
                             name="categoryIds"
              >
                {
                  categoriesFromAPI.items.map((category, index) => (
                      <MenuItem key={index} value={category.id}>
                          <Checkbox checked={categories.indexOf(category.id) > -1} />
                          <ListItemText primary={category.name} />
                      </MenuItem>
                ))}
              </GroupedSelect>
            </GrayArea>
            <GrayAreaInput title='Tags' inputName='tags' text={tags} handleInputChange={handleTagsInputChange} />
            <GrayArea style={{ flexDirection: 'column', 
                                gap: '20px' }}>
                <p style={{fontWeight: 400, fontSize: '20px'}}>Imagem:</p>
                <FileUpload id='image' 
                            name='image'
                            onChangeFile={handleFileChange}
                            imageName={imageName} />
                <div style={{marginTop: '22px'}}>
                        {errors.map(error => 
                            <p style={{color: 'red', marginTop: '4px', fontWeight: 500}}>{error}</p>
                        )}
                </div>  
            </GrayArea>

            <div>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorStateChange}
                    wrapperClassName="rdw-editor-wrapper"
                    editorClassName="rdw-editor-main"
                    toolbar={{
                        fontFamily: {
                          options: ['DM Sans', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                          className: undefined,
                          component: undefined,
                          dropdownClassName: undefined,
                        },
                        image: {
                            previewImage: true
                        }
                      }}
                />
            </div>
            <div style={{ display: 'flex', 
                          gap: '20px', 
                          background: '#F0F0F0', 
                          flexDirection: 'column',
                          marginLeft: 'auto', 
                          marginRight: 'auto',
                          padding: '20px'}}
            >
                <p style={{fontWeight: 500, fontSize: '20px'}}>Prévia:</p>
                <BlogContent post={postPreview as PostDto} content={contentPreview} preview />
            </div>
            <div style={{display: 'flex', justifyContent: 'right'}}>
              { (mode == 'add' || (mode == 'edit' && !!disabledAt)) && 
                <SubmitButton text='Salvar como Rascunho' type='button' style={{ 
                    border: '1px solid #000', 
                    background: 'white',
                    marginRight: '30px',
                    color: '#20282d' }}
                    onClick={() => setPublishNow(false)}
                /> }
                <SubmitButton 
                    text='Salvar e Publicar'
                    type="submit"
                    style={{
                      marginRight: '30px'
                    }}
                    onClick={() => setPublishNow(true)}
                />                
            </div>
        </AdminLayoutBase>
    </form>
  )
}

export default AddOrEditPostLayout;
