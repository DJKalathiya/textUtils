import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event) => {
        //console.log("ON Change");
        setText(event.target.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("remove extra spaces","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy the text","success");
    }

    const [text, setText] = useState('');   // This is hook 
    //text = "new text"; //wrong way to change the state
    //setText("new text"); // correct way to change the state

    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#13466e':'white',color : props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}> 
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing preivew"}</p>
            </div>
        </>
    )
}
