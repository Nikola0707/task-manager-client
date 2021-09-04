import Cookies from "js-cookie";

import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const Todo = ({todoText, completed, id, setPending, setEditTodo, setEditTodoID, setEditTodoDescription}) => {

const URL = `https://nikola-task-manager-app.herokuapp.com/tasks/${id}`

const removeTodo = async() => {
  try {
    await fetch(URL,{
    method: 'DELETE',
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    }
  })
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="todo-container">
      <p className="todo">{todoText}</p>
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
          onClick={() => {
            setEditTodo(true)
            setEditTodoID(id)
            setEditTodoDescription(todoText)
          }
        }
        />
        <AiOutlineDelete
          style={{
            color: "#F0A350",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            removeTodo()
            setPending(false)
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
