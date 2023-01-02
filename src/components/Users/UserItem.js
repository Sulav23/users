import React from "react";
import Card from "../UI/Card";

const UserItem = ({ user, index }) => {
  return (
    <li key={index}>
      <Card>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </Card>
    </li>
  );
};

export default UserItem;
