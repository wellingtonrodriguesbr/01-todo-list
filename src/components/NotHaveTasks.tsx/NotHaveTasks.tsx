import styles from "./NotHaveTasks.module.css";

export function NotHaveTasks() {
  return (
    <div className={`${styles.containerNotHaveTasks} container`}>
      <div>
        <img src="/assets/Clipboard.svg" alt="" />
      </div>
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
