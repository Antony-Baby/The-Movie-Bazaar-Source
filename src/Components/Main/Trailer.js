import axios from '../../axios'
import { NavContext } from '../../Context/AppContext';
import { useContext, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY } from '../../constants/constants';
// import './ExternalStyles.css'
import './ExternalStyles.css'
import { AiFillCloseCircle } from "react-icons/ai";



function Trailer() {
    
    const {Mdetails,setCloseYfunc,closeY} = useContext(NavContext)
    const [trailerId, settrailerId] = useState("")

    const urls = `https://api.themoviedb.org/3/movie/${Mdetails.id}/videos?api_key=${API_KEY}`

    axios.get(urls).then((Response)=>{
        var video_key=(Response.data.results[0].key)
        if(video_key===null){
            settrailerId("null")
        }else{
            settrailerId(video_key)
        }
    })
    console.log(trailerId);
    
    const opts = {
        // height: '390',
        // width: '100%',
        playerVars: {
          autoplay: 1,
        //   origin : "https://http://localhost:3000/The-Movie-Bazaar" 
        },
      };

      const onReadyfunc=(event)=>{
        event.target.pauseVideo(); 
    }
    const closefun=()=>{
        setCloseYfunc(false)
    }

     return (
        <div>
            {closeY?
            <div className={"video-player-inner"} >
           <YouTube videoId={trailerId} opts={opts} onReady={onReadyfunc} />
            <button onClick={closefun} ><span>Close</span><span><AiFillCloseCircle size={28}/></span></button>

           </div>:null}

        </div>
    )

    
}

export default Trailer

