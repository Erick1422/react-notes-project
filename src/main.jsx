import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import App from './App.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Funciona principalmente en desarollo para mostrar recomendaciones de escritura */}
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)