import React, { ChangeEvent, useState } from 'react';
import styles from './style.module.css';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UploadInput({ 
    defaultStringUpload, 
    handleFileChange, 
    maxFileMegaBytesSize, 
    allowedExtensions, 
    style
}: {
    defaultStringUpload: string,
    handleFileChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    maxFileMegaBytesSize: number,
    allowedExtensions: string[],
    style?: React.CSSProperties | undefined
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>(defaultStringUpload);
  const maxFileSize = maxFileMegaBytesSize * 1024 * 1024;

  const isFileValid = (file: File) => {
    // Check file size
    if (file.size > maxFileSize) {
      setErrorMessage(`Tamanho do arquivo excede o limite de ${maxFileMegaBytesSize} MB.`);
      return false;
    }

    // Check file extension
    const fileExtension = file.name.toLowerCase().split('.').pop();
    if (!allowedExtensions.includes(`.${fileExtension}`)) {
      setErrorMessage('Extensão do arquivo inválida. Por favor, escolha um arquivo .doc, .docx ou .pdf.');
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  
  const localHandleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file && isFileValid(file)) {
      setSelectedFileName(file.name);
    }

    if (handleFileChange)
        handleFileChange(event);
  };

  return (
        <label className={styles.customFileUpload} style={style}>
        <input 
            type="file" 
            name="file"
            onChange={localHandleFileChange}
            accept={allowedExtensions.join(',')}
            className={styles.inputFile}
        />
        {errorMessage && ( <p style={{ color: 'red' }}>{errorMessage}</p> )}
        <FontAwesomeIcon style={{color: 'white', marginRight: '4px'}} icon={faCloudArrowUp} /> {selectedFileName}
    </label>
  )
}

export default UploadInput;