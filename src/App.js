import './App.css';
import SearckBox from './components/SearchBox';
import ResidentList from './components/ResidentList';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [location, setLocation] = useState({})

  useEffect(() => {

    const random = Math.floor(Math.random() * 126) + 1;

    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(rest => setLocation(rest.data))
  }, [])

  return (

    <div className="App">
      <nav className="Nav">
        <img className="imgNav" src="https://media3.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif?cid=ecf05e47eoqsqkknb8s7mpo0xqtj93lxfvqtv3wq3c51assp&rid=giphy.gif&ct=g" alt="" />
        <h1>RICK AND MORTY WIKI</h1>
        <SearckBox setLocation={setLocation} />
      </nav>
      <h2>{location.name}</h2>
      <div className="locationInfo">
        <h4>Type: {location.type}</h4>
        <h4>Dimension: {location.dimension}</h4>
        <h4>Population: {location.residents?.length}</h4>
      </div>
      <ResidentList lists={location.residents} />
    </div>



  );
}

export default App;


