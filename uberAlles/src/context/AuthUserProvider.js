// centraliza busca de dados real time
import React, {useState} from 'react';
import {createContext} from 'react';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    // passando pro context o que está global
    <AuthUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthUserContext.Provider>
  );
};
