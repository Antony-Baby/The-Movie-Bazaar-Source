import { createContext, useState } from 'react';
import React from 'react'

export const NavContext = createContext();


const Navbar = ({children}) => {
    const [navActive, setNavActive] = useState("context-body-enable")

    const changeNavBar =()=>{
        if(navActive==="context-body-enable"){
        setNavActive("context-body-disable");
        }
        else if(navActive==="context-body-disable"){
            setNavActive("context-body-enable");
        }
    }
    return(
        <NavContext.Provider value ={{navActive , changeNavBar}} > {children}</NavContext.Provider>

    )

}

export default Navbar;