import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import Abount from './pages/Abount';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Abount" element={<Abount></Abount>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
