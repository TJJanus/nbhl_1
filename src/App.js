import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import News from './components/News/News';
import Divisions from './components/Divisions/Divisions';
import Teams from './components/Teams/Teams';
import Schedule from './components/Schedule/Schedule';
import Shop from './components/Shop/Shop';
import Standings from './components/Standings/Standings';
import Stats from './components/Stats/Stats';
import Affiliates from './components/Affiliates/Affiliates';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <Switch>
    <div className="App">

      <Header />

      <Navbar />
      

    <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>

      <Route exact path='/news'>
        <News />
      </Route>

      <Route exact path='/divisons'>
        <Divisions />
      </Route>

      <Route exact path='/teams'>
        <Teams />
      </Route>

      <Route exact path='/schedule'>
        <Schedule />
      </Route>

      <Route exact path='/standings'>
        <Standings />
      </Route>

      <Route exact path='/stats'>
        <Stats />
      </Route>

      <Route exact path='/partners'>
        <Partners />
      </Route>

      <Route exact path='/affiliates'>
        <Affiliates />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Route exact path='/shop'>
        <Shop />
      </Route>




    </div>
    </Switch>
  </Router>
  );
}

export default App;
