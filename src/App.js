import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import Error from './components/Error'
import Fundraiser from './components/Fundraiser'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fundraiser" element={<Fundraiser />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
