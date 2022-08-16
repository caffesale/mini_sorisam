<<<<<<< HEAD
import React, { useContext, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import authService from './api/axiosAuth';

// 컴포넌트 불러오기
import Header from './components/header/Header';
import Form from './pages/Form';
import Main from './pages/Main';
import SignForm from './pages/SignForm';
import Detail from './pages/Detail';

// 전역 context 

=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Main from './pages/Main';
>>>>>>> dev

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signform' element={<SignForm />} />
        <Route path='/detail' element={<Detail />} />
=======
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signup' element={<></>} />
        <Route path='/login' element={<></>} />
>>>>>>> dev
      </Routes>
    </div>
  );
}

export default App;
