
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode , setMode] = useState("light") ; 
  const [viceVersa , setViceVersa] = useState(`Enable Dark Mode`)
  const [alert , setAlert] = useState(null) ; 
  const changeALert= (message  , type) =>{
      setAlert
        ({msg : message , 
         type : type 
          })
      setTimeout(() =>{
          setAlert(null) ; 
      } , 1500)
      }
  
  
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light') ; 
      setViceVersa('Enable Dark Mode') ;
      document.body.style.backgroundColor = 'white' ; 
   
      changeALert("Dark mode has been disabled" , "success")
    }else{
      setMode('dark')
      setViceVersa('Disable Dark Mode') ;
      document.body.style.backgroundColor = '#042743' ; 
      changeALert("Dark mode has been enabled" , "success")

    }
  }

  return (
    <>

      <Navbar title="TextUtils" about="about textUtils" mode = {mode} toggleMode = {toggleMode} viceVersa = {viceVersa}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
       <TextForm heading="Enter a text to analyze"  mode = {mode} changeAlert = {changeALert}/>
   
        </div>
    </>
  );
}

export default App;

///
//there are 2 ways of designing a website using react
//1. using classNameName based components : now not widely  used  , developer find it difficult
//2. using function based components : used widely ,  easy to use  : 1. here we create a function and one things we always do is return a "jsx"
//what is jsx :  whenever we find some html content in  a js file we will put thAT in a return statement and that html that is actually jsx will be reflected in our webpage .. one bebfit of writing html in this way is we can actually write js inside these html codes.
//   the idea behind doing this was react developers did not wanted to have an separate file for all diferrent things they just wantedd to unified each and every thing in a single file .
// we can actually use js inside / with the html coddes using curly brackets {}  .
// in react we can only return only one html elements.  for ex: we cannot return 2  div .
