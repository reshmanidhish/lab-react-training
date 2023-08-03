import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div class="row">
      <div class="col-md-1">
        <div
          style={{ width: '20px', height: '20px', background: `${color}` }}
        /> 
      </div>
      <div class="col-md-11">
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh', textAlign: 'left' }}
      >
        <Card style={{ width: '400px' }}>
          <CardBody>
            <SingleColorPicker
              color="red"
              value={rValue}
              onChange={handleRChange}
            />
            <SingleColorPicker
              color="green"
              value={gValue}
              onChange={handleGChange}
            />
            <SingleColorPicker
              color="blue"
              value={bValue}
              onChange={handleBChange}
            />
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
              }}
            ></div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RGBColorPicker;
