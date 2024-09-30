import React, { useState } from "react";

function ServiceForm({ addService }) {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const saveSerivce = (event) => {
    event.preventDefault();
    addService(service);
    setService({ name: "", description: "", price: "" });
  };

  return (
    <div className="servicelist">
      <form onSubmit={saveSerivce}>
        <input
          type="text"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          placeholder="Enter Service Name"
          required
        />
        <input
          type="text"
          value={service.description}
          onChange={(e) =>
            setService({ ...service, description: e.target.value })
          }
          placeholder=" Enter Description"
          required
        />
        <input
          type="text"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          placeholder=" Enter Price"
          required
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default ServiceForm;
