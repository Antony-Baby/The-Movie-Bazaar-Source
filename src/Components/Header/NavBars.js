import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import './NavBars.css'


export function LeftNav() {
    return (
        <div>
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
            </div>
        </div>
    )
}


export function RightNav(params) {
    return(
        <div className="r-menu">
            <div className="r-list">
            <ul>
                <li><h4>Label1</h4></li>
                <li><h4>Label2</h4></li>
                <li><h4>Label4</h4></li>
                <li><h4>Label5</h4></li>
            </ul>
            </div>      
            </div>
    )
}

