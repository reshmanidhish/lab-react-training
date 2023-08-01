

import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import { Card, CardBody } from 'reactstrap';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const countrieslist = Array.from(
    new Set(profiles.map((profile) => profile.country))
  );

  return (
    <div className='d-flex justify-content-center align-items-center'>
     <Card style={{ width: '400px' }}>
        
      <h2>Facebook Profiles</h2>
      <CardBody>
      {countrieslist.map((country) => (
        <button onClick={() => setSelectedCountry(country)}>{country}</button>
      ))}
      
      {profiles.map((profile) => (
        <div
          key={profile.firstName + profile.lastName}
          style={{
            background: selectedCountry === profile.country ? 'blue' : '',
          }}
        >
          <img src={profile.img} alt="" />
          <p>
            Name: {profile.firstName} {profile.lastName}
          </p>
          <p>Country: {profile.country}</p>
          <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
          <hr />
        </div>
      ))}
      </CardBody>
      </Card>
    </div>
  );
};

export default FaceBook;
