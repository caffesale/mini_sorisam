import React, { useContext, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import authService from './api/axiosAuth';

// 컴포넌트 불러오기
import Header from './components/header/Header';
import Form from './pages/Form';
import Main from './pages/Main';
import SignForm from './pages/SignForm';
// 전역 context 
import AuthContext from './context/AuthProvider';
import { getCookie } from './api/cookie';
import Detail from './pages/Detail';


function App() {
  const { auth , setAuth } = useContext(AuthContext);

  // 여러번 갱신되면 useMemo 살리기
  // const user = useMemo(() =>{
  //   {user, {accessToken}}
  // }, [state.user, accessToken ])
  useEffect(() => {
    function checkLoginStatus() {
      if(getCookie('userToken')){
        const setToken = getCookie('userToken');
        setAuth({loginStatus:true, setToken})
      }
    }
  }, [auth]);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts' element={<Form />} />
        <Route path='/signform' element={<SignForm />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
