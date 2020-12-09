import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmobile from './components/Navmobile.jsx';
import First_screen from './components/First-screen.jsx';
import Second_screen from './components/Second-screen.jsx';
import Third_screen from './components/Third-screen.jsx';
import Nine_screen from './components/Nine-screen.jsx';
import Ten_screen from './components/Ten-screen.jsx';


function App() {
  return (
    <div>
        <Navmobile />
        <First_screen />
        <Second_screen />
        <Third_screen />
        <Nine_screen />
        <Ten_screen />

    </div>
  );
}

export default App;
