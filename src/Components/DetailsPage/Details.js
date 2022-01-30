import React, { useState,useEffect } from 'react'
import { NavContext } from '../../Context/AppContext';
import { useContext } from 'react';
import './Details.css'
import axios from 'axios';
import {API_KEY,Images,imgNotFound} from '../../constants/constants'
import {useParams} from 'react-router-dom'
import Trailer from '../Main/Trailer'


function Details() {
    let {id} = useParams()

    const {Mdetails} = useContext(NavContext)
    const API_URL = `https://api.themoviedb.org/3/movie/${(parseInt(id,16)-561)}?api_key=${API_KEY}&language=en-US`;
    const [movieInfo, setMovieInfo] = useState([])
    
    useEffect(() => {
 
    axios.get(API_URL).then((Response)=>{
        setMovieInfo(Response.data)
    })

}, [])


var genres_string =''
for (let i in movieInfo.genres){
    var name = movieInfo.genres[i].name
    if(i==0){
    genres_string=genres_string.concat(name)
    }else{
    genres_string=genres_string.concat(" | "+name)
    }
}
var pc_string =''
for (let i in movieInfo.production_companies){
    console.log(i);
    var name = movieInfo.production_companies[i].name
    if(i==0){
    pc_string=pc_string.concat(name)
    }else{
    pc_string=pc_string.concat(" | "+name)
    }
}
var pcountry_string =''
for (let i in movieInfo.production_countries){
    var name = movieInfo.production_countries[i].name
    if(i==0){
    pcountry_string=pcountry_string.concat(name)
    }else{
    pcountry_string=pcountry_string.concat(" | "+name)
    }
}

  function numberFormat(value) {
    var val = Math.abs(value)
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lac';
    }
    return val
  }

    return (
        <div>
        <div className="details-page-container">
            <div className="details-leftcol">
            <div className="details-image">
            <img style={{width:"100%" , height:"100%"}} src={movieInfo.poster_path?Images+movieInfo.poster_path:imgNotFound} alt="" />

            </div>
            <h3>Rating :<span className="leftcol-span">{movieInfo.vote_average}</span></h3>
            <h3>Popularity :<span className="leftcol-span">{movieInfo.popularity}</span></h3>
            </div>
            <div className="details-page">
                <table className="movie-details-table">
            <thead>
                <tr>
            <td className="mtitle" colSpan="2">Name of The Movie : {movieInfo.title}</td>
            <td></td>
            </tr>
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
                    
                    {genres_string }
            </td>
            </tr>
            <tr>
                <td>Age Restricted</td>
                <td>{movieInfo.adult?"18+ Only":"No"}</td>
            </tr>
            <tr>
                <td>Budget</td>
                <td>{numberFormat(movieInfo.budget)}</td>
            </tr>
            <tr>
                <td>Productions</td>
                <td>
                    {pc_string}
                </td>
            </tr>           
             <tr>
                <td>Base Country</td>
                <td>
                {pcountry_string}
                </td>
            </tr>            <tr>
                <td>Released On</td>
                <td>{movieInfo.release_date}</td>
            </tr>
            <tr>
                <td>Revenue</td>
                <td>{numberFormat(movieInfo.revenue)}</td>
            </tr>
            </tbody>
            </table>
            </div>
</div>
            <div className="trailer">
                <Trailer></Trailer>
            </div>
        </div>
    )
}

export default Details
