import { useState } from "react";
import { NotHaveTasks } from "../NotHaveTasks.tsx/NotHaveTasks";
import { Task } from "../Task/Task";
import styles from "./TasksList.module.css";

interface TasksProps {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

export function TasksList({ tasks, setTasks }: TasksProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleDeleteTask(task: string) {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks(completedTasks.filter((t) => t !== task));
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
          <>
            {tasks.map((task: string) => (
              <Task
                task={task}
                setCompletedTasks={setCompletedTasks}
                completedTasks={completedTasks}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </>
        ) : (
          <NotHaveTasks />
        )}
      </div>
    </section>
  );
}
