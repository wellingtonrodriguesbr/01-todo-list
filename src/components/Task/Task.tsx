import { useState } from "react";
import { useChecked } from "../../hooks/useChecked";
import styles from "./Task.module.css";

interface TaskProps {
  task: string;
  completedTasks: string[];
  setCompletedTasks: (tasks: string[]) => void;
  handleDeleteTask: (task: string) => void;
}

export function Task({
  task,
  setCompletedTasks,
  completedTasks,
  handleDeleteTask,
}: TaskProps) {
  const { checkedState, setCheckedState } = useChecked();

  function handleChecked() {
    setCheckedState(!checkedState);

    if (checkedState) {
      setCompletedTasks(completedTasks.filter((t) => t !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  }

  return (
    <li key={task}>
      <div className={styles.task}>
        <input
          className={styles.checkbox}
          onChange={handleChecked}
          type="checkbox"
          checked={checkedState}
          name={task}
          id={task}
        />
        <label
          htmlFor={task}
          className={checkedState ? `${styles.checked}` : ""}
        >
          {task}
        </label>
      </div>
      <button onClick={() => handleDeleteTask(task)} title="Deletar tarefa">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20214 4.98548H6.87158V10.5073H8.20214V4.98548Z"
            fill="#808080"
          />
          <path
            d="M5.46239 4.98548H4.13184V10.5073H5.46239V4.98548Z"
            fill="#808080"
          />
          <path
            d="M12.478 2.16712C12.4754 2.03061 12.4295 1.89846 12.3469 1.78975C12.2642 1.68104 12.1492 1.6014 12.0184 1.56232C11.9596 1.53782 11.8974 1.52252 11.8339 1.51696H8.28678C8.1525 1.07791 7.88082 0.693554 7.51174 0.420471C7.14265 0.147388 6.69564 0 6.23651 0C5.77738 0 5.33038 0.147388 4.96129 0.420471C4.5922 0.693554 4.32053 1.07791 4.18625 1.51696H0.639107C0.580679 1.51814 0.522686 1.52729 0.46674 1.54418H0.45162C0.313182 1.58701 0.193338 1.67547 0.11163 1.79515C0.0299214 1.91483 -0.00883041 2.05866 0.00169348 2.20319C0.0122174 2.34771 0.071396 2.48441 0.169579 2.59099C0.267763 2.69757 0.399158 2.76774 0.542339 2.79006L1.25298 12.5334C1.26382 12.9127 1.41693 13.2741 1.68191 13.5458C1.94688 13.8175 2.30435 13.9797 2.68332 14H9.78668C10.1662 13.9804 10.5244 13.8186 10.79 13.5468C11.0556 13.2751 11.2092 12.9132 11.22 12.5334L11.9277 2.79914C12.0802 2.77797 12.22 2.70232 12.3212 2.58615C12.4223 2.46999 12.478 2.32116 12.478 2.16712ZM6.23651 1.21456C6.3661 1.21458 6.49427 1.24146 6.61294 1.29351C6.73161 1.34556 6.8382 1.42164 6.92598 1.51696H5.54704C5.63459 1.42135 5.74114 1.34507 5.85986 1.29299C5.97859 1.24092 6.10687 1.21421 6.23651 1.21456ZM9.78668 12.7904H2.68332C2.60168 12.7904 2.47467 12.6573 2.45955 12.4457L1.75798 2.81123H10.715L10.0135 12.4457C9.99836 12.6573 9.87135 12.7904 9.78668 12.7904Z"
            fill="#808080"
          />
        </svg>
      </button>
    </li>
  );
}
