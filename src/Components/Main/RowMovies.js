import './Main.css'
import React, { useEffect, useState } from 'react'
import Card from '../card'
import axios from '../../axios'
import {Images} from '../../constants/constants'


function RowMovies(props) {
    
    const [movies, setMovie] = useState([])
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
                }
                console.log(wordCount , title);
                    return(
                <Card title={title} popularity={obj.popularity} imgs={obj.poster_path?Images+obj.poster_path:"./files/notfound.jpg"}/>
                )})
                }
            </div> 
        </div>
    )
}

export default RowMovies
