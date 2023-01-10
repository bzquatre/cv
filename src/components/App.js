
import { useState } from "react";
import Contact from "./Contact";
import MyWorks from "./MyWorks";
import Skills from "./Skills";
import Works from "./Works";
function App() {
  const [count, setCount] = useState(true);
  function opennav(){
    if(count){
    document.getElementById("nav").style.height="260px";
    document.getElementById("icon").style.color="#3399ff";
    document.getElementById("nav").style.borderRadius="0px";
    setCount(false);
    }else{
    document.getElementById("nav").style.height="45px";
    document.getElementById("icon").style.color="#000";
    document.getElementById("nav").style.borderRadius="40px";
    setCount(true);
    }
    }
  return (
<>
  <header>
    <nav className="nav" id="nav">
    <a href="#">HOME</a>
    <a href="#Skills">SKILLS</a>
    <a href="#MyWorks">MY WORKS</a>
    <a href="#ContactMe">CONTACT ME</a>
    <a className="active" target="_blank" href="/cv.pdf">DOWNLOAD CV <i className="fa fa-download"></i></a>
    <a className="icon" id="icon" onClick={()=>opennav()}><i className="fa fa-bars"></i></a>
    </nav>
  </header>
  <div className="container">
  <table>
  <tbody>
    <tr>
       <Works/>
    </tr>
    <tr  id="Skills">
        <Skills/>
    </tr>
    <tr>
        <MyWorks/>
    </tr>
    <tr id="ContactMe">
        <Contact/>
    </tr>
    </tbody>
    </table>

  </div>
  <div id="snackbar"></div>
  <div id="snackbar2"></div>


</>
  );
}

export default App;
