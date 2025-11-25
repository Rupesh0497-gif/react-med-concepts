import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    "legalentityname": "",
    "dbaname": "",
    "firstname": "",
    "lastname": "",
    "title": "",
    "workphone": "",
    "cellphone": "",
    "email": ""
} );

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
