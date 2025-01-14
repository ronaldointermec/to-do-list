
import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ToDoHeader } from './components/ToDoHeader';
import { Vazio } from './components/Vazio';
import { Task } from './components/Task'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
  id: string;
  title: string;
  isDone: boolean;
}

/*
const ToDoList: ITodo[] = [
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
    title: 'Buscar filho na escola',
    isDone: true,
  }
];
*/



function App() {

 ['item1', 'item2', 'item3'].map;



  const [toDos, setTodos] = useState<ITodo[]>([]);

  const [inputValue, setInputValue] = useState('');

  function handleCreateNewToDo() {

    if (!inputValue) {
      return
    }


    const newValue: ITodo = {
      id: uuidv4(),
      title: inputValue,
      isDone: false,
    }

    setTodos((state) => [...state, newValue])
    setInputValue((value) => {
      return value = ''
    });


  }

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {

    setInputValue((value) => {
      return value = e.target.value
    });
    console.log(e.target.value)
  }

  function handleStatus({ id }: { id: string }) {

    const updatedToDoList = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    /*
        const index = toDos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          ToDoList[index].isDone = !ToDoList[index].isDone;
        }
        const updatedToDoList = [...ToDoList];
    
    */

    setTodos(updatedToDoList);


  }
  function handleDelete({ id }: { id: string }) {
    //const updatedToDoList = toDos.filter(todo => todo.id !== id)


    const index = toDos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      toDos.splice(index, 1);
    }
    const updatedToDoList = [...toDos];
    if(!confirm('Are you sure?')){
      return;
    }
  

    setTodos(updatedToDoList);
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
                    data={todo}
                    handleStatus={handleStatus}
                    handleDelete={handleDelete}
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
