import './Header.css'
import React, { useState } from "react";
import {AiFillAppstore} from "react-icons/ai"
import {GrFormClose} from "react-icons/gr"
import {FcFilmReel,FcPortraitMode} from "react-icons/fc"
import { useContext } from 'react';
import { NavContext } from '../../Context/AppContext';
import {Link} from 'react-router-dom'
import {LeftNav,RightNav } from './NavBars';




function Header() {
    const context = useContext(NavContext)
    const {changeNavBar} = useContext(NavContext)
    
    const [leftMenuShow, SetleftMenuShow] = useState(false);
    const [rightMenuShow, SetrightMenuShow] = useState(false);

    const navBarclick=()=>{
        if(!rightMenuShow){
        SetleftMenuShow(!leftMenuShow)
        changeNavBar()
    }
        
    }
    const rnavBarclick=()=>{
        if(!leftMenuShow){
        SetrightMenuShow(!rightMenuShow)
        changeNavBar()  
}    }
        return(
        <div className="header-container">
        <div className="header-row1">
        <span className="logo" alt="" ><FcFilmReel size={42}/></span>
        <h1>The Movie Bazaar</h1>
        </div>
        <div className="header-row2">
            <div className="header-row2-col2">
                <div className="header-row2-col3">
                    {/* <span onClick={()=> (SetleftMenuShow(!leftMenuShow) , {changeNavBar}  )} className="header-menu_left-icon"><AiFillAppstore size={42}/></span>  */}
                    <span onClick={navBarclick} className="header-menu_left-icon">{!leftMenuShow?<AiFillAppstore size={42}/>:
                    <GrFormClose size={42}/>}</span> 

                </div>
                <div className="header-row2-col4">
                    <div className="header-link-container"><Link className="header-links" to="/The-Movie-Bazaar">Home Page</Link> </div>
                    <div className="header-link-container"><Link className="header-links" to="/about">About Us</Link></div>
                    <div className="header-link-container"><a className="header-links" href="https://google.com">User Review</a></div> 
                    <div className="header-link-container"><a className="header-links" href="https://google.com">More</a></div>
                </div>
            </div>
            <div className="header-row2-col5">
            <div className="header-link-container"> 
                <span className="signIn-dropdown" onClick={rnavBarclick}>
                Sign In/Register
                <span className="header-menu_right-icon"><FcPortraitMode size={28}/></span>
                </span>
            </div> 
            </div>
        </div>
        { leftMenuShow?
        <LeftNav/>
        :null}
            { rightMenuShow?
            <RightNav/>
        :null}
        </div>
    )     

   
}

export default Header
