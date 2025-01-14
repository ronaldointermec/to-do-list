import styles from '../components/Task.module.css';
import { Trash, Check } from 'phosphor-react'
import { ITodo } from '../App';

interface TasKProps {
    data: ITodo;
    handleStatus: ({ id }: { id: string }) => void;
    handleDelete: ({ id }: { id: string }) => void;
}

export function Task({ data, handleStatus, handleDelete }: TasKProps) {


    function handleToggle() {
        handleStatus({ id: data.id })
    }
  
    function handleRemove() {
        handleDelete({id: data.id})
    }

    const checkboxCheckedClassname = data.isDone
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isDone
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.container}>

            <div>
                <label htmlFor="checkbox" onClick={handleToggle}>
                    <input readOnly type="checkbox" checked={data.isDone} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isDone && <Check size={12} />}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.title}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )

}