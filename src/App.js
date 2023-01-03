import React, { useState } from "react";
import Modal from "./components/UI/Modal";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

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
      isOpen: false,
    });
  };

  return (
    <div>
      <AddUsers getUsers={getUsers} modalData={modalData} />
      {modal.isOpen && (
        <Modal title={modal.title} text={modal.text} closeModal={closeModal} />
      )}
      <UserList users={users} />
    </div>
  );
};

export default App;
