import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import HomePage from './pages/HomePage';
import Abount from './pages/Abount';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Abount" element={<Abount></Abount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
