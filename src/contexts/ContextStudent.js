import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const ContextStudent = createContext();

const ContextStudentProvider = ({ children }) => {
  const INIT_STATE = {
    Student: [],
    userEdit: null,
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_STUDENT":
        return {
          ...state,
          Student: action.payload,
        };
      case "EDIT_STUDENT":
        return {
          ...state,
          userEdit: action.payload,
        };
      default:
        return state;
    }
  };

  const [user, setUser] = useState([]);

  const getStudent = async () => {
    const { data } = await axios("http://localhost:65535/Student");

    dispatch({
      type: "GET_STUDENT",
      payload: data,
    });
    setUser(data);
  };

  useEffect(() => {
    getStudent();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:65535/Student/${id}`);
    getStudent();
  };

  const addStudent = async (newStudent) => {
    await axios.post("http://localhost:65535/Student", newStudent);
    getStudent();
  };

  const EditStudent = async (id) => {
    let { data } = await axios(`http://localhost:65535/Student/${id}`);
    console.log(data);
    dispatch({
      type: "EDIT_STUDENT",
      payload: data,
    });
    
  };

  const saveNewUser = async (newUser)=>{
    await axios.patch(`http://localhost:65535/Student/${saveNewUser.id}`,newUser)
    getStudent()
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <ContextStudent.Provider
      value={{
        Student: state.Student,
        userEdit: state.userEdit,
        EditStudent,
        deleteStudent,
        getStudent,
        addStudent,
        saveNewUser,
        user,
      }}
    >
      {children}
    </ContextStudent.Provider>
  );
};

export default ContextStudentProvider;
