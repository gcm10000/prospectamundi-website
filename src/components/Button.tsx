import { UrlObject } from 'url';
import './Button.css';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

const STYLES = ['btn--primary', 'form--submit', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
type Url = string | UrlObject;

export interface ButtonProps {
    children? : ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: MouseEventHandler | undefined;
    buttonStyle? : string; 
    buttonSize? : string;
    to?: Url;
}

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    to} : ButtonProps) => {
    const checkButtonStyle = STYLES.includes(buttonStyle || '') 
    ? buttonStyle 
    : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize || '') ? buttonSize : SIZES[0];

    return (
        <Link href={to || ''} className='btn-mobile' style={{fontSize: '0px'}}>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>

        </Link>
    )
}