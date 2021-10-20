import './Header.css'
import React, { useState } from "react";
import {AiFillAppstore} from "react-icons/ai"
import {FcFilmReel,FcPortraitMode} from "react-icons/fc"
import { useContext } from 'react';
import { NavContext } from '../../Context/AppContext';



function Header() {
    const context = useContext(NavContext)
    console.log(context.navActive);
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
                    <span onClick={navBarclick} className="header-menu_left-icon"><AiFillAppstore size={42}/></span> 

                </div>
                <div className="header-row2-col4">
                    <div className="header-link-container"><a className="header-links" href="https://google.com">Home Page</a> </div>
                    <div className="header-link-container"><a className="header-links" href="https://google.com">Header link 1</a></div>
                    <div className="header-link-container"><a className="header-links" href="https://google.com">Header link 3</a></div> 
                    <div className="header-link-container"><a className="header-links" href="https://google.com">Header link 4</a></div>
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
        
        <div className="left-menu">
            <div className="list">
            <ul>
                <li><h4>Label1</h4>
                <ul>
                    <li><h4>SubLabel1</h4></li>
                    <li><h4>SubLabel2</h4></li>
                    <li><h4>SubLabel3</h4></li>
                </ul>
                </li>
                <li><h4>Label2</h4>
                <ul>
                    <li><h4>SubLabel1</h4></li>
                </ul></li>
                <li><h4>Label3</h4>
                <ul>
                    <li><h4>SubLabel1</h4></li>
                    <li><h4>SubLabel2</h4></li>
                    <li><h4>SubLabel3</h4></li>
                </ul></li>
                <li><h4>Label4</h4>
                <ul>
                    <li><h4>SubLabel2</h4></li>
                    <li><h4>SubLabel3</h4></li>
                </ul></li>
                <li><h4>Label5</h4>
                <ul>
                    <li><h4>SubLabel1</h4></li>
                    <li><h4>SubLabel3</h4></li>
                </ul></li>

           
            </ul>
            </div>      
            </div>:null}
            { rightMenuShow?
        
        <div className="r-menu">
            <div className="r-list">
            <ul>
                <li><h4>Label1</h4></li>
                <li><h4>Label2</h4></li>
                <li><h4>Label4</h4></li>
                <li><h4>Label5</h4></li>
            </ul>
            </div>      
            </div>:null}
        </div>
    )     

   
}

export default Header
