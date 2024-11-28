import styles from '../components/Task.module.css';
import {Trash} from 'phosphor-react'

export function Task(){
   /* return (
        <div className={styles.container}>
            <div>
         <label htmlFor="checkbox" onClick={()=>{}}>
            <input readOnly type='checkbox' />
            <span className={styles.checkbox}></span>
            <p className={`${styles.pararapshd}`}>
            Concluir desafio react
            </p>
         </label>
       
            </div>
            <button onClick={()=>{}}>
                <Trash size={16} color='#808080' />
            </button>
        </div>
    );
    */
    return (
        <div className={styles.container}>
          <div>
            <label htmlFor="checkbox" onClick={()=>{}}>
              <input readOnly type="checkbox" checked={()=>{
                
              }} />
              <span className={`${styles.checkbox} `}>
              
              </span>
    
              <p className={`${styles.paragraph} `}>
                to do list
              </p>
            </label>
          </div>
    
          <button onClick={()=>{}}>
            <Trash size={16} color="#808080" />
          </button>
        </div>
      )
}