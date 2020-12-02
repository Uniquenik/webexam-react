import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav.jsx';
import First_screen from './components/First-screen.jsx'
import Second_screen from './components/Second-screen.jsx'

function App() {
  return (
    <div>
        <First_screen />
        <Second_screen />
    </div>
  );
}

export default App;
