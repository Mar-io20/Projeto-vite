
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { Register } from './App/Pages/Register'
import { Task } from './App/Pages/Lista'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Register />
      </div>
    </BrowserRouter>
  )
}

export default App
