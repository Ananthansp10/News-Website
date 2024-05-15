import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Newscontent from './Components/Newscontent';
import { useState } from 'react';

function App() {
  const[category,setcategory]=useState('general')
  const[country,setcountry]=useState('in')
  return (
    <div>
      <Header setcategory={setcategory} setcountry={setcountry}/>
      <Newscontent category={category} country={country}/>
    </div>
  );
}

export default App;
