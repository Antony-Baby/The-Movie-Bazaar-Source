import React from 'react'
import RowMovies from './RowMovies';
import {API_KEY} from '../../constants/constants'



function MainBody() {
    
  const topMovies = `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
  const newMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=en`
  const malMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=ml`
  const tamilMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=ta`
  const hindiMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=hi`

    return (
        <div>
    <RowMovies url={topMovies} title="Top Rated Movies"/>
    <RowMovies url={newMovies} title="New English Movies"/>
    <RowMovies url={malMovies} title="New Malayalam Movies"/>
    <RowMovies url={tamilMovies} title="New Tamil Movies"/>
    <RowMovies url={hindiMovies} title="New Hindi Movies"/>
        </div>
    )
}

export default MainBody
