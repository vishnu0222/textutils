import React, {useState} from 'react'



export default function Textform(props) {
    const {showalert,heading}=props
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        showalert('Converted to upper case','success')
    }
    const handleloclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        showalert('Converted to Lower case','success')
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const handlecleartext=(event)=>{
        setText("")
        showalert('Cleared text','success')
    }
    const mystyle=()=>{
        if(props.mode=='dark') {
            
        }
    }
    const [text, setText]= useState('')
  return (
        <>
        <div className='container' style={{color:props.mode=='dark'?'white':'black'}}>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="3"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleupclick}>convert to upper case</button>
            <button className='btn btn-primary' onClick={handleloclick}>convert to Lower case</button>
            <button className='btn btn-primary mx-3' onClick={handlecleartext}>Clear text</button>
        </div>
        <div className="container my-3 " style={{color:props.mode=='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <h3>{text.split(" ").length} words and {text.length} characters</h3>
        </div>
        </>
  )
}
