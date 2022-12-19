import React, { useContext, useEffect } from "react";
import { ContextStudent } from "../../contexts/ContextStudent";
import { Link } from "react-router-dom";

const StudentList = () => {
  const { Student, getStudent, user, deleteStudent, EditStudent } =
    useContext(ContextStudent);

  console.log(user);

  useEffect(() => {
    getStudent();
  }, []);

  console.log(Student);
  return (
    <div>
      {user.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastname}</li>
          <li>{item.Phone}</li>
          <button onClick={() => deleteStudent(item.id)}>Delete</button>
          <Link
            to="/EditStudent"
            style={{
              color: "grey",
              margin: "10px",
              textDecoration: "none",
            }}
          >
            <button onClick={() => EditStudent(item.id)}>Edit</button>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default StudentList;
