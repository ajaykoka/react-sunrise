
// import './App.css';
//eslint-disable-next-line
import tailwindcss from "./assets/main.css"; 

import './assets/css/bootstrap.min.css'
import './assets/css/custom.scss'
import './assets/css/plugin.css'
import './assets/css/slick.css'
import './assets/css/custom.css'

import Slider from "./components/Slider";
import Section1 from "./components/Section1"
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Sectionn5 from "./components/Sectionn5"
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Slider />,
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Sectionn5 />,
    <Footer />
    </div>
  );
}

export default App;
