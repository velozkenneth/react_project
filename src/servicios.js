import React, { useContext, useState } from 'react';
import { FormContext } from './App';

const ServiceSelectionWindow = () => {
  const [state, dispatch] = useContext(FormContext);
  const [customService, setCustomService] = useState('');

  const handleServiceToggle = (e) => {
    const { value, checked } = e.target;
    dispatch({ type: 'TOGGLE_SERVICE', service: value });
  };

  return (
    <div>
      <h2>Menú de servicios</h2>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Cambio de aceite"
            checked={state.selectedServices.includes('Cambio de aceite')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Cambio de aceite
        </label>
      </div>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Cambio de frenos"
            checked={state.selectedServices.includes('Cambio de frenos')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Cambio de frenos
        </label>
      </div>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Alineacion y balanceo"
            checked={state.selectedServices.includes('Alineacion y balanceo')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Alineación y balanceo
        </label>
      </div>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Diagnostico general"
            checked={state.selectedServices.includes('Diagnostico general')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Diagnóstico general
        </label>
      </div>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Revision electrica"
            checked={state.selectedServices.includes('Revision electrica')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Revisión sistema eléctrica
        </label>
      </div>
      <div className="form-group mb-2">
        <label>
          <input
            type="checkbox"
            name="selectedServices"
            value="Revision de suspension"
            checked={state.selectedServices.includes('Revision de suspension')}
            onChange={handleServiceToggle}
            className="form-check-input"
          />
          Revisión de la suspensión
        </label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="customService">Otro servicio:</label>
        <input
          type="text"
          className="form-control"
          id="customService"
          name="customService"
          placeholder="Escribe otro servicio"
          onChange={handleServiceToggle}
        />
      </div>
    </div>
  );
};

export default ServiceSelectionWindow;
