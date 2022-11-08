import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./feature/userSlice";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newname, setNewname] = useState("");
  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(
      addUser({ id: userList[userList.length - 1].id + 1, name, username })
    );

    setName(" ");
    setUsername(" ");
  };
  return (
    <div className="App">
      <h1 className="header">CRUD APP USING REDUXTOOLKIT</h1>
      <div className="adduser">
        <input
          type="text"
          placeholder="Enater name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button onClick={handelClick}>Add User</button>
      </div>
      <div className="userlist">
        {userList.map((user) => {
          return (
            <div key={user.id} className="list">
              <h4>{user.name}</h4>
              <p>{user.username}</p>
              <div className="update">
                <input
                  type="text"
                  placeholder="update username"
                  onChange={(e) => {
                    setNewname(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    dispatch(updateUser({ id: user.id, username: newname }));
                  }}
                >
                  Upadate
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
