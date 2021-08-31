import Footer from "../components/Footer";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const UserPage = () => {
  return (
    <div className="user-page-container">
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

export default UserPage;
