import React, { useState } from "react";

function ServiceList({ services, updateService, deleteService }) {
  const [editingService, setEditingService] = useState(null);
  const [editedService, setEditedService] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleEditClick = (service) => {
    setEditingService(service.id);
    setEditedService({ ...service });
  };

  const handleUpdate = () => {
    updateService(editedService);
    setEditingService(null);
  };

  return (
    <div>
      <h2>Service List</h2>
      {services.length === 0 && <p>No services available</p>}
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {editingService === service.id ? (
              <div>
                <input
                  type="text"
                  value={editedService.name}
                  onChange={(e) =>
                    setEditedService({ ...editedService, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editedService.description}
                  onChange={(e) =>
                    setEditedService({
                      ...editedService,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  value={editedService.price}
                  onChange={(e) =>
                    setEditedService({
                      ...editedService,
                      price: e.target.value,
                    })
                  }
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <div className="disply-service-text">
                <h2>{service.name}</h2>
                <p > <span>Description :</span> {service.description}</p>
                <p> <span>Price: $</span>{service.price}</p>
                <button onClick={() => handleEditClick(service)}>Edit</button>
                <button onClick={() => deleteService(service.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
