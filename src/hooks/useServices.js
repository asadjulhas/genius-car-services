import { useEffect, useState } from 'react';

const useServices = () => {
 const [services, setServices] = useState([])
 useEffect(() => {
   fetch('services.json')
   .then(res => res.json())
   .then(services => setServices(services))
 },[]);
 return [services];
}

export default useServices;