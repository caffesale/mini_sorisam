import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signup' element={<></>} />
        <Route path='login' element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
