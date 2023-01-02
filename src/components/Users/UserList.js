import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <UserItem user={user} index={index} />
      ))}
    </ul>
  );
};

export default UserList;
