import Footer from './components/footer/foooter';
import Landing from './components/landingpage/landing.jsx';
import Marquee from './components/marquee/marquee';
import Marquee2 from './components/marquee2/marquee';
import Marquee1 from './components/marquee1/marquee';
import Map from './components/map/map';
import './App.css';

function App() {
  return (
    <div className='App'>
     <Landing/>
    <Marquee/>
    <Marquee1/>
    <Marquee2/>
    <Map/>
    <Footer/>
    </div>
  );
}

export default App;
