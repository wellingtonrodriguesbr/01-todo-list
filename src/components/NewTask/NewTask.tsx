import { useState } from "react";
import { TasksList } from "../TasksList/TasksList";
import styles from "./NewTask.module.css";

export function NewTask() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function createNewTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addNewTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const noValueEntered = newTask.length === 0;

  return (
    <>
      <section className={`${styles.newTaskContainer} container`}>
        <div className={styles.newTaskInput}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
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
