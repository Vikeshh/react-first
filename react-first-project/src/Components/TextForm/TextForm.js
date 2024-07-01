import React, {useState} from 'react'
import "./TextForm.css"
export default function TextForm(){
    let [text, setText] = useState('')
    const handleUpClick = ()=>{
        console.log('clicked')
        let newTextUp = text.toUpperCase()
        setText(newTextUp)
    }
    const handleOnChange = (event)=>{
        console.log('changed')
       
        setText(event.target.value)
    }
    const handleDownClick = () =>{
        let newTextUp = text.toLowerCase()
        setText(newTextUp)
    }
    const clearButton = (event)=>{
        console.log('cleared')
        setText('')
    }
    
   return ( <>
<div className='content-wrapper'>
   <div className='container mb-3'>
    <label htmlFor="textArea" className="form-label my-3">Enter the Text</label>
    <input type="textArea" className="form-control" id="textArea" value={text} onChange={handleOnChange} />
  </div>
  <div className="button-wrapper">
  <button className="btn btn-primary my-btn" onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-primary my-btn" onClick={handleDownClick}>Convert to Lower Case</button>
  <button className="btn btn-primary my-btn" onClick={clearButton}>Clear</button>
  </div>
  </div>
</>)
}