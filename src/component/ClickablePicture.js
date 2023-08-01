import React, { useState } from 'react';
function ClickablePicture({ img, imgClicked }) {

  const [togglePhoto, setTogglePhoto] = useState(false);

  const toggleImage = () => {
    setTogglePhoto(!togglePhoto);
  };

  return (
    <img src={togglePhoto ? imgClicked : img} onClick={toggleImage} alt="" />
  );
}

export default ClickablePicture;
