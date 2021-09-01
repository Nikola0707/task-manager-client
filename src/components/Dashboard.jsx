import Cookies from "js-cookie";

import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

import Footer from "./Footer";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const axios = require("axios");

const Dashboard = () => {
  let history = useHistory();

  const signOut = () => {
    fetch("https://nikola-task-manager-app.herokuapp.com/users/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => {
        Cookies.remove("token");
        history.push("/");
      })
      .catch((e) => console.log(e));
  };
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
      <h1 style={{ color: "#F0A350", textAlign: "center", margin: "3rem 0" }}>
        Good Morning Nikola!
      </h1>
      <div className="content">
        <form action="" className="add-new-item-form">
          <input type="text" placeholder="Add new todo!" />
          {/* <AiOutlineSave style={{color:"#F0A350", fontSize:"1.5rem"}}/> */}
        </form>
        <div className="all-todos-container">
          <div className="todo-container">
            <p className="todo">Keep learning more and more!</p>
            <div className="edit-delete-icons">
              <GiCheckMark
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <FiEdit
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <AiOutlineDelete
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="todo-container">
            <p className="todo">Keep learning more and more!</p>
            <div className="edit-delete-icons">
              <GiCheckMark
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <FiEdit
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <AiOutlineDelete
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="todo-container">
            <p className="todo">Keep learning more and more!</p>
            <div className="edit-delete-icons">
              <GiCheckMark
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <FiEdit
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <AiOutlineDelete
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="todo-container">
            <p className="todo">Keep learning more and more!</p>
            <div className="edit-delete-icons">
              <GiCheckMark
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <FiEdit
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <AiOutlineDelete
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="todo-container">
            <p className="todo">Keep learning more and more!</p>
            <div className="edit-delete-icons">
              <GiCheckMark
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <FiEdit
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              />
              <AiOutlineDelete
                style={{
                  color: "#F0A350",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
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
