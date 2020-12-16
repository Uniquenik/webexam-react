import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmobile from './components/Navmobile.jsx';
import FirstScreen from './components/First-screen.jsx';
import SecondScreen from './components/Second-screen.jsx';
import ThirdScreen from './components/Third-screen.jsx';
import FourthScreen from './components/Fourth-screen.jsx';
import FiveScreen from './components/Five-screen.jsx';
import SixthScreen from './components/Sixth-screen.jsx';
import SeventhScreen from './components/Seventh-screen.jsx';
import EightScreen from './components/mosaic-eight.jsx';
import NineScreen from './components/Nine-screen.jsx';
import TenScreen from './components/Ten-screen.jsx';
import ElevenScreen from './components/Eleven-screen.jsx';
import TwelveScreen from './components/Twelve-screen.jsx';

function App() {
  {/*const [modalActive,setModalActive] = useState(true);*/}
  return (
    <div>
        <Navmobile />
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <FiveScreen />
        <SixthScreen />
        <SeventhScreen />
        <EightScreen />
        <NineScreen />
        <TenScreen />
        <ElevenScreen/>
        <TwelveScreen/>
        {/*<Modal active={modalActive} setActive={setModalActive}/> */}
    </div>
  );
}

export default App;
