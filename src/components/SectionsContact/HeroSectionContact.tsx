"use client"

import './HeroSectionContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare }  from '@fortawesome/free-solid-svg-icons';
import SectionWithBlur, { Position } from '../SectionWithBlur/SectionWithBlur';
import { useState, useEffect, FormEvent, ChangeEventHandler, ChangeEvent } from 'react';
import contactClient from '@/network/lib/contactClient'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CookieHelper from '../../helpers/CookieHelper';
import UploadInput from '../UploadInput';
import { Button } from '../Button';


//Adicionar captcha v3 também
function HeroSectionContact() {
  const [text, setText] = useState('');
  const [textareaAvaliable, setTextareaAvaliable] = useState(false);
  const [talentPoolChoose, setTalentPoolChoose] = useState<boolean>(false);
  

  const MySwal = withReactContent(Swal);

  const textsToType : string[] = [
    "  Estou interessado no serviço 'Estratégia de Pré-vendas' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Análise de Funil de Vendas' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Qualificação de Leads' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Banco de Talentos de SDR' e gostaria de marcar um horário.",
    "  Quero participar do 'Banco de Talentos'."
  ];

  let index = 0;

  function getTextToType() : string | null {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const q = urlParams.get("q");
    if (!q)
      return null;

    const indexTextToType = Number(q);
    const textToType = textsToType[indexTextToType];

    return textToType;
  }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaAvaliable)
      setText(event.target.value);
  };


  useEffect(() => {
    const textToType = getTextToType();
    if (!textToType){
      setTextareaAvaliable(true);
      return;
    }
    setText('');
    const typeText = () => {
      if (index < textToType.length) {
        setText((prevText) => prevText + textToType.charAt(index));
        index++;
      }
      else {
        setTextareaAvaliable(true);
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeText, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
      setTalentPoolChoose(event.target.checked);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const file = formData.get('file') as File;
    debugger;
    if (file != null && file.size == 0 && talentPoolChoose) {
      MySwal.fire({
        title: <strong>Erro</strong>,
        html: <p>Insira seu currículo e tente novamente.</p>,
        icon: 'error',
        buttonsStyling: false,
        showCancelButton: false,
        confirmButtonText: <Button>Entendido</Button>,
      });
      return;
    };

    const trackId = CookieHelper().getCookie('trackId');
    console.log('trackId', trackId);
    
    if (trackId)
      formData.append('trackId', trackId);

    const client = contactClient();
    const result = await client.post(formData);
    if (result.status == 200) {
      MySwal.fire({
        title: <strong>Sucesso!</strong>,
        html: <p>Mensagem enviado com sucesso e logo entraremos em contato com você!</p>,
        buttonsStyling: false,
        showCancelButton: false,
        confirmButtonText: <Button>Entendido</Button>,
        icon: 'success'
      });
    }
};

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <header className="contact--content">
        <div>

        </div>
        <SectionWithBlur title='Entre em Contato' position={Position.Right}>
          <form onSubmit={handleSubmit}>
              <div className='contact--content--form--partOne'>
                    <div className="form-group-name">
                        <input type="text" name="firstName" placeholder='Nome' required />
                        <input type="text" name="lastName" placeholder='Sobrenome' required />
                    </div>
                    <div className="form-group-name">
                        <input type="text" name="email" placeholder='Endereço de Email' required />
                        <input type="tel" name="telephone" placeholder='Número do WhatsApp' required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="isTalentPool" id="isTalentPool" onChange={handleChecked} checked={talentPoolChoose} />
                        <label htmlFor="isTalentPool" style={{marginLeft: '8px', userSelect: 'none'}}>Desejo me ingressar no banco de talentos</label>
                    </div>
                    <div className="form-group">
                        <textarea 
                            required
                            placeholder='Mensagem' 
                            value={text}
                            name='message'
                            onChange={(e) => {handleChange(e)}}>
                        </textarea>                    
                    </div>
                    { talentPoolChoose && 
                    <div className='form-group' style={{marginBottom: '8px'}}>
                        <UploadInput 
                            defaultStringUpload='Envie seu Currículo'
                            allowedExtensions={['.doc', '.docx', '.pdf']}
                            maxFileMegaBytesSize={3} />
                    </div>
                    }
              </div>

              <button className="form--submit">
                  <span>Enviar</span> 
                  <FontAwesomeIcon style={{color: 'white', 'marginLeft': '7px'}} icon={faArrowUpRightFromSquare} />
              </button>
          </form>
        </SectionWithBlur>
      </header>

    </div>
  );
}

export default HeroSectionContact;