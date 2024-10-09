// PhoneContext.js
import React, { createContext, useState } from 'react';

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <PhoneContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
