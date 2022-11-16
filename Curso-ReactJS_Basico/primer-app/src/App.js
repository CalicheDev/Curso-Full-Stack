import logo from "./assets/images/logo.png";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Greetingstyle from "./components/pure/greetingSyle";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      {/* <ul>
          <li> <a href="#">HOME</a></li>
          <li> <a href="#">ABOUT</a></li>
          <li> <a href="#">CONTACT</a></li>
          <li class="active"> <a href="#">LOGIN</a></li>
        </ul>
      </header> */}

      <div>
        <TaskListComponent></TaskListComponent>
      </div>
    </div>
  );
}

export default App;
