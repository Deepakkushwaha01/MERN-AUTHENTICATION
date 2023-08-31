import React, { createContext, useContext, useState } from 'react'


let context=createContext();

const ContentProvider = ({children}) => {

    let[state,newstate]=useState();

  return (
    <context.Provider value={{state,newstate}}>{children}</context.Provider>
      )
}

export function Use(){
    return useContext(context);
}

export default ContentProvider
