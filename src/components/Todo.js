import React from "react";
import PropTypes from "prop-types";
import { remove } from "../actions/index";

export const props = function deleteTodo(props) {
  remove(props.id);
};

const Todo = ({ deleteTodo, onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
    <p>
      <button onClick={deleteTodo} className="deleteTodo">
        Delete
      </button>
    </p>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
