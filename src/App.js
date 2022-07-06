import { Route, Routes } from "react-router-dom";
import React from 'react';
import Header from './components/common/Header';
import Main from './pages/Main';
// 404
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        {/* Footer 중첩 라우팅*/}
        {/* <Route></Route> */}
        <Route index element={<Main/>}></Route>
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
