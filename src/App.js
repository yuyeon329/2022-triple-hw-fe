import { Route, Routes } from "react-router-dom";
import React from 'react';
import Header from './components/common/Header';
import Main from './pages/Main';

const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
  );
};

export default App;
