import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./MainRouter";
import NavbarCustom from "./Components/Navbar/Navbar";
import ContextStudentProvider from "./contexts/ContextStudent";

const App = () => {
  return (
    <div>
      <ContextStudentProvider>
        <BrowserRouter>
          <NavbarCustom />
          <MainRouter />
        </BrowserRouter>
      </ContextStudentProvider>
    </div>
  );
};
export default App;
