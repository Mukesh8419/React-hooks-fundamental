import React, { useEffect } from 'react';

const Modal = ({modalContent}) => {//destructuring modalContent
  return (
  <div className="modal">
  <p>{modalContent} </p>
  </div>

  )
  };

export default Modal;
