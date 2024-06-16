import './App.css';
import ExampleComponent from './Components/ExampleComponent';
import FetchComponent from './Components/FetchComponent';
import FormComponent from './Components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hooks Tutorial</h1>
        <ExampleComponent />
        <FormComponent />
        <FetchComponent />
      </header>
    </div>
  );
}

export default App;
