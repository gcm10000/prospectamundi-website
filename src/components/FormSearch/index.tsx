"use client"

import React, { useState } from 'react';
import styles from './style.module.css';
import IconButton from '../IconButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../CustomInput';
import { useSearchParams } from 'next/navigation'


function FormSearch({
    placeHolder,
    nameSearchInput,
    handleSubmit,
} : {
    placeHolder: string,
    nameSearchInput: string,
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined,
}) {

  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  const [inputValue, setInputValue] = useState<string | undefined>(search || undefined);

  return (
    <form className={styles.blogSearch} method='get' action={'/blog'} onSubmit={handleSubmit}>
        <CustomInput placeHolder={placeHolder}
                     inputName={nameSearchInput}
                     handleInputChange={(e) => setInputValue(e.target.value)}
                     text={inputValue}
        />
        <IconButton icon={faSearch} 
                    circleBorder
                    type='submit'
        />
    </form>
  )
}

export default FormSearch;
