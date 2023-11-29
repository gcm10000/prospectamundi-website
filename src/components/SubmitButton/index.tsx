import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties } from 'react';
import styles from './style.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

function SubmitButton({
    text,
    icon,
    circleBorder,
    style,
    to,
    onClick,
    type
}: {
    text: string,
    icon?: IconProp,
    circleBorder?: boolean,
    style?: CSSProperties | undefined,
    to?: string | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    type?: "button" | "submit" | "reset" | undefined

}) {

    const buttonStyle = getStyle();

    function getStyle() {
        if (circleBorder)
            return styles.submitButton + ' ' + styles.submitButtonBorderRadius;

        return styles.submitButton;
    }

  return (
    <>
        { !to && <button className={buttonStyle} style={style} onClick={onClick}>
            <div style={{fontWeight: '400', margin: '0 auto'}}>{text}</div> 
            { icon && <FontAwesomeIcon style={{color: 'white', marginLeft: '12px'}} icon={icon} /> }
        </button> }
        { to && 
            <Link href={to}>
                <button className={buttonStyle} style={style} onClick={onClick} type={type}>
                    <div style={{fontWeight: '400', margin: '0 auto'}}>{text}</div> 
                    { icon && <FontAwesomeIcon style={{color: 'white', marginLeft: '12px'}} icon={icon} /> }
                </button>
            </Link> }
    </>

  )
}

export default SubmitButton;
