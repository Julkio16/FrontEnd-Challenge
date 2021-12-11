import React, { Fragment, useState } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.css';
import './App.css';
import { Header } from './componets/Header/Header';
import { ListOfAvatares } from './componets/ListAvatares/ListOfAvatares';
import ListOfImages from './componets/MainContent/ListOfImages';

function App() {
  const [breed,setBreed] = useState(null);
  const [breeds,setBreeds] = useState([]);
  return (
    <Fragment>
      <div className='App-header'>
        <Header onChange={
          (id)=> {
            setBreed(id)
          }
        } onCreate={
          (ids) => {
            setBreeds(ids);
          }
        } />
      </div>
      <div className='Avatares'>
        <ListOfAvatares breeds = {breeds}/>
      </div>
      <div className='MainContent'>
        <ListOfImages breed = {breed}/>
      </div>
    </Fragment>
  );
}

export default App;
