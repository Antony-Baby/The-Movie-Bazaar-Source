import React from 'react'
import { NavContext } from '../../Context/AppContext';
import { useContext } from 'react';
import './Details.css'


function Details() {
    const {Mdetails} = useContext(NavContext)

    return (
        <div className="details-page">
            <div className="mtitle">

            <h1>Name of The Movie : {Mdetails.title}</h1>
            {/* <h1>{Mdetails.id}</h1> */}
            </div>
        </div>
    )
}

export default Details
