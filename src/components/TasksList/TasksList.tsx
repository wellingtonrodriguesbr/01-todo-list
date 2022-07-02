import { NotHaveTasks } from "../NotHaveTasks.tsx/NotHaveTasks";
import { Task } from "../Task/Task";
import styles from "./TasksList.module.css";

interface Task {
  id: number;
  title: string;
  checked: boolean;
}

interface TasksProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export function TasksList({ tasks, setTasks }: TasksProps) {
  const tasksCompleted = tasks.reduce(
    (acc, task) => (task.checked ? acc + 1 : acc),
    0
  );

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleChecked(id: number) {
    const checkTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            checked: !task.checked,
          }
        : task
    );

    setTasks(checkTasks);
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
            <span>{tasks.length}</span>
          ) : (
            <span>
              {tasksCompleted} de {tasks.length}
            </span>
          )}
        </div>
      </div>

      <div className={styles.listContainer}>
        {tasks.length ? (
          <ul className={styles.list}>
            {tasks.map((task) => (
              <Task
                task={task}
                handleChecked={handleChecked}
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
