import { createContext, useContext, useRef } from "react";


const ScrollContext = createContext()

const ScrollProvider = ({children}) => {
        // Instead of create a new Context, i use in here for form mesage

        const sectionRefs = {
          about: useRef(null),
          projects: useRef(null),
          contacts: useRef(null)
        };
      
        const scrollToSection = (section) => {
          window.scrollTo({
            top: sectionRefs[section].current.offsetTop,
            behavior: 'smooth'
          });
        };

    const values = {
        scrollToSection,
        sectionRefs,
    };
    return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
}

const useScrollContext = () => useContext(ScrollContext);

export {ScrollProvider, useScrollContext}