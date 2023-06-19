import React, { useContext } from 'react';
import { FormContext } from './App';

const VehicleDataWindow = () => {
  const [state, dispatch] = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  return (
    <div>
      <h2>Información del vehículo</h2>
      <div className="form-group mb-2">
        <label htmlFor="brand">Marca:</label>
        <input
          type="text"
          className="form-control"
          id="brand"
          name="brand"
          placeholder="Marca"
          value={state.brand}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="model">Modelo:</label>
        <input
          type="text"
          className="form-control"
          id="model"
          name="model"
          placeholder="Modelo"
          value={state.model}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="licensePlate">Placa:</label>
        <input
          type="text"
          className="form-control"
          id="licensePlate"
          name="licensePlate"
          placeholder="Placa"
          value={state.licensePlate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="fuelLevel">Nivel del tanque de gasolina:</label>
        <input
          type="text"
          className="form-control"
          id="fuelLevel"
          name="fuelLevel"
          placeholder="Nivel del tanque de gasolina"
          value={state.fuelLevel}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="vehicleCondition">Estado exterior del vehículo:</label>
        <textarea
          className="form-control"
          id="vehicleCondition"
          name="vehicleCondition"
          placeholder="Detalles sobre el estado exterior del vehículo"
          value={state.vehicleCondition}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default VehicleDataWindow;
