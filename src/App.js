//import logo from './logo.svg';
//import './App.css';

import React, { useState } from "react";
import Alert from "./componenets/Alert";
import Aboutus from "./componenets/Aboutus";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

//let sname = "Sameer";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2a3152';
      showAlert('Dark Mode Acticated', 'success');
      document.title = "Dark mode";

      // setInterval(() => {
      //   document.title= "Text Utils Amazing Mode";  
      // }, 1500);

      // setInterval(() => {
      //   document.title= "Text Utils Web Site";  
      // }, 3000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Acticated', 'success');
      document.title = "Light mode";
    }
    
  }
  return (
    <>
      <Router>
      {/* <Navbar title="Softtech Services" abouttext="About Softtech" /> */}
      <Navbar title="Softtech Services" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert} />
      <div className="container mt-5">
        <Routes>
          {/* <Route exact path="/about">
            <Aboutus />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter The Text to analayze" mode={mode} showAlert={showAlert}/>
          </Route> */}
          <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/" element={<TextForm heading="Enter The Text to analayze" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
        {/* <Aboutus /> */}

      </div>
      </Router>
    </>
    
  );
}

export default App;