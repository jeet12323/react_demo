import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import React, { useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Link,
  Route ,
  Routes as Switch,
} from "react-router-dom";



function App() {
  const [darkMode,setDarkMode] = useState('light');
  const [greenMode,setGreenMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const [value,setValue]=useState(false);
  const [value1,setValue1]=useState(false);
  const [cls1,setCls1]=useState(null);
  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }
  const removeBody=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }

  const toggle1Mode=()=>{
    if(greenMode==='light')
    {
      setGreenMode('green');
      document.body.style.backgroundColor='green';
      showAlert("Green mode is enabled","success");
      document.navbar.style.backgroundColor='green';
    }
    else{
      setGreenMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
    }
  }
  const toggleMode=(event,cls)=>{
  setCls1(cls)
    console.log(cls1)
    //console.log(cls);
   
    if((darkMode ==='light'||`${darkMode}` ==`${cls}`) && event.target.id==='dark1')
    {  removeBody();
      setDarkMode('dark');
      console.log(darkMode)
      
   

  
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode is enabled","success");
    setValue1(!value); 
    setValue(false);


  }
  else if((darkMode ==='light'|| darkMode ==`${cls}`)  && event.target.id==='green1')
  {  removeBody();
    setDarkMode('green');
    // Jenkins 
    console.log(darkMode)
  document.body.style.backgroundColor='green';
  showAlert("green mode is enabled","success");
  setValue(!value); 
  setValue1(false);


} else if((darkMode ==='green'|| darkMode ==`${cls}`)  && event.target.id==='dark1')
{ removeBody();
  setDarkMode('dark');
  console.log(darkMode)
  document.body.style.backgroundColor='grey';
  showAlert("dark mode is enabled","success");
  setValue(false); 
  setValue1(true);
}
else if((darkMode ==='dark'|| darkMode ==`${cls}`)  && event.target.id==='green1')
{ removeBody();
  setDarkMode('green');
  console.log(darkMode)
  document.body.style.backgroundColor='green';
  showAlert("green mode is enabled","success");
  setValue(true); 
  setValue1(false);
}
  else if(event.target.id==='green1' || event.target.id==='dark1'){
    removeBody();
    console.log(`cls=${cls1}`)
    console.log(`darkmode=${darkMode}`)
    console.log(darkMode===cls)

    setDarkMode('light');
  
    document.body.style.backgroundColor='white';
    showAlert("light mode is enabled","success");
    setValue1(false);
    setValue(false);
  }
  else {
    setValue1(false);
    setValue(false);
    setDarkMode(cls);
    setTimeout(() => {
      console.log(`cls=${cls}`)
    console.log(`darkmode=${darkMode}`)
      
    }, 1000);
   
    removeBody();
    
   document.body.classList.add('bg-'+cls);
    showAlert(`${cls} mode is enabled`,`${cls}`);
  }
  }
  return (
    <>
<Router>
<Navbar cls1={cls1} value={value} value1={value1}  mode = {darkMode} mode1={greenMode} toggle1Mode={toggle1Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>


{/*  */}
<div className="container my-3" >
<Switch>
  <Route path="/about" element={<About mode={darkMode}/>}/> // can use exact if we want only /about to render about /about/random wont render same component
  
 
  <Route path="/" element={ <Textform heading="Enter text"  greenMode={greenMode} darkMode={darkMode} showAlert={showAlert}/>}/>

 

  
 
</Switch>
</div>
</Router>


    </>

  );
}

export default App;
