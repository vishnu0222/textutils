import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  
  const showalert=(message,type) =>{
    setalert({
      msg:message,
      type:type
    })
  }
  setTimeout(()=>{
    setalert(null);
  },2000)
  const togglemode=()=> {
    if(mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'; 
      showalert("Light mode has been enabled","success");

    }
  }
  const redtogglemode=()=> {
    if(mode=="light") {
      setmode('dark');
      document.body.style.backgroundColor='red';
      showalert("red mode has been enabled","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'; 
      showalert("Light mode has been enabled","success");

    }
  }
  const greentogglemode=()=> {
    if(mode=="light") {
      setmode('dark');
      document.body.style.backgroundColor='green';
      showalert("Green mode has been enabled","success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'; 
      showalert("Light mode has been enabled","success");

    }
  }
  
  return(
    <>
      {/* <Router> */}
      <Navbar title="Textutils" about="Aboutus" mode={mode} redtogglemode={redtogglemode} greentogglemode={greentogglemode} togglemode={togglemode}/>
      <Alert alert={alert}/>
        <div className="container">
          {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/"> */}
                <Textform showalert={showalert} mode={mode} heading="Enter the text to analyze" />
              {/* </Route>
          </Switch> */}
          
        </div>
      {/* </Router> */}
    </>
  ); 
}

export default App;
