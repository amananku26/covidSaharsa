import logo from './logo.svg';
import './App.css';
import Saharsa from './components/Saharsa';
import ReactTypingEffect from 'react-typing-effect';
import Feed from './components/Feedback';

function App() {
  return (
    <div className="App">
      <img  src = "/12333.jpeg" alt="logo" height="55px" width="25%"/>
      <div className="Top">
             <h3> <span style={{fontWeight:"bolder"}}>Saharsa</span>  Age: 18+ Covid Vaccine Slot Availability</h3>
            
             <h4 className="aman">  <a target="_target" href="https://amananku26.github.io/" > <ReactTypingEffect
             text={["Create By -  Aman Anku"]}
             /></a></h4>
     
      <div><a target="_blank" href="https://selfregistration.cowin.gov.in/">For Booking Slots</a> <br/></div>
      <p>कृपया प्रतिक्रिया दें इस पृष्ठ के नीचे दाईं ओर काले बटन पर क्लिक करके</p>
     <hr/>
      <div style={{marginTop:"30px"}}></div>
      </div>
 
     <Saharsa/>
     <Feed/>
    </div>
  );
}

export default App;
