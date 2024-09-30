import React, { useState } from 'react';
import ServiceList from './Servicelist';
import ServiceForm from './ServiceForm';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'Doctor care', description: 'A doctor may visit a patient at home to diagnose and treat the illness(es). He or she may also periodically review the home health care needs.', price: 50 },
    { id: 2, name: 'Companionship', description: 'Some patients who are home alone may require a companion to provide comfort and supervision. Some companions may also perform household duties.', price: 80 },
  
  ]);


 


  const addService = (newService) => {
   const finalServise=([...services, { ...newService, id: Date.now() }]);
   setServices(finalServise)
  };

 

  const deleteService = (id) => {
    let finalData=services.filter((service) => service.id !== id);
    setServices(finalData)
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  return (
    <div className="container">
      <h1>Healthcare Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />

      </div>

    
  );
}


export default App;