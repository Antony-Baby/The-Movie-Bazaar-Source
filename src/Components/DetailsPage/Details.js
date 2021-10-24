import React, { useState,useEffect } from 'react'
import { NavContext } from '../../Context/AppContext';
import { useContext } from 'react';
import './Details.css'
import axios from 'axios';
import {API_KEY} from '../../constants/constants'




function Details(props) {
    const {Mdetails} = useContext(NavContext)
    const API_URL = `https://api.themoviedb.org/3/movie/${Mdetails.id}?api_key=${API_KEY}&language=en-US`;
    const [movieInfo, setMovieInfo] = useState([])
    
    useEffect(() => {
 
    axios.get(API_URL).then((Response)=>{
        setMovieInfo(Response.data)
    })

}, [])
console.log(Mdetails.id);
console.log(API_KEY);

    return (
        <div className="details-page-container">
            <div className="details-leftcol">
            <button className="details-image">Image</button>
            <h3>Rating :<span className="leftcol-span">{movieInfo.vote_average}</span></h3>
            <h3>Popularity :<span className="leftcol-span">{movieInfo.popularity}</span></h3>
            </div>
            <div className="details-page">
                <table className="movie-details-table">
            <thead>
            <th className="mtitle" colSpan="2">Name of The Movie : {movieInfo.title}</th>
            <th></th>
            </thead>
            <tbody>
            <tr>
                <td>Orginal title</td>
                <td>{movieInfo.original_title}</td>
                <td rowSpan="20">
                    <div className="overview">
                    <h3>Overview :</h3>
                    <br/>
                    {movieInfo.overview}
                    </div>
                </td>
            </tr>
            <tr>
                <td>Genres</td>
                <td>
                {/* {movieInfo.genres.map(comp=>(
                    comp.name+" "
                 ))}  */}
            </td>
            </tr>
            <tr>
                <td>Age Restricted</td>
                <td>{movieInfo.adult?"18+ Only":"No"}</td>
            </tr>
            <tr>
                <td>Budget</td>
                <td>{movieInfo.budget}</td>
            </tr>
            <tr>
                <td>Productions</td>
                <td>
                    {/* {movieInfo.production_companies.map(comp=>(
                        comp.name+" | "
                        ))
                    } */}
                </td>
            </tr>           
             <tr>
                <td>Base Country</td>
                <td>
                {/* {movieInfo.production_countries.map(comp=>(
                        comp.name+" | "
                        ))
                    } */}
                </td>
            </tr>            <tr>
                <td>Released On</td>
                <td>{movieInfo.release_date}</td>
            </tr>
            <tr>
                <td>Revenue</td>
                <td>{movieInfo.revenue}</td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default Details
