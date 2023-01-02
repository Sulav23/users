import React from "react";

const UserItem = ({ user, index }) => {
  return (
    <li key={index}>
      {user.name} ({user.age} years old)
    </li>
  );
};

export default UserItem;
