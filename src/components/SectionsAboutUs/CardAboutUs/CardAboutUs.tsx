import './CardAboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardAboutUsProps {
    icon: IconProp,
    title: string,
    description: string,
    className?: string
}

function CardAboutUs({ icon, title, description, className } : CardAboutUsProps) {
  return (
    <div className={className}>
        <div className='cardaboutus cardaboutus--content'>
            <div className='cardaboutus--titlesection'>
                <FontAwesomeIcon className='icon' style={{color: 'black'}} icon={icon} />
                <h2 className='title'>{title}</h2>
            </div>
            <div className='text'>
                <span>{description}</span>
            </div>
        </div>
  </div>
  )
}

export default CardAboutUs
