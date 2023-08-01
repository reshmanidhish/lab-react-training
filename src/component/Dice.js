import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from  '../assets/images/dice1.png'
import dice2 from  '../assets/images/dice2.png'
import dice3 from  '../assets/images/dice3.png'
import dice4 from  '../assets/images/dice4.png'
import dice5 from  '../assets/images/dice5.png'
import dice6 from  '../assets/images/dice6.png'
import React, { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(diceEmpty);
  const diceImages = [
    dice1,dice2,dice3,dice4,dice5,dice6
   
  ];

  const handleClick = () => {
    setDiceValue(diceEmpty);

    // Wait for 1 second before changing the dice value
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceValue(diceImages[randomIndex]);
    }, 1000);
  };

  return <img height={56}src={diceValue} alt="Dice" onClick={handleClick} />;
};

export default Dice;
