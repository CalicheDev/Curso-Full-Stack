import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

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
        <TaskListComponent></TaskListComponent>
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
