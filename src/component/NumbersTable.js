

import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number) => (
        <div
          key={number}
          className={`number ${number % 2 === 0 ? 'even' : 'odd'}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;

