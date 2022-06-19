import { useState } from "react";
import { useChecked } from "../../hooks/useChecked";
import { NotHaveTasks } from "../NotHaveTasks.tsx/NotHaveTasks";
import { Task } from "../Task/Task";
import styles from "./TasksList.module.css";

interface TasksProps {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

export function TasksList({ tasks, setTasks }: TasksProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const { setCheckedState } = useChecked();

  function handleDeleteTask(task: string) {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks(completedTasks.filter((t) => t !== task));
    setCheckedState(false);
  }

  return (
    <section className={`container`}>
      <div className={styles.content}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksCompleted}>
          <p>Concluídas</p>
          {tasks.length === 0 ? (
            <span>{completedTasks.length}</span>
          ) : (
            <span>
              {completedTasks.length} de {tasks.length}
            </span>
          )}
        </div>
      </div>

      <div className={styles.listContainer}>
        {tasks.length ? (
          <ul className={styles.list}>
            {tasks.map((task: string) => (
              <Task
                task={task}
                setCompletedTasks={setCompletedTasks}
                completedTasks={completedTasks}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        ) : (
          <NotHaveTasks />
        )}
      </div>
    </section>
  );
}
