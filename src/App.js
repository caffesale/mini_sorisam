import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Form from './pages/Form';
import Main from './pages/Main';
import SignForm from './pages/SignForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signform' element={<SignForm />} />
      </Routes>
    </div>
  );
}

export default App;
