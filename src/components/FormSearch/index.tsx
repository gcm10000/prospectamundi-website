import React from 'react';
import styles from './style.module.css';
import IconButton from '../IconButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../CustomInput';

function FormSearch({
    placeHolder,
    nameSearchInput
} : {
    placeHolder: string,
    nameSearchInput: string
}) {

  return (
    <form className={styles.blogSearch}>
        <CustomInput placeHolder={placeHolder}
                   inputName={nameSearchInput}
                   text=''
                    />
        <IconButton icon={faSearch} 
                    circleBorder
        />
    </form>
  )
}

export default FormSearch;
