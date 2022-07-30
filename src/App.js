import './App.css';
import Tarea from './componentes/Tarea.jsx';


function App() {
  return (
    <div className="app-tareas">
      <div className='lista-tareas-principal'>
        <h1>Mis Tareas</h1>
        <Tarea/>
      </div>
    </div>
  );
}

export default App;
