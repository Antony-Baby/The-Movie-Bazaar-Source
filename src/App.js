import './App.css'
import Header from './Components/Header/Header';
import RowMovies from './Components/Main/RowMovies';
import {API_KEY} from './constants/constants'
function App() {
  const topMovies = `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
  const newMovies = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc`
  const malMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=ml`
  const tamilMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=ta`
  const hindiMovies = `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&with_original_language=hi`

  

    return ( 
    <div>
      <Header/>
      <RowMovies url={topMovies} title="Top Rated Movies"/>
      <RowMovies url={newMovies} title="New Movies"/>
      <RowMovies url={malMovies} title="Malayalam Movies"/>
      <RowMovies url={tamilMovies} title="Tamil Movies"/>
      <RowMovies url={hindiMovies} title="Hindi Movies"/>


    
   </div>        
    );
}

export default App;