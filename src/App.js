import logo from './logo.svg';
import './App.css';
import Saharsa from './components/Saharsa';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  return (
    <div className="App">
      <img  src = "/12333.jpeg" alt="logo" height="55px"/>
      <div className="Top">
             <h3>Saharsa Age: 18+ Covid Vaccine Slot Availability</h3>
            
             <h4 className="aman">  <a target="_target" href="https://amananku26.github.io/" > <ReactTypingEffect
             text={["Create By -  Aman Anku"]}
             /></a></h4>
     
      <div><a target="_blank" href="https://www.cowin.gov.in/">For Bookinng Slot</a> <br/></div>
     <hr/>
      <div style={{marginTop:"30px"}}></div>
      </div>
 
     <Saharsa/>
    </div>
  );
}

export default App;
