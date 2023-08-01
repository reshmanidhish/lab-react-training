import React, { useState } from 'react';
function LikeButton() {
  const [count, setCount] = useState(0);
  const [colorCount, setColorCount] = useState(0);
  const colors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ];


  const addLikes = () => {
    const newColorCount = colorCount === colors.length-1 ? 0 : colorCount + 1
    setColorCount(newColorCount)
    setCount(count + 1)
  };

  
  return (
    <div>
      <button
        style={{ backgroundColor: colors[colorCount]}}
        onClick={addLikes}
      >
        {count}Likes
      </button>
    </div>
  );
}
export default LikeButton;
