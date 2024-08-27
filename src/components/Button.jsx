import React from 'react';
import "../Styles/Button.css";

function Button() {
  return (
   <>
  <button onClick={onClick} className='btn' >
      <span style={iconStyle}>{icon}</span>
      <span>{iconText}</span>
    </button>
   </>
  )
}

export default Button