import React,{useRef,createContext, useContext} from 'react'
 export const scrollcontext=createContext()

 

export function ScrollProvider({children}) {
    const sectionRef={
        home:useRef(null),
        education:useRef(null),
        contact:useRef(null),
        project:useRef(null),    
            
        
    }

  return (
    <scrollcontext.Provider value={sectionRef}>
        {children}

    </scrollcontext.Provider>
  )
}


