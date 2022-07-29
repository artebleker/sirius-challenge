import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TableContainer from "./components/table/TableContainer";
import Login from "./components/login/Login";
import PageNotFound from "./components/pageNotFound/PageNotFound";
function App() {

  return (
    <BrowserRouter>
      <div >
          <Header /> 
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sirius-challenge" element={<Login />} />
          <Route path="/characters" element={<TableContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
