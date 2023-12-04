import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card1.css'

type IconSize = 'small' | 'medium' | 'large'; 

export interface Card1Props {
    icon: IconProp,
    iconSize?: IconSize | undefined,
    title: string,
    description: string,
    footer?: any,
    style?: React.CSSProperties | undefined 
}

function Card1({ icon, iconSize, title, description, footer, style } : Card1Props) {
  
  const getIconSize = (size : IconSize | undefined) => {
      if (size == undefined)
          return '7em';

      if (size == 'small')
          return '2em';

      if (size == 'medium')
          return '5em';

      return '7em';
  } 
  
  
  return (
    <div className='fade-in-with-delay'>
      <div className='card1' style={style}>
          <FontAwesomeIcon style={{color: 'black', fontSize: getIconSize(iconSize)}} icon={icon} />
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
