import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dash" element={<Dashboard/>}></Route>
       </Routes>
      </header>
    </div>
  );
}

export default App;
