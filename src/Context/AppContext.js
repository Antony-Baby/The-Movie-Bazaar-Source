import { createContext, useState } from 'react';
import React from 'react'

export const NavContext = createContext();


const Navbar = ({children}) => {
    const [navActive, setNavActive] = useState("context-body-enable")
    const [Mdetails, setMName] = useState({})
    const[closeY,setCloseY] = useState(true)

    const changeNavBar =()=>{
        if(navActive==="context-body-enable"){
        setNavActive("context-body-disable");
        }
        else if(navActive==="context-body-disable"){
            setNavActive("context-body-enable");
        }
    }

    const movieDetails=(details)=>{
        setMName(details)
    }

    const setCloseYfunc=(stat)=>{
        setCloseY(stat)
    }
    return(
        <NavContext.Provider value ={{navActive , changeNavBar,Mdetails,movieDetails,closeY,setCloseYfunc}} > {children}</NavContext.Provider>

    )

}


export default Navbar;