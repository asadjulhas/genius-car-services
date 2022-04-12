import React from 'react';
import './Services.css'
import useServices from '../../../hooks/useServices';
import Service from './Service';

const Services = () => {

  const [services] = useServices();
// console.log(services)
  return (
    <div className="services_area">
<h2>Our Services</h2>
      <div className='services'>
      {services.map(service => 
        <Service key={service.id} service={service}/>
      )}
    </div>
    </div>
  );
};

export default Services;