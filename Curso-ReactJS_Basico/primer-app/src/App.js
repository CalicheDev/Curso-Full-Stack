import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Estos son los proyectos que he desarrollado
        </p> */}
        {/*Componenete propio  */}
        {/* <Greeting name="Alberto"></Greeting> */}
        {/* <GreetingF name="CalicheDev"></GreetingF> */}
        {/*Componente del listado de tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
        {/**Ejemplos de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/**Ejemplo de uso de Hooks 2 */}
        {/* <Ejemplo2></Ejemplo2> */}
        <MiComponenteConContexto></MiComponenteConContexto>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <table class="table">
          <thead>
            <tr>
              <th>About</th>
              <th>Home</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
