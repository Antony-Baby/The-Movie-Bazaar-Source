import './Main.css'
import React, { useEffect, useState } from 'react'
// import Card from './card'
import axios from '../../axios'
import {Images , imgNotFound} from '../../constants/constants'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { BiListPlus } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { NavContext } from '../../Context/AppContext';
import { useContext } from 'react';
import Trailer from './Trailer'

function RowMovies(props) {
   
    const {movieDetails,setCloseYfunc} = useContext(NavContext)
    const [movies, setMovie] = useState([])
    const [trailer,setTrailer] = useState (false)
    
    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            setMovie(Response.data.results)
        })
    }, [])

      return (
    <div className="main">
        <h1 className="Title-row1">{props.title}</h1>
        <div className="cards">
            {movies.map((obj)=>{
            {
                var wordCount = obj.title.length;
                var title = obj.title
                if(wordCount>40){
                    title = title.substring(40)
                }
                var rating = (obj.popularity/100).toFixed(2)
                if(rating>100){
                    rating=100
                }
                { var id_Decode= (obj.id+561).toString(16)
                }
                
                var mdetailsobj = {
                    title : obj.title,
                    id : obj.id                    
                }
                }
                return(
                <div className="card-container">
                    <div className="card-inner">
                        <div className="card-img"> 
                            <img style={{width:"100%" , height:"100%"}} src={obj.poster_path?Images+obj.poster_path:imgNotFound} alt="" />
                        </div>
                        <div className="rating-cycle">
                            <CircularProgressbar
                                value={rating}
                                text={`${rating}%`}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                backgroundColor: "#000080",
                                textSize:"21px",                        
                                textColor: "#f0ffff",
                                pathColor: "#00ffff",
                                trailColor: "transparent"
                            })} />
                        </div>
                        <div className="card-title"> <h4> {title} </h4></div>
                    </div>
                    <div className="card-buttons">
                        <button className="card-trailer" onClick={()=>{movieDetails(mdetailsobj);setTrailer(true);setCloseYfunc(true)}}> Watch Trailer
                        </button>
                        <button onClick={()=>movieDetails(mdetailsobj)} className="card-details"> <Link className="button-link" to={"/Movie/"+id_Decode+"/"+obj.title}>View Details <BiListPlus size={14}/> </Link>
                        </button>
                    </div>
                </div>
                )})
            }
        </div> 
        {trailer?
        <div className="video-player">
            <Trailer/>                
            </div>        
        : null}
</div>
    
    )
}

export default RowMovies
