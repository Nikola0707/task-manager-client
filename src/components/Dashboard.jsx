import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { withRouter } from "react-router";

import UserProfile from "./UserProfile.jsx";
import Greeting from "./Greeting";
import Todo from "./Todo";
import Footer from "./Footer";

import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [userInput, setUserInput] = useState("");

  const [allUserTodos, setAllUserTodos] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const [editTodo, setEditTodo] = useState(false);
  const [editTodoID, setEditTodoID] = useState("");
  const [editTodoDescription, setEditTodoDescription] = useState("");

  const [pending, setPending] = useState(true);
  const [showMyProfile, setShowMyProfile] = useState(false);

  const [filterStatus, setFilterStatus] = useState("");

  const [userInfo, setUserInfo] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState("");

  // User ID and User Token
  const userId = Cookies.get("id");
  const userToken = Cookies.get("token");

  // Fetch all user tasks
  const getAllTasks = () => {
    setShowSpinner(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/tasks?completed=${filterStatus}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + userToken,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const renderTodo = data.map((todo, i) => (
          <Todo
            todoText={todo.description}
            completed={todo.completed}
            id={todo._id}
            key={i}
            setPending={setPending}
            setEditTodo={setEditTodo}
            setEditTodoID={setEditTodoID}
            setEditTodoDescription={setEditTodoDescription}
          />
        ));
        setAllUserTodos(renderTodo);
        setShowSpinner(false);
      });
  };

  // Create new todo
  const addNewTodo = async (userInput) => {
    const body = {
      description: userInput,
    };
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + userToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setUserInput("");
      setPending(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(userInput);
  };

  const editTodoValue = (e, todoId) => {
    e.preventDefault();
    const body = {
      description: editTodoDescription,
    };
    fetch(`${process.env.REACT_APP_API_URL}/tasks/${todoId}`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((e) => console.log(e));
    setEditTodoDescription("");
    setPending(false);
    setEditTodo(false);
  };

  //   Get User profile info
  const myProfile = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((e) => console.log(e));
  };

  // Fetch user avatar
  const userAvatar = () => {
    fetch(
      `${process.env.REACT_APP_API_URL}/users/${userId}/avatar`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + userToken,
        },
      }
    )
      .then((response) => setUserAvatarUrl(response.url))
      .catch((e) => console.log(e));
  };

  // Get user profile and all user tasks
  useEffect(() => {
    userAvatar();
    getAllTasks();
  }, [userAvatarUrl]);

  // get all task after new added
  useEffect(() => {
    myProfile();
    getAllTasks();
    setPending(true);
  }, [pending]);

  // Rerender only tasks
  useEffect(() => {
    getAllTasks();
  }, [filterStatus]);

  return (
    <div className="user-page-container">
      <header>
        <nav>
          <div onClick={() => setShowMyProfile(!showMyProfile)}>
          <CgProfile onClick={() => setShowMyProfile(!showMyProfile)} />
          <p>Menu</p>
          </div>  
        </nav>
        <div className="user-profile-card">
          {showMyProfile && (
            <UserProfile
              userAvatarUrl={userAvatarUrl}
              userInfo={userInfo}
              setUserAvatarUrl={setUserAvatarUrl}
            />
          )}
        </div>
      </header>
      <Greeting name={Cookies.get("user")} />

      <div className="content">
        {!editTodo ? (
          <>
            <form className="add-new-item-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Add new todo!"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </form>
            <div className="type-of-todos-container">
              {/* Filter Todos By category */}
              <label htmlFor="all">All</label>
              <input
                type="radio"
                name="todos"
                id="all"
                value="All"
                onClick={() => setFilterStatus("")}
              />

              <label htmlFor="uncompleted">Uncompleted</label>
              <input
                type="radio"
                name="todos"
                id="uncompleted"
                value="Uncompleted"
                onClick={() => setFilterStatus(false)}
              />

              <label htmlFor="completed">Completed</label>
              <input
                type="radio"
                name="todos"
                id="completed"
                value="Completed"
                onClick={() => setFilterStatus(true)}
              />
            </div>
          </>
        ) : (
          <form
            className="add-new-item-form"
            onSubmit={(e) => editTodoValue(e, editTodoID)}
          >
            <input
              type="text"
              placeholder="Edit todo"
              value={editTodoDescription}
              onChange={(e) => setEditTodoDescription(e.target.value)}
            />
          </form>
        )}
        {showSpinner ? (
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="all-todos-container">{allUserTodos}</div>
        )}
      </div>
      <div className="footer">
        <Footer
          backgroundDesignedBy="Designed by pch.vector / Freepik"
          backgroundColor="#f0a350"
        />
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
