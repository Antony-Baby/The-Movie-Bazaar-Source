import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { useContext } from 'react';
import { NavContext } from './Context/AppContext';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import MainBody from './Components/Main/MainBody';
import About from './Components/Externals/About';
import Details from './Components/DetailsPage/Details';


function App() {
  const context = useContext(NavContext)
  // console.log(context.Mdetails);

  return ( 
    <div>
      <Router>
      <Header/>

      <div className={context.navActive}>
      {/* <Route path='/' exact component={MainBody}/> */}
      <Switch>
        <Route path='/The-Movie-Bazaar' exact ><MainBody/></Route>
        <Route path=  '/about' component={About}/>
        {/* <Route path={"/"+context.Mdetails.title} component={Details}/> */}
        <Route path={"/Movie/:id/:name"}><Details/></Route>

      </Switch>
      </div>
      <Footer/>

      </Router>

   </div>        
    );
}

export default App;