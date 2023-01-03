import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import "./AddUsers.css";

const AddUsers = ({ getUsers, modalData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const resteInputs = () => {
    setName("");
    setAge("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      modalData({
        title: "Invalid Name or Age",
        text: "Please enter both the values.",
        isOpen: true,
      });
      resteInputs();
      return;
    }

    if (+age <= 0) {
      modalData({
        title: "Invalid age.",
        text: " Age cannot be a negative value.",
        isOpen: true,
      });
      resteInputs();
      return;
    }

    getUsers({ name, age });

    resteInputs();
  };

  return (
    <Card className={classes.form}>
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
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
