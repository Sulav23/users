import React, { useState } from "react";
import Modal from "./components/UI/Modal";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import classes from "./components/UI/Modal.module.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState({});

  const getUsers = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const modalData = (data) => {
    setModal(data);
  };

  const closeModal = () => {
    setModal({
      text: "",
      isOpen: false,
    });
  };

  return (
    <div>
      <AddUsers getUsers={getUsers} modalData={modalData} />
      {modal.isOpen && (
        <Modal
          text={modal.text}
          closeModal={closeModal}
          className={!modal.isOpen ? classes.hide : classes.show}
        />
      )}
      <UserList users={users} />
    </div>
  );
};

export default App;
