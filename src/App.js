import React, { useContext, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import authService from './api/axiosAuth';

// 컴포넌트 불러오기
import Header from './components/header/Header';
import Form from './pages/Form';
import Main from './pages/Main';
import Detail from './pages/Detail';
import SignIn from './components/signform/SignIn';
import SignUp from './components/signform/SignUp';

// 로그인 확인하는 로직
// const loginCheck = () => {
//     if(user) {
//         setIsSigned(true);
//         // state에 쿠키 값 넣어주기
//     }
//     else{
//         setIsSigned(false);
//     }
// }


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
