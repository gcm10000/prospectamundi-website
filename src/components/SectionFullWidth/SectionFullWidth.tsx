import React from 'react';
import './SectionFullWidth.css';

export interface SectionFullWidthProps {
    children: any;
    style?: React.CSSProperties;
    title?: string;
    className?: string;
    id?: string;
    reff?: any;
}

function SectionFullWidth({children, style, title, className, id, reff} : SectionFullWidthProps) {
  return (
    <section className={className ? 'sectionfullWidth ' + className: 'sectionfullWidth'} style={style} id={id} ref={reff}>
        {title && <h1 className='sectionfullWidth--title'>{title}</h1> }
        <div className='sectionfullWidth--content'>
            {children}
        </div>
    </section>
  )
}

export default SectionFullWidth
