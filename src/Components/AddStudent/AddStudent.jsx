import axios from "axios";
import React, { useContext, useState } from "react";
import { ContextStudent } from "../../contexts/ContextStudent";

const AddStudent = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    Phone: "",
  });

  const { addStudent } = useContext(ContextStudent);

  const postUser = async () => {
    await axios.post("http://localhost:65535/Student", user);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="lastname"
        value={user.lastname}
        onChange={(e) => setUser({ ...user, lastname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={user.Phone}
        onChange={(e) => setUser({ ...user, Phone: e.target.value })}
      />
      <button onClick={postUser}>Add</button>
    </div>
  );
};

export default AddStudent;
