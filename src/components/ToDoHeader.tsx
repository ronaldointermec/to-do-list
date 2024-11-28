import { List } from 'phosphor-react';
import styles from '../components/ToDoHeader.module.css';


interface PropsHeader{
    todoList:todoList[]
}

interface todoList{
    id: string,
    title: string,
    isDone: boolean,
}
export function ToDoHeader({todoList}:PropsHeader) {

     const listDone = todoList.filter(todo => todo.isDone).length;
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{todoList.length}</span>
            </aside>
            <aside>
                <p>Concluídas</p>
                <span>{`${listDone} de ${todoList.length}`}</span>
            </aside>
        </header>
    );
}