import React,{useState} from 'react'

export default function Forum(props) {
    const funcOnUppercase=()=>{
        console.log("You have clicked on"+ text)
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Success","Text Converted into Uppercase.")
    }
    const funcOnLowercase=()=>{
        console.log("You have clicked on"+ text)
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Success","Text Converted into Lowercase.")
       
    }
    const funcOnExtraspace=()=>{
        console.log("You have clicked on"+ text)
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Success","Extra Spaces Removed.")
        
    }
    const funcOnChange=(event)=>{
setText(event.target.value)
    }
    const funcOnclear=()=>{
        setText("")
    }
    const funcOnCopy=()=>{
       var text=document.getElementById('mybox');
       text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Success","Text Copied")
    }
   
    const[text,setText] = useState("");
    
  return (
    <div>
    <div style={{color:(props.mode==="light"?'black':'white')}}>
        
        <h1 className='text-center m-3'>{props.heading}</h1>
        <textarea   style={{color:(props.mode==="light"?'black':'white'),backgroundColor:(props.mode==="light"?'white':'black')}} value={text} id='mybox'  className="form-control border border-primary border-3" onChange={funcOnChange}  rows="8"></textarea>
        <button className='btn btn-primary m-3 text-uppercase' onClick={funcOnUppercase}>Covert to Uppercase</button>
        <button className='btn btn-primary m-3 text-uppercase' onClick={funcOnLowercase}>Covert to LowerCase</button>
        <button className='btn btn-primary m-3 text-uppercase' onClick={funcOnExtraspace}>Remove Extra Spaces</button>
        <button className='btn btn-primary m-3 text-uppercase' onClick={funcOnclear}>Clear Text</button>
        <button className='btn btn-primary m-3 text-uppercase' onClick={funcOnCopy}>Copy Text</button>
        <h2 className='text-end'> {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Words and {text.length} Characters</h2>
        <h2>{0.003*text.split(" ").length} Minutes Reading</h2>
        <h2 className='text-center container'>Preview Text</h2>
        <p>{text}</p>
    </div>
    </div>
  )
}

