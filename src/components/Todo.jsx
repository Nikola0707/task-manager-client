import Cookies from "js-cookie";

import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { ImCheckboxUnchecked } from "react-icons/im";

const Todo = ({
  todoText,
  completed,
  id,
  setPending,
  setEditTodo,
  setEditTodoID,
  setEditTodoDescription,
}) => {
  const URL = `https://nikola-task-manager-app.herokuapp.com/tasks/${id}`;

  // Remove Task
  const removeTodo = () => {
    try {
      fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Task Completed or Uncompleted
  const updateTaskCompleted = (e, isCompleted) => {
    e.preventDefault()

    fetch(URL,{
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + Cookies.get('token'),
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        "completed" : isCompleted,              
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        setPending(false)
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="todo-container">
      <p className="todo">{todoText}</p>
      <div className="edit-delete-icons">
        {completed ? (
          <GiCheckMark
            style={{
              color: "#F0A350",
              fontSize: "1.5rem",
              cursor: "pointer",
              marginRight: "1rem",
            }}
            onClick={(e) => updateTaskCompleted(e, false)}
          />
        ) : (
          <ImCheckboxUnchecked
            style={{
              color: "#F0A350",
              fontSize: "1.5rem",
              cursor: "pointer",
              marginRight: "1rem",
            }}
            onClick={(e) => updateTaskCompleted(e, true)}
          />
        )}
        <FiEdit
          style={{
            color: "#F0A350",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginRight: "1rem",
          }}
          onClick={() => {
            setEditTodo(true);
            setEditTodoID(id);
            setEditTodoDescription(todoText);
          }}
        />
        <AiOutlineDelete
          style={{
            color: "#F0A350",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            removeTodo();
            setPending(false);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
