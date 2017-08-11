import React from "react";

export default function ImageStamp(props) {

  const imageUpload = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    
    // why is this stupid? aka why doesn't debugger hit inside this?
    reader.onload = function(event) {
      let preview = document.querySelector('.stamp-preview')
      preview.src = reader.result;
    };

    let preview = document.querySelector('.stamp-preview')
    preview.src = reader.readAsDataURL(file);
  }

  return (
    <div>
      <input 
        type="file" 
        onChange={imageUpload}
      />
      <img 
        className="stamp-preview" 
        src={require('../../public/img/st-icon.png')} 
        height="50" 
        width="50" 
        alt="Stamp preview" 
      />
  </div>
  );
}