// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import "../Styles/Modal.css"

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [cookies, setCookies] = useState({});
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const cookie = document.cookie.split('=')[1];
    if (cookie !== 'true') {
      setIsOpen(true);
    }
  }, []);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setAnimating(false);
      const expirationDate = new Date(Date.now() + 1113000); // 1 year from now
      document.cookie = `modalClosed=true; expires=${expirationDate.toGMTString()};`;
    }, 500); // animate for 500ms
  };

  return (
    <div>
      {isOpen && (
        <div  className="modal" onClick={closeModal}>
          <div className={`modal-content modal-content-sm ${animating ? 'show' : 'fade'}`}>
        
          <div className="modal-header">
          <div className="modal-title">
            <h5>modal title</h5>
          </div>
          <button onClick={closeModal} className="close">X</button>
          </div>

            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;