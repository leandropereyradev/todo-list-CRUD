import React, { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState(0);
  const [modalForm, setModalForm] = useState(false);

  const createNewTask = () => {
    if (mode) {
      const editTasks = tasks.find((i) => i.id === mode);
      const upDateTask = tasks.map((t) =>
        t.id === editTasks.id
          ? (t = {
              id: t.id,
              title: task.title,
              description: task.description,
              completed: false,
            })
          : {
              id: t.id,
              title: t.title,
              description: t.description,
              completed: false,
            }
      );
      setTasks(upDateTask);
      setMode(0);
      setTask({
        title: "",
        description: "",
        completed: false,
      });
      setModalForm(false);
      return;
    }

    if ((task.title && task.description) === "") return;
    setTasks([...tasks, { ...task, id: crypto.randomUUID() }]);
    setTask({
      title: "",
      description: "",
      completed: false,
    });
  };

  const editTask = (id) => {
    setModalForm(true);
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ ...taskToEdit });
    setMode(id);
  };

  const completedTask = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeItem = (id) => {
    const newtasklist = tasks.filter((i) => i.id !== id);
    setTasks(newtasklist);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const cancelUpDate = () => {
    setTask({
      title: "",
      description: "",
      completed: false,
    });
    setMode(0);
    setModalForm(false);
  };

  return (
    <div className="tasksContainer">
      <div className="tasksBox">
        <h1 className="tasksTitle">Tareas</h1>
        <button onClick={() => setModalForm(!modalForm)} className="button">
          nueva tarea
        </button>
        <div className="tasksLine"></div>
      </div>
      <ModalForm estado={modalForm} set={() => cancelUpDate()}>
        <TaskForm
          titleValue={task.title}
          descriptionValue={task.description}
          setTitle={(e) => setTask({ ...task, title: e.target.value })}
          setDescription={(e) =>
            setTask({ ...task, description: e.target.value })
          }
          mode={mode}
          cancelUpDate={() => cancelUpDate()}
          createNewTask={() => createNewTask()}
          button={mode ? "Actualizar Tarea" : "Agregar Tarea"}
        />
      </ModalForm>
      <div>
        <div className="tasksMap">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                task={task}
                description={task.description}
                completedTask={() => completedTask(task.id)}
                removeItem={() => {
                  window.confirm(
                    "¿Seguro quieres ELIMINAR esta tarea? \n Si decides eliminarla, esta no se recuperará..."
                  ) && removeItem(task.id);
                }}
                editTask={() => editTask(task.id)}
              />
            ))
          ) : (
            <div className="col-span-3">
              <h1 className="tasksNoneTasks">aún no hay tareas</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
