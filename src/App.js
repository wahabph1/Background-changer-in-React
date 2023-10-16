
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Route ,Routes ,Link ,BrowserRouter} from 'react-router-dom';
import But from './Components/Button';
function App() {
  return (
   <>
   <h1 style={{}} >background Changer </h1>
   <div id='div1' >
   <But color ={"red"}  name={"red"} ></But>
   <But color ={"Blue"} name={"Blue"} ></But>
   <But color ={"Green"} name={"Green"} ></But>
   <But color ={"Pink"} name={"pink"} ></But>
   <But color ={"Purple"} name={"purple"} ></But>
   <But color ={"Cyan"} name={"Cyan"} ></But>
   <But color ={"Yellow"} name={"yellow"} ></But>
   <But color ={"brown"} name={"brown"} ></But>
   </div>
   </>
    
  );
}

export default App;
