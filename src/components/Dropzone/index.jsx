import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css';

import { FileArrowUp } from 'phosphor-react';

export function Dropzone() {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      { selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Foto - Photo" />
        : <p>
            <FileArrowUp size={20} weight="bold" />
            Foto
          </p> 
      }
    </div>
  )
}