import styles from './Button.module.css'
import { PlusCircle } from 'phosphor-react';

export function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <button className={styles.button}
            {...props}>
            Criar
            <PlusCircle size={24} width='bold' />
        </button>
    );
}