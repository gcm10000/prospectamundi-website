import React from 'react';
import "./SectionWithBlur.css";

export interface SectionWithBlurProps {
    title?: string;
    subtitle?: string;
    children: any;
    position: Position;
    styleH1?: React.CSSProperties;
}

export enum Position {
    Left,
    Right
}

function SectionWithBlur({ title, subtitle, children, position, styleH1} : SectionWithBlurProps) {
    const getStyle = () => {
        if (position == Position.Left){
            const s : React.CSSProperties = {marginRight: 'auto' };
            return s;
        }

        const s : React.CSSProperties = {marginLeft: 'auto' };
        return s;
    }

    const style = getStyle();

  return (
    <section className='contact--content--form contact--content--form--aboutus' style={style}>
        { title && <h1 style={styleH1}>{title}</h1> }
        { subtitle && <h2>{subtitle}</h2> }
        <div className='contact--content--form--inside'>
            {children}
        </div>
    </section>
  )
}

export default SectionWithBlur
