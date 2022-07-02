import { useState } from "react";
import { TasksList } from "../TasksList/TasksList";
import styles from "./NewTask.module.css";

interface Task {
  id: number;
  title: string;
  checked: boolean;
}

export function NewTask() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function createNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function addNewTask() {
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      checked: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  const noValueEntered = newTaskTitle.length === 0;

  return (
    <>
      <section className={`${styles.newTaskContainer} container`}>
        <div className={styles.newTaskInput}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={createNewTask}
          />
        </div>
        <button onClick={addNewTask} disabled={noValueEntered}>
          Criar
          <img src="/assets/plus.svg" alt="" />
        </button>
      </section>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}
