import Navbar from './Components/Navbar.js';
import './App.css';
import Forum  from './Components/Forum.js';
import { useState } from 'react';
import Alert from './Components/Alert.js'

function App() {
  const [mode,setmode]=useState('light');
  const [modetxt,settxt]=useState('Enable Dark Mode')
  const [alert,setalt] = useState(null);

  let showAlert=(type,msg)=>{
    setalt({
      type : type,
      msg : msg
    
    })
    setTimeout(() => {
      setalt(null);
    }, 1500);
  }
  let toggle=()=>{
    if(mode==="light"){
      setmode("dark")
    document.body.style.backgroundColor="grey";
      settxt("Enable Light Mode")
      showAlert("Dark Mode has been Enabled","Success")
    }
      else{
        setmode("light")
        document.body.style.backgroundColor="white";
        settxt("Enable Dark Mode")
        showAlert("Dark Mode has been Disabled","Success")
      }
    }
  
  return (
    <div >
      <Navbar mode={mode} toggle={toggle} modetxt={modetxt} heading="MagicText"/>
      <Alert alert={alert}/>
      <div className='container'><Forum showAlert={showAlert} heading="Word Counter" mode={mode} />
    </div>
    </div>
  );
}

export default App;
