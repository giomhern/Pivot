import { useState, useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div >
        <img
          src={file.preview}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className='border border-copy-light w-1/2 mx-auto rounded-md'>
      <div {...getRootProps({className: 'dropzone'})} className='h-48 flex flex-col gap-y-2 items-center justify-center hover:bg-gray-50 hover:rounded-md'>
              <p className='font-semibold text-wrap'>Drag and drop some files here, or click to select files</p>
              <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/upload--v1.png" alt="upload--v1"/>
        <input {...getInputProps()} />
      </div>
    </section>
  );
};
export default FileUpload;