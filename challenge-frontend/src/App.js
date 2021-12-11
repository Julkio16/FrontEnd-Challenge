import React, { Fragment, useState } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import './App.css';
import { Header } from './componets/Header/Header';
import ListOfAvatares from './componets/ListAvatares/ListOfAvatares';
import ListOfImages from './componets/MainContent/ListOfImages';

function App() {
  const [breed,setBreed] = useState(null);
  const [breeds,setBreeds] = useState([]);
  return (
    <Fragment>
      <div className='App-header'>
        <Header onCreate={
          (ids) => {
            setBreeds(ids);
          }
        } 
         onChange={
          (id)=> {
            setBreed(id)
          }
        } />
      </div>
      <div className='MainContent'>
        <ListOfImages breed = {breed}/>
      </div>
    </Fragment>
  );
}

export default App;
