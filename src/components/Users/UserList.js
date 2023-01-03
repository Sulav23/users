import React from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = ({ users }) => {
  if (users.length < 1) {
    return <h2>No Users</h2>;
  }

  return (
    <div className="users">
      <Card className={classes.list}>
        <ul>
          {users.map((user, index) => (
            <UserItem user={user} id={index} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
