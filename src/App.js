import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { useContext } from 'react';
import { NavContext } from './Context/AppContext';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import MainBody from './Components/Main/MainBody';
import About from './Components/Externals/About';


function App() {
  const context = useContext(NavContext)
  console.log(context);
  

    return ( 
    <div>
      <Router>
      <Header/>

      <div className={context.navActive}>
        <Route path='/' exact component={MainBody}/>
        <Route path=  '/about' component={About}/>
        
     
      <Footer/>
      </div>

      </Router>

    
   </div>        
    );
}

export default App;