import React, { useEffect, useState } from 'react'
import './CommonCss.css'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'



function Card(props) {
  const [rating, setRating] = useState(0)
  useEffect(() => {
      let temp = (props.popularity)/100
      {temp =temp.toFixed(2)}
      setRating(temp)
  }, [])
    return (
        <div className="card-container">
            <div className="card-inner">
                <div className="card-img"> 
                    <img style={{width:"100%" , height:"100%"}} src={props.imgs} alt="" />
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
                    <div className="card-title"> <h4> {props.title} </h4> </div>
            </div>
    </div>
    )}

export default Card
