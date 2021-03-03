import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">

      <Header />

      <Navbar />
      
    </div>
  </Router>
  );
}

export default App;
