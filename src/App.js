
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)

  }
  
  
   const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled","success")
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        {/* <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route */}
            {/* // path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            {/* } */}
          {/* // ></Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  ); 
}

export default App;
