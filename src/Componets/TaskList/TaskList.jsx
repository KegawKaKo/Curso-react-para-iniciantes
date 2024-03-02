import React from "react";
import "./TaskList.css";
import proptypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  taskState,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
  const addtask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addtask} className="btn">
          <img src={plusIcon} alt="Plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: proptypes.string.isRequired,
  onAddTask: proptypes.func.isRequired,
  tasks: proptypes.array.isRequired,
};
