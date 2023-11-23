import CustomInput from '@/components/CustomInput';
import GrayArea from '@/components/GrayArea';
import { setShowError } from '@/handlers/errorHandling';
import React, { useEffect, useState } from 'react';

function GrayAreaInput({ title, inputName, style, text, handleInputChange, type }: { 
        title: string,
        inputName: string,
        style?: React.CSSProperties | undefined,
        text?: string | undefined,
        handleInputChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
        type?: React.HTMLInputTypeAttribute | undefined
       }) {

        
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setShowError((errorObject) => {
        const capitalizedName = capitalizeFirstLetter(inputName);
        const errorArray : string[] = errorObject[capitalizedName];
        if (errorArray) {
            setErrors(errorArray);
      }
    });
  }, []);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <GrayArea style={{ flexDirection: 'column', 
            gap: '20px', ...style }}
    >
        <p style={{ fontWeight: 500, fontSize: '20px' }}>
            {title}:
        </p>
        <div style={{display: 'flex'}}>
            <CustomInput
                inputName={inputName}
                placeHolder={title}
                handleInputChange={handleInputChange}
                text={text || ''}
                type={type}
            />
            <div style={{marginTop: '22px'}}>
                    {errors.map(error => 
                        <p style={{color: 'red', marginTop: '4px'}}>{error}</p>
                    )}
            </div>  
        </div>
    </GrayArea>
  )
}

export default GrayAreaInput;
