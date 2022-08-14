import React from "react";

const TaskForm = ({
  titleValue,
  descriptionValue,
  setTitle,
  setDescription,
  createNewTask,
  button,
  mode,
  cancelUpDate,
}) => {
  return (
    <div className="taskFormContainer">
      <div className="taskFormBox">
        <div className="w-96">
          <input
            type="text"
            placeholder={"Título"}
            name="title"
            value={titleValue}
            className={"input"}
            onChange={setTitle}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="description"
            rows={4}
            placeholder={"Descipción"}
            value={descriptionValue}
            className={"input"}
            onChange={setDescription}
          ></textarea>
        </div>
      </div>
      {mode ? (
        <div className="flex gap-7">
          <div>
            <button className="button" onClick={createNewTask}>
              {button}
            </button>
          </div>
          <div>
            <button className="button" onClick={cancelUpDate}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button className="button" onClick={createNewTask}>
            {button}
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
