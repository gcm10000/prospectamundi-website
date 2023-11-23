"use client"

import React, { useState } from 'react'
import AdminLayoutBase from '../AdminLayoutBase';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import './layout.css';
import SubmitButton from '@/components/SubmitButton';
import GrayArea from '@/components/GrayArea';
import FileUpload from '@/components/Admin/FileUpload';
import GrayAreaInput from '@/components/Admin/GrayAreaInput';
import slugify from 'slugify';

function AddOrEditPostLayout() {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [customSlug, setCustomSlug] = useState(false);

  const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
  );

  const handleEditorStateChange = (newState : any) => {
    const rawText = JSON.stringify(convertToRaw(newState.getCurrentContent()));
    //Preciso salvar esta variável dentro do banco de dados
    // console.log(rawText);

    //esta aqui fará a conversão após salvar
    // import draftToHtml from 'draftjs-to-html';
    // const contentState = editorState.getCurrentContent();
    // const rawContentState = convertToRaw(contentState);
    // const html = draftToHtml(rawContentState);
    // console.log(html); // Output the HTML content to console
    setEditorState(newState);
  };

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    setTitle(title);

    if (!customSlug) {
      console.log('customSlug', customSlug);
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

  return (
    <AdminLayoutBase title='Adicionar Post'>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
            <GrayAreaInput title='Título' inputName='title' text={title} handleInputChange={handleTitleInputChange} />
            <GrayAreaInput title='Slug' inputName='slug' text={slug} handleInputChange={handleSlugInputChange} />
            <GrayAreaInput title='Tags' inputName='tags' />
            <GrayArea style={{ flexDirection: 'column', 
                               gap: '20px' }}>
                <p style={{fontWeight: 400, fontSize: '20px'}}>Imagem:</p>
                <FileUpload id='image' 
                            name='image' />
            </GrayArea>
        {/* </div> */}

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
        <div style={{display: 'flex', justifyContent: 'right'}}>
            <SubmitButton 
                text='Finalizar' 
            />
        </div>
    </AdminLayoutBase>
  )
}

export default AddOrEditPostLayout;
