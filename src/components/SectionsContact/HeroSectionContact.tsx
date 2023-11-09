"use client"

// import '../../App.css';
import './HeroSectionContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare }  from '@fortawesome/free-solid-svg-icons';
import SectionWithBlur, { Position } from '../SectionWithBlur/SectionWithBlur';
import { useState, useEffect, FormEvent } from 'react';
import contactClient from '@/network/lib/contactClient'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CookieHelper from '../../helpers/CookieHelper';

//Adicionar captcha v3 também
function HeroSectionContact() {
  const [text, setText] = useState('');
  const [textareaAvaliable, setTextareaAvaliable] = useState(false);

  const MySwal = withReactContent(Swal);

  const textsToType : string[] = [
    "  Estou interessado no serviço 'Estratégia de Pré-vendas' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Análise de Funil de Vendas' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Qualificação de Leads' e gostaria de marcar um horário.",
    "  Estou interessado no serviço 'Banco de Talentos de SDR' e gostaria de marcar um horário."
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
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
                    <div className="form-group">
                        <input type="text" name="email" placeholder='Endereço de Email' style={{width: '100%'}} required />
                    </div>
              </div>
              <textarea 
                required
                placeholder='Mensagem' 
                value={text}
                name='message'
                onChange={(e) => {handleChange(e)}}></textarea>
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