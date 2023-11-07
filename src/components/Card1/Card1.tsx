import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card1.css'


export interface Card1Props {
    icon: IconProp,
    title: string,
    description: string,
    footer?: any
}

function Card1({ icon, title, description, footer } : Card1Props) {
  return (
    <div className='fade-in-with-delay'>
      <div className='card1'>
          <FontAwesomeIcon style={{color: 'black', fontSize: '7em'}} icon={icon} />
          <div className='text'>
              <h2>{title}</h2>
              <p>{description}</p>
          </div>
          { footer }
      </div>
    </div>
  )
}

export default Card1;
