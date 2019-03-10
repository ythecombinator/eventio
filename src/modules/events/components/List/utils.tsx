import React, {createContext} from 'react';

const Context = createContext({});

export const Provider = Context.Provider;

export const withContext = (Wrapper) => (props) => {
  return <Context.Consumer>{(context) => <Wrapper {...context} {...props} />}</Context.Consumer>;
};
