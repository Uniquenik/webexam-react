import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmobile from './components/Navmobile.jsx';
import First_screen from './components/First-screen.jsx';
import Second_screen from './components/Second-screen.jsx';
import Third_screen from './components/Third-screen.jsx';
import Fourth_screen from './components/Fourth-screen.jsx';



function App() {
  return (
    <div>
        <Navmobile />
        <First_screen />
        <Second_screen />
        <Third_screen />
        <Fourth_screen />
    </div>
  );
}

export default App;
