import React, {useState} from 'react'

export default function TextForm(props) {

    //convert to upper case
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Convert To Upper Case', 'success');
    }

    //convert to lower case
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Convert To Lower Case', 'success');
    }

    //clear text from textarea
    const handleClearClick = () =>{
        setText('');
    }

    //Remove extra space from text
    const handleCopyClick = () =>{
        let text = document.getElementById('textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //Remove extra space from text
    const handleRemoveSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //count words in text area
    const handleCountWords = (str) =>{
        const arr = str.split(' ');
      
        return arr.filter(word => word !== '').length;
    }
    //
    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    //   text = "New text"; //wrong way to change text value
    //   setText("New text"); //Correct Way to set text value
    return (
        <>
        <div style={{color: props.mode==='light'?'black':'white'}}>
            <div className='container' >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea name="" id="textarea" value={text} onChange={handleOnChange} cols="30" rows="10" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} className="form-control"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert Text toUppercase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert Text toLowercase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-2">Clear Text</button>
                <button onClick={handleCopyClick} className="btn btn-primary mx-2">Copy Text</button>
                <button onClick={handleRemoveSpaceClick} className="btn btn-primary mx-2">Remove Extra Space</button>
            </div>
            <div className="container mt-5">
                <h1>Your text summary</h1>
                <p>{handleCountWords(text)} Words and {text.length} Charectors</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 className='mt-3'>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}
