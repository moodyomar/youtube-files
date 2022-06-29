import React, { useState } from 'react';
import './App.css'
import {useDropzone} from 'react-dropzone';



const App = () => { 

const [files,setFiles] = useState([])
const {getRootProps,getInputProps} = useDropzone({
  accept:"image/*",
  onDrop:(acceptedFiles) => {
    setFiles(
      acceptedFiles.map(file => Object.assign(file,{
        preview:URL.createObjectURL(file)
      }))
    )
    console.log(acceptedFiles);
    
  }
})

const images = files.map(file => (
  <img key={file.name} src={file.preview} 
  alt="image" style={{width:'200px',height:'200px'}} />
))

return(

<>
<div className="dropArea" {...getRootProps()}>
  <input {...getInputProps()} />
  <p className="text">
    Drag n Drop Here
  </p>
</div>

<div>{images}</div>
</>

)
}

export default App