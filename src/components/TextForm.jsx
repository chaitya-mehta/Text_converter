import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick  = ()=>{
        console.log("Uppercase button clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Uppercase is applied", "success");
    }
    const handleLowClick  = ()=>{
        console.log("Lowercase button clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Lowercase is applied", "success");
    }
    const handleClearClick  = ()=>{
        console.log("Clear button clicked");
        let newtext = "";
        setText(newtext);
        props.showalert("Textbox is cleared", "success");
    }
    const handleCopyClick  = ()=>{
        console.log("Copy button clicked");
        navigator.clipboard.writeText(text);
        props.showalert("Text copied", "success");
    }
    const handleRmExSpClick  = ()=>{
        console.log("Remove Extra Space button clicked");
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra Space removed", "success");
    }
    const handleOnChange  = (event)=>{
        console.log("Query is changed");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color: props.mode==="light"?"#1b1818":"#F9FAFB"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#1b1818":"#F9FAFB", color: props.mode==="light"?"#1b1818":"#F9FAFB"}}></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-outline-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleRmExSpClick}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="light"?"#1b1818":"#F9FAFB"}}>
                <h2>
                    Your text summary
                </h2>
                <p>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
                </p>
                <p>
                    {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take to read.
                </p>
                <h2>Preview</h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
 TextForm.propTypes = {
     heading: propTypes.string.isRequired
 }