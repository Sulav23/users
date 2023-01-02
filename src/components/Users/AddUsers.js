import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import "./AddUsers.css";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn">Add User</button>
      </form>
    </Card>
  );
};

export default AddUsers;
