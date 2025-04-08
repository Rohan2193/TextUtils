import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const clearText = (event) => {
        setText("");
        props.showAlert("text cleared", "success");
    }
    const [text, setText] = useState('Enter text here');
    
  return (
   <> 
 <div className="container" style={{color: props.mode==='dark'?'white':'black' }}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clearText}>ClearText</button>
</div>
<div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.match(/\S+/g) ? text.match(/\S+/g).length : 0} words and {text.length} characters</p>
<p>{0.008 * (text.match(/\S+/g) ? text.match(/\S+/g).length : 0)} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter your text to preview it here "}</p>

</div>
</>
  )
}
