import React from "react";
import { useState } from "react";
import Alert from "./Alert";

export default function TextForm(props) {
  const handleUpperCaseFun = () => {
    // console.log("upper case was clicked" + text) ;
    let newText = text.toUpperCase() ; 
    setText(newText) ;
    props.changeAlert("Changed to Upper Case" , "success") ; 
  };
  const handleOnChangeFun = (event) => {
    // console.log("change happend") ;
    setText(event.target.value) ; // isko likhne pe hmlog text variable pe ye value bhi assign kr de rhe hai and likh pa rhe hai textarea ke andar . 
    // mtlv ki ab jo bhi hm text area ke andar likhenge wo hmlog , setText func ke help se update/assign kr pa rhe hai  text variable ko bhi .
  };
  const handleLowerCaseFun = () =>{
    let newText2 = text.toLowerCase() ; 
    setText(newText2) ; 
    props.changeAlert("Changed to Lower Case" , "success") ; 
  }
  const clearFun = () =>{
    let del = "" ; 
    setText(del) ; 
    props.changeAlert("Text Area Cleared" , "success") ; 

  }
  const handleCopy = () =>{
     let words = document.getElementById('myBox') ;
     words.select() ;
    navigator.clipboard.writeText(words.value) ;
    props.changeAlert("Copied to Clipboard" , "success") ; 

  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/) ;
    setText(newText.join(" ")) ;
    props.changeAlert("Extra Spaces Removed" , "success") ; 

  }
  const [text, setText] = useState("");

  return (
    <>
      <div style= {{color: props.mode === 'light' ? 'black' :'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text} // value wo hai jo hm text area ke andar likhenge , but textarea ke andar hmlog kuch likh nahi payenge kuki value lo hmne text assign kar diya hai , and text hai wo variable hai useState func ka ,  and text sirf setText function se update hoga , to hmlog ko agar kuch textArea ke andar likhna hai ,  to hume onChange function ke andar setText func call krna hoga and jo bbhi likhnge textArea ke andar wo ab assign ho jayega text variable me , and lastly hmlog usko uppercase me convert krke return kr denge . 
            onChange={handleOnChangeFun}
            style= {{backgroundColor: props.mode === 'light' ? 'white' :'#042743' , color : props.mode === "dark" ? 'white' : 'black'} }
          ></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={handleUpperCaseFun}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-2" onClick={handleLowerCaseFun}>
        Convert to LowerCase
        </button>
        <button className="btn btn-info mx-2" onClick={clearFun}>
        Clear Text
        </button>
        <button className="btn btn-info mx-2" onClick={handleCopy}>
        Copy Text
        </button>
        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3 "  style= {{color: props.mode === 'light' ? 'black' :'white'}}>
        <h2>Your Text Summary !!</h2>
         
      <p>{text === ""  ? 0 : text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter some text to preview it here"}</p>
      </div>
    </>
  );
}
