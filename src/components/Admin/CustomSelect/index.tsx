import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import { setShowError } from '@/handlers/errorHandling';


export interface OptionProps {
    value: string,
    content: string
}

function CustomSelect({ name, options, value, onChange }: {
    name: string,
    options: OptionProps[],
    value?: string,
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}) {

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    // setErrors(['dsd']);
    setShowError((errorObject) => {
        const capitalizedName = capitalizeFirstLetter(name);
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
    <>
      <select name={name} 
              className={styles.customSelect}
              value={value}
              onChange={onChange}
      >
          { options.map(x => 
              <option value={x.value}>{x.content}</option>
          )}        
      </select>
      <div style={{marginTop: '22px'}}>
          {errors.map(error => 
            <p aria-errormessage={name}
              style={{color: 'red', marginTop: '4px'}}>{error}</p>
          )}
      </div>      
    </>
  )
}

export default CustomSelect;
