import React,{useState} from 'react'

export default function Textform(props) {
    const handlechange=(e)=>{
        console.log("change");
        setText(e.target.value);
    }
    const handleUpClick=(e)=>{
        console.log("u clicked");
        let newtext;
        if(e.target.id == "uperr")
        {
        newtext=text.toUpperCase();
        console.log({text});
        props.showAlert('converted to uppercase','success');
        }
       
        else
        {
           newtext=text.toLowerCase();
           props.showAlert('converted to lowercase','success');
        }
        setText(newtext);
    }
    const handlecopy=()=>{
        //var text=document.getElementById('myBox');
        //text.select();
        navigator.clipboard.writeText(text);
        props.showAlert('coppied to clipboard','success');
    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "));
        props.showAlert('removed extra space','success');
    }
    const[text,setText]=useState(""); 
    const great=(event)=> {
      console.log(  document.getElementById("myBox"))
    
  
      
    }



  return (
    <>
    <div className='container' style={{color:props.darkMode ==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value={text}  onChange={handlechange} style={{cursor:'default',backgroundColor:props.darkMode==='dark'?'grey':'white',color: props.darkMode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" id = "uperr" onClick={handleUpClick}>Convert uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id = "lower" onClick={handleUpClick}>Convert lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handlecopy}>copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpace}>remove extra space</button>
    </div>
    <div className="container my-3" style={{color:props.darkMode ==='dark'?'white':'black'}}>
        <h2>your summary</h2>
        <p>{text.length?`${text.split(/\s+/).filter((e)=>{
          return e.length!=0

        }).length} words and ${text.length} characters`:`0 words and ${text.length} characters`}</p>
        <h2>preview</h2>
        <p>{text.length>0?text:'enter text'}</p>
    </div>
    </>
  )
}
