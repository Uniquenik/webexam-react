import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import First_screen from './components/First-screen.jsx';
import Second_screen from './components/Second-screen.jsx';
import Navmobile from './components/Navmobile.jsx';

function App() {
  return (
    <div>
        <Navmobile />
        <First_screen />
        <Second_screen />
    </div>
  );
}

export default App;
