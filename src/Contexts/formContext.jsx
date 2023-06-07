import { createContext, useContext, useState } from "react";



const FormContext = createContext()

// eslint-disable-next-line react/prop-types
const FormProvider = ({children}) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    console.log("firstname", firstname);
    console.log("lastname", lastname);
    console.log("email", email);
    console.log("message", message);



    const outputMessage = `
    <h1> Mail Detail</h1>
    <ul>
      <li>
      Firstname: ${firstname}
      </li>
      <li>
      Lastname: ${lastname}
      </li>
      <li>
      Email: ${email}
      </li>
    </ul>
    <h1>Message</h1>
    <p>${message}</p>
    `;


    
      

    const values = {
        setFirstname,
        setLastname,
        setEmail,
        setMessage,
        outputMessage
    };

    return <FormContext.Provider value={values}>{children}</FormContext.Provider>
};


const useFormContext = () => useContext(FormContext)

export { useFormContext, FormProvider};