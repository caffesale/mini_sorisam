import React, { useContext, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

// 컴포넌트 불러오기
import Header from './components/header/Header';
import Form from './pages/Form';
import Main from './pages/Main';
import Detail from './pages/Detail';
import SignIn from './components/signform/SignIn';
import SignUp from './components/signform/SignUp';
import DetailComment from './components/detail/DetailComment';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/detail/:postid' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
