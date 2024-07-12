import './App.css';
import ContentView from './componentes/ContentView';
import Header from './componentes/header';
import { getAllCompanies } from './services/companiesService';
import { setCompanies, setcompanyInFocus } from './slice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatchToCompanies = useDispatch();
  const dispatchSetCompany = useDispatch();

  useEffect(() => {
    getAllCompanies()
    .then((resp) => {
      dispatchToCompanies(setCompanies(resp));
      dispatchSetCompany(setcompanyInFocus(0))
    });
   });

  return (
    <div className="App">
      <Header/>
      <ContentView/>
    </div>
  );
}

export default App;
