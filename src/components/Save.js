import React from "react";

export default function Save(props) {
  const save = (event) => {
    let canvas = document.querySelector('.canvas');
    let imageFromCanvas = canvas.toDataURL("image/png");
    let openWindow = window.open('about:blank', 'image from canvas');
    openWindow.document.write("<img src="+imageFromCanvas+" alt='from canvas'/>");
  }
  return (
    <button onClick={save}>
      Save Canvas
    </button>
  );
}