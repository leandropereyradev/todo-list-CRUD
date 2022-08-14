import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BiRedo } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";

const Task = ({
  removeItem,
  completedTask,
  editTask,
  title,
  description,
  task,
}) => {
  return (
    <div className="taskContainer">
      <div>
        <h1 className={task["completed"] ? "taskCompleted" : "taskIncompleted"}>
          {title}
        </h1>
        {task["completed"] ? (
          <IoCheckmarkDoneSharp className="doneIcon" />
        ) : null}
        <div className="lineTask" />
      </div>
      <p className={task["completed"] ? "line-through" : null}>{description}</p>
      <div className="">
        <div className="lineTask" />
        <div className="iconBox">
          <AiTwotoneEdit
            data-toggle="tooltip"
            data-placement="bottom"
            title="Editar Tarea"
            onClick={editTask}
            className="taskIcon"
          />
          {task["completed"] ? (
            <BiRedo
              data-toggle="tooltip"
              data-placement="bottom"
              title="Rehacer Tarea"
              onClick={completedTask}
              className="taskIcon"
            />
          ) : (
            <IoCheckmarkDoneSharp
              data-toggle="tooltip"
              data-placement="bottom"
              title="Confirmar Tarea"
              onClick={completedTask}
              className="taskIcon"
            />
          )}
          <AiTwotoneDelete
            data-toggle="tooltip"
            data-placement="bottom"
            title="Eliminar Tarea"
            onClick={removeItem}
            className="taskIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
