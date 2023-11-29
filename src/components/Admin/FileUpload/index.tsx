import React, { useState, ChangeEvent, useRef } from 'react';
import { CloudUpload } from 'react-bootstrap-icons';

function FileUpload({ id, name, onChangeFile, imageName } : {
    id : string,
    name : string,
    onChangeFile?: ((file: File) => void) | undefined,
    imageName? : string | undefined
}) {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      if (onChangeFile)
          onChangeFile(file);
    }
  };
  
    const handleFileSelect = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    function getImageName() {
      if (imageName)
        return imageName;
      return selectedFile ? selectedFile.name : '';
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #767676', cursor: 'pointer' }}>
      <label style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '45px',
        padding: '0 10px',
        borderRight: '1px solid #767676',
        cursor: 'pointer',
        background: 'white',
      }} onClick={handleFileSelect}>
        <div style={{
          height: '25px',
          width: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <CloudUpload width={25} height={25} />
        </div>
      </label>
      <input
        id={id}
        type="file"
        name={name}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <input
        type="text"
        style={{
          height: '45px',
          paddingLeft: '15px',
          paddingRight: '8px',
          border: '0px',
          outline: 0,
          flex: 1,
          cursor: 'pointer'
        }}
        value={getImageName()}
        readOnly
        onClick={handleFileSelect}
      />
    </div>
  );
}

export default FileUpload;
