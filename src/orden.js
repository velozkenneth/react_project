import React, { useContext } from 'react';
import { FormContext } from './App';

const WorkOrderWindow = () => {
  const [state] = useContext(FormContext);

  return (
    <div>
      <h2>Orden de trabajo</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Datos del cliente</h5>
          <p>Nombre: {state.clientName}</p>
          <p>Email: {state.email}</p>
          <p>Número de contacto: {state.contactNumber}</p>
          <p>Tipo de identificación: {state.identificationType}</p>
          <p>Identificación: {state.taxId}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Información del vehículo</h5>
          <p>Marca: {state.brand}</p>
          <p>Modelo: {state.model}</p>
          <p>Placa: {state.licensePlate}</p>
          <p>Nivel del tanque de gasolina: {state.fuelLevel}</p>
          <p>Estado exterior del vehículo: {state.vehicleCondition}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Selección de servicios</h5>
          <p>Servicios seleccionados:</p>
          <ul>
            {state.selectedServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Fecha y hora estimada de entrega</h5>
          <p>{state.estimatedDeliveryDateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderWindow;
