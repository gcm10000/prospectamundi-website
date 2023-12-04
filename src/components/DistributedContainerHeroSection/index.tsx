import React from 'react';
import './nav.css';
import styles from './style.module.css';
import SubmitButton from '../SubmitButton';

function DistributedContentHeroSection() {
  return (
    <div className={styles.distributedHeroContainerWrapper}>
        <div className={styles.distributedHeroContainerDivider}>
            <div className={styles.distributedHeroContainerHeadline}>
              <h1 className={styles.distributedHeroContainerHeadlineTitle}>
              Vendas <b style={{color: 'green'}}>Ampliadas</b> e <b style={{color: 'green'}}>Sucesso</b> Garantido
              </h1>
              <h2 className={styles.distributedHeroContainerHeadlineSubTitle}>
              Descubra Gargalos Invisíveis, Aumente suas Vendas e <b style={{color: 'green'}}>Conquiste</b> o Sucesso Ininterrupto do seu Negócio.
              </h2>
          </div>
          <div className={styles.heroSectioncontentForm}>
              <div>
                  <form>
                      <div className={styles.contentFormPartOne}>
                      <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="text" name="firstName" placeholder='Nome' required />
                              <input type="text" name="lastName" placeholder='Sobrenome' required />
                          </div>
                          <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="text" name="companyName" placeholder='Nome da Empresa' required />
                              <select name="companySize" required>
                                  <option value="" disabled selected>Tamanho da Empresa</option>
                                  <option value="Até 10 funcionários">Até 10 funcionários</option>
                                  <option value="De 10 a 50 funcionários">De 10 a 50 funcionários</option>
                                  <option value="De 50 a 100 funcionários">De 50 a 100 funcionários</option>
                                  <option value="Mais de 100 funcionários">Mais de 100 funcionários</option>
                              </select>
                          </div>
                          <div className={styles.heroSectioncontentFormGroupName}>
                              <input type="email" name="emailAddress" placeholder='Email' required />
                              <input type="tel" name="telephone" placeholder='Número de Whatsapp' required />
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