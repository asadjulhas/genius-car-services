import React, { useEffect, useState } from 'react';
import './ServiceDetails.css'
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import PageTitle from '../../hooks/PageTitle';

const ServiceDetails = () => {
  const {id} = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('../../services.json')
    .then(res => res.json())
    .then(services => setServices(services))
  },[]);
  const findService = services.find(service => service.id == id);
  return (
    <div className='mt-5 single_service'>
      <PageTitle title='Service'/>
      <div className="service sservice">
      <h2>{findService?.name}</h2>
      <p>${findService?.price}</p>
      <p>{findService?.description}</p>
      <img className='img-fluid mb-3' src={findService?.img} alt="" />
      </div>
    </div>
  );
};

export default ServiceDetails;