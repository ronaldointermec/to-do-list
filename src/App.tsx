import styles from './App.module.css'
import './global.css';
import { Header } from './components/Header'
import {Input} from './components/Input'
import {Button} from './components/Button'


function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrappwer}>
       <div className={styles.container}>
          <Input 
          />
          <Button />
       </div>
      </div>
    </main>
  )
}

export default App
