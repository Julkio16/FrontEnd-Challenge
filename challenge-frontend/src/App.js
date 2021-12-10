import React, { Fragment } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.css';
import './App.css';
import { Header } from './componets/Header/Header';
import { ListOfAvatares } from './componets/ListAvatares/ListOfAvatares';

function App() {
  let breed = "";
  let breeds = {};
  return (
    <Fragment>
      <div className='App-header'>
        <Header onChange={
          (id)=> {
            breed = id;
          }
        } onCreate={
          (ids) => {
            console.log("app",ids.map(res => res.id))
          }
        } />
      </div>
      <div className='Avatares'>
        <ListOfAvatares />
      </div>
    </Fragment>
  );
}

export default App;
