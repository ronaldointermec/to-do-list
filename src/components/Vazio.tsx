import { ClipboardText } from 'phosphor-react';
import styles from './Vazio.module.css';

export function Vazio() {
    return (

        <div className={styles.container}>
            <ClipboardText size={50} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}