import { Route, Routes } from "react-router-dom";
import React from 'react';
// 404
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      {/* Header 중첩 라우팅 */}
      {/* <Route> */}
        {/* Footer 중첩 라우팅*/}
        {/* <Route></Route> */}
      {/* </Route> */}
      {/* 404 */}
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
