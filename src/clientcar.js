import React, { useContext } from 'react';
import { FormContext } from './App';

const ClientDataWindow = () => {
  const [state, dispatch] = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  return (
    <div>
      <h2>Client Data Desde EC2!!!</h2>
      <div className="form-group mb-2">
        <label htmlFor="clientName">Nombre del cliente:</label>
        <input
          type="text"
          className="form-control"
          id="clientName"
          name="clientName"
          placeholder="Nombre del cliente"
          value={state.clientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="contactNumber">Número de contacto:</label>
        <input
          type="tel"
          className="form-control"
          id="contactNumber"
          name="contactNumber"
          placeholder="Número de contacto"
          value={state.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="identificationType">Tipo de identificación:</label>
        <select
          className="form-control"
          id="identificationType"
          name="identificationType"
          value={state.identificationType}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un tipo</option>
          <option value="Cédula">Cédula</option>
          <option value="RUC">RUC</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="taxId">Identificación fiscal:</label>
        <input
          type="text"
          className="form-control"
          id="taxId"
          name="taxId"
          placeholder="Identificación fiscal"
          value={state.taxId}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ClientDataWindow;