import React, { createContext, useState } from 'react';

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [isDialogShown, setIsDialogShown] = useState(false);

  return (
    <DialogContext.Provider value={{ isDialogShown, setIsDialogShown }}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContext;
