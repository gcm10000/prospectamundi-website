import React, { FormEvent, useEffect, useState } from 'react';
import './nav.css';
import styles from './style.module.css';
import SubmitButton from '../SubmitButton';
import leadClient from '@/network/lib/leadClient';
import { messageService } from '@/services/messageService';
import { setShowError } from '@/handlers/errorHandling';

interface ErrorObject {
    [key: string]: string | string[];
  }

function DistributedContentHeroSection() {

    // const [errors, setErrors] = useState([]);

    const onHandleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        /*
                public string? LeadSource { get; init; } = null!;
        public string? LandingPageName { get; init; } = null!;
        */
        const fullUrl = window.location.href;
        debugger;
        formData.append('LeadSource', fullUrl);
        formData.append('LandingPageName', 'Vendas Ampliadas e Sucesso Garantido');
        const client = leadClient();
        const result = await client.post(formData);
        if (result.status == 200) {
            await messageService.success('Dados enviados com sucesso.');
            return;
        }
        console.log('errors', result.data);
        await messageService.error('');
    }

    
  useEffect(() => {
    setShowError((errorObject) => {
        const errorMessages = extractErrorMessages(errorObject);
        messageService.error(errorMessages.join(', '));
    });
  }, []);

  
  function extractErrorMessages(obj: ErrorObject): string[] {
    const errorMessages: string[] = [];
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const messages = obj[key];
        if (Array.isArray(messages)) {
          errorMessages.push(...messages);
        }
      }
    }
  
    return errorMessages;
  }

  return (
    <div className={styles.distributedHeroContainerWrapper}>
        <div className={styles.distributedHeroContainerDivider}>
            <div className={styles.distributedHeroContainerHeadline}>
              <h1 className={styles.distributedHeroContainerHeadlineTitle}>
              Vendas <b style={{color: '#00d13f'}}>Ampliadas</b> e <b style={{color: '#00d13f'}}>Sucesso</b> Garantido
              </h1>
              <h2 className={styles.distributedHeroContainerHeadlineSubTitle}>
              Descubra Gargalos Invisíveis, Aumente suas Vendas e <b style={{color: '#00d13f'}}>Conquiste</b> o Sucesso Ininterrupto do seu Negócio.
              </h2>
          </div>
          <div className={styles.heroSectioncontentForm}>
              <div>
                  <form onSubmit={onHandleSubmit}>
                      <div className={styles.contentFormPartOne}>
                      <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="text" name="firstName" min={1} max={100} placeholder='Nome' required />
                              <input type="text" name="lastName" min={1} max={100} placeholder='Sobrenome' required />
                          </div>
                          <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="text" name="companyName" max={150} placeholder='Nome da Empresa' required />
                              <select name="companySize" required>
                                  <option value="" disabled selected>Tamanho da Empresa</option>
                                  <option value="Até 10 funcionários">Até 10 funcionários</option>
                                  <option value="De 10 a 50 funcionários">De 10 a 50 funcionários</option>
                                  <option value="De 50 a 100 funcionários">De 50 a 100 funcionários</option>
                                  <option value="Mais de 100 funcionários">Mais de 100 funcionários</option>
                              </select>
                          </div>
                          <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="email" name="emailAddress" min={4} max={100} placeholder='Email' required />
                              <input type="tel" name="telephone" min={4} max={20} placeholder='Número de Whatsapp' required />
                          </div>
                          <div className={styles.heroSectioncontentFormGroupName}>
                              <textarea 
                                required
                                placeholder='Descreva os desafios que você enfreta em suas estratégias de vendas' 
                                // value={text}
                                name='message'
                                // onChange={(e) => {handleChange(e)}}
                              >
                              </textarea>
                          </div>
                          <div style={{marginTop: '15px'}}>
                              <SubmitButton text='Agende Sua Consultoria Gratuita' 
                                  style={{fontSize: 'xx-small', width: '100%'}}
                              />
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        </div>
  </div>
  )
}

export default DistributedContentHeroSection;