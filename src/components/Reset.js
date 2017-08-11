import React from "react";

export default function Reset(props) {
  const reset = (event) => {
    let canvas = document.querySelector('.canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  return (
    <button onClick={reset}>
      Reset Canvas
    </button>
  );
}