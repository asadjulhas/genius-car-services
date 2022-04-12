import React from 'react';

const Service = ({service}) => {
  const {name, price, description, img} = service;
  console.log(service)
  return (
    <div className='service'>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default Service;