import logo from './logo.svg';
import './App.css';
import useLocalStorage from './components/useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('userName', '')

  const changeHandler = (e) =>{
    setName(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={name} onChange={changeHandler} />
    </div>
  );
}

export default App;
