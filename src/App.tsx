
import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ToDoHeader } from './components/ToDoHeader';
import { Vazio } from './components/vazio'
import { Task } from './components/Task'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const ToDoList = [
  {
    id: uuidv4(),
    title: 'Concluir o desafio',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Estudar dotnet core',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: 'Aprender react',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Bucar filho na escola',
    isDone: true,
  }
];



function App() {
  const [toDos, setTodos] = useState(ToDoList);

  const [inputValue, setInputValue] = useState('');

  function handleCreateNewToDo() {

    if (!inputValue) {
      return
    }



    setInputValue((value) => {
      return value = ''
    });

    console.log('handle click');
  }

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {

    setInputValue((value) => {
      return value = e.target.value
    });
    console.log(e.target.value)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.container}>
          <Input
            onChange={handleInputValue}
            value={inputValue}
          />
          <Button onClick={handleCreateNewToDo} />
        </div>


        <div className={styles.tasksList}>
          <ToDoHeader todoList={toDos} />
          {toDos.length > 0 ? (
            <div>
              {
                toDos.map((todo) => (
                  <Task
                   key={todo.id}
                   data={toDos}
                  />
                )
                )
              }
            </div>
          ) : (<Vazio />)}
        </div>
      </section>
    </main>
  )

}

export default App
