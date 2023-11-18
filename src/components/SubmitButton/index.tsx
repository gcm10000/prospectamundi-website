import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties } from 'react';
import styles from './style.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function SubmitButton({
    text,
    icon,
    circleBorder,
    style
}: {
    text: string,
    icon?: IconProp,
    circleBorder?: boolean,
    style?: CSSProperties | undefined
}) {

    const buttonStyle = getStyle();

    function getStyle() {
        if (circleBorder)
            return styles.submitButton + ' ' + styles.submitButtonBorderRadius;

        return styles.submitButton;
    }

  return (
    <button className={buttonStyle} style={style}>
        <span style={{fontWeight: '400', margin: '0 auto'}}>{text}</span> 
        { icon && <FontAwesomeIcon style={{color: 'white', marginLeft: '12px'}} icon={icon} /> }
    </button>
  )
}

export default SubmitButton;
