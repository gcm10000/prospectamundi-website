import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './style.module.css';


function IconButton({
    icon,
    circleBorder,
    type
}: {
    icon: IconProp,
    circleBorder?: boolean,
    type?: "submit" | "reset" | "button" | undefined
}) {
    const buttonStyle = getStyle();

    function getStyle() {
        if (circleBorder)
            return styles.iconButton + ' ' + styles.iconButtonBorderRadius;

        return styles.iconButton;
    }

  return (
    <button className={buttonStyle} type={type}>
        <FontAwesomeIcon style={{color: 'white', 'margin': '0 auto'}} icon={icon} />
    </button>
  )
}

export default IconButton;
