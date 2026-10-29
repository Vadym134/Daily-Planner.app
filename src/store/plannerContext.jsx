import { useReducer } from 'react';
import { plannerReducer, initialState } from './plannerReducer';
import { PlannerContext } from './plannerContextInstance';

export function PlannerProvider({ children }) {
  const [state, dispatch] = useReducer(plannerReducer, initialState);

  return (
    <PlannerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlannerContext.Provider>
  );
}