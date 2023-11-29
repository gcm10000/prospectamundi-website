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
        const errorArray : string[] = errorObject[inputName];
        if (errorArray) {
            setErrors(errorArray);
      }
    });
  }, []);

  
  return (
    <GrayArea style={{ flexDirection: 'column', 
            gap: '20px', ...style }}
    >
        <p style={{ fontWeight: 500, fontSize: '20px' }}>
            {title}:
        </p>
        <div style={{display: 'block'}}>
            <CustomInput
                inputName={inputName}
                placeHolder={title}
                handleInputChange={handleInputChange}
                text={text}
                type={type}
                style={{width: '100%'}}
            />
            <div style={{marginTop: '22px'}}>
                    {errors.map(error => 
                        <p style={{color: 'red', marginTop: '4px', fontWeight: 500}}>{error}</p>
                    )}
            </div>  
        </div>
    </GrayArea>
  )
}

export default GrayAreaInput;
