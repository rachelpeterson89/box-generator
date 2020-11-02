import React, { useState } from 'react';

const BoxForm = (props) => {
    
    const [ currentColor, setCurrentColor ] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();

        props.onNewColor( currentColor );
        setCurrentColor("");
    };

    return (

        <form className="header" onSubmit={ handleSubmit }>
            <h1 className="welcome">Welcome to Box Generator</h1>
            <div className="input">
                <input 
                    className="form-control m-2 w-50"
                    type="text"
                    placeholder="Enter color here"
                    onChange = { (e) => setCurrentColor(e.target.value) }
                    value={ currentColor }
                ></input>

                {/* <input 
                    className="form-control m-2 w-50"
                    type="number"
                    placeholder="Enter height here"
                    onChange = { (e) => setCurrentHeight(e.target.value) }
                    value={ currentHeight }
                ></input> */}

                <input type="submit" className="m-2 btn btn-secondary" value="Submit"/>
            </div>
        </form>
    );
}

export default BoxForm;