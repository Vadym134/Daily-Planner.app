import { useContext } from 'react';
import { PlannerContext } from './plannerContextInstance';

export function usePlannerContext() {
  const context = useContext(PlannerContext);

  if (!context) {
    throw new Error('usePlannerContext must be used within a PlannerProvider');
  }

  return context;
}