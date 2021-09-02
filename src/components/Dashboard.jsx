import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import Greeting from "./Greeting";
import Todo from "./Todo";
import Footer from "./Footer";

import { CgProfile } from "react-icons/cg";
import { AiOutlineSave } from "react-icons/ai";

const Dashboard = () => {
  const [userInput, setUserInput] = useState("");
  const [allUserTodos, setAllUserTodos] = useState("");
  const [pending, setPending] = useState(true);

  let history = useHistory();

  // Fetch all user tasks
  const getAllTasks = async () => {
    await fetch("https://nikola-task-manager-app.herokuapp.com/tasks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const renderTodo = data.map((todo, i) => (
          <Todo
            todoText={todo.description}
            completed={todo.completed}
            id={todo._id}
            key={i}
            setPending={setPending}
          />
        ));

        setAllUserTodos(renderTodo);
      });
  };

  // Create new todo
  const addNewTodo = async (userInput) => {
    const body = {
      description: userInput,
    };
    try {
      await fetch("https://nikola-task-manager-app.herokuapp.com/tasks", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
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

  // Log Out and remove token and user info from cookies
  const signOut = () => {
    fetch("https://nikola-task-manager-app.herokuapp.com/users/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => {
        Cookies.remove("token");
        Cookies.remove("user");
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTodo(userInput)
  }

  // Get all taksh on mount
  useEffect(() => {
    getAllTasks();
  }, []);

  // get all task after new added
  useEffect(() => {
    getAllTasks();
    setPending(true);
  }, [pending]);

  return (
    <div className="user-page-container">
      <header>
        <div className="myProfile-icon-container">
          <CgProfile />
        </div>
        <div className="logout-container">
          <p onClick={signOut}>LOG OUT</p>
        </div>
      </header>

      <Greeting name={Cookies.get("user")} />

      <div className="content">
        <form className="add-new-item-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new todo!"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            />
          <AiOutlineSave
            style={{ color: "#F0A350", fontSize: "1.5rem" }}
            onClick={() => addNewTodo(userInput)}
          />
        </form>
        <div className="all-todos-container">{allUserTodos}</div>
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
