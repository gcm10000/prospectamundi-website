import React from 'react';
import styles from './style.module.css';

function CustomInput({ placeHolder, 
  inputName, 
  style, 
  text,
  handleInputChange,
  type }: {
    placeHolder: string,
    inputName: string,
    style?: React.CSSProperties | undefined,
    text?: string | undefined,
    handleInputChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    type?: React.HTMLInputTypeAttribute | undefined,
    name?: string | undefined
}) {
  return (
    <input name={inputName}
        className={styles.textInput}
        style={style}
        type={type || 'text'} 
        placeholder={placeHolder}
        autoComplete='off'
        onChange={handleInputChange}
        value={text}
    />
  )
}

export default CustomInput;
