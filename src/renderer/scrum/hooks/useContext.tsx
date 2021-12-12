import React, { useState } from 'react';

// we create the context here
const createdContext = React.createContext<any>(null);

export const useContext = () => {
  // here we consume the context and store its value in the variable named context
  const context = React.useContext(createdContext);
  // if we aim to consume context outside the provider, we will throw an error
  if (!context) {
    throw new Error('useContext should be utilised only inside the provider!');
  }
  // eventually we return the context
  return context;
};

// this is the function that returns the provider
export const ContextProvider = <T,>({
  initialValues,
  children,
}: {
  initialValues: T;
  children: React.ReactChild;
}) => {
  // this is the utility that helps with updating the state of the provider
  const [contextState, setContextState] = useState(initialValues);
  // we memoize the state updater that we pass into the context
  const value = React.useMemo(
    () => [contextState, setContextState],
    [contextState]
  );
  // finally we return the context provider, with the value object that has got the state updated, and any other props that user passed in
  return (
    <createdContext.Provider value={value}>{children}</createdContext.Provider>
  );
};
