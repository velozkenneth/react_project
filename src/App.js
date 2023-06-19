import './App.css';
import React, { useReducer, useState } from 'react';
import ClientDataWindow from './clientcar';
import VehicleDataWindow from './vehiculo'
import ServiceSelectionWindow from './servicios';
import WorkOrderWindow from './orden';

// Create a new context
export const FormContext = React.createContext();

// Initial form state
const initialState = {
  step: 1,
  clientName: '',
  email: '',
  contactNumber: '',
  taxId: '',
  identificationType: '',
  brand: '',
  model: '',
  licensePlate: '',
  fuelLevel: '',
  vehicleCondition: '',
  selectedServices: [],
};

// Reducer function to update the form state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'TOGGLE_SERVICE':
      const { service } = action;
      if (state.selectedServices.includes(service)) {
        return {
          ...state,
          selectedServices: state.selectedServices.filter(s => s !== service),
        };
      } else {
        return {
          ...state,
          selectedServices: [...state.selectedServices, service],
        };
      }
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.clientName.length>0 ) {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(true);
    }
  };

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <ClientDataWindow />;
      case 2:
        return <VehicleDataWindow />;
      case 3:
        return <ServiceSelectionWindow />;
      case 4:
        return <WorkOrderWindow />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Car Shop</h1>
      <FormContext.Provider value={[state, dispatch]}>
        <form onSubmit={handleSubmit} className='w-75 border border-dark rounded mx-auto p-2'>
          {renderStep()}
          {state.step !== 1 && (
            <button onClick={() => dispatch({ type: 'PREV_STEP' })} className='m-2 btn btn-outline-dark'>Previous</button>
          )}
          {state.step !== 4 ? (
            <button type="button" onClick={handleNextStep} className='m-2 btn btn-outline-dark'>Next</button>
          ) : (
            <button type="submit" disabled={isSubmitting} className='m-2 btn btn-outline-dark'>
              Submit
            </button>
          )}
        </form>
      </FormContext.Provider>
    </div>
  );
};

export default App;