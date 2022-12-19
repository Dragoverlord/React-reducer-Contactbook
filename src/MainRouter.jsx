import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./Components/AddStudent/AddStudent";
import EditStudent from "./Components/EditStudent/EditStudent";
import Homepage from "./Components/Homepage/Homepage";
import StudentList from "./Components/StudentList/StudentList";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/EditStudent" element={<EditStudent />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
