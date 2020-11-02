import React, { useState } from 'react';

const BoxDisplay = (props) => {

    return (
        <div className="d-flex flex-wrap text-light col-8 mx-auto">

            { props.color.map((newColor, i) =>
                <div
                    className="m-2 rounded"
                    key={i} 
                    style={{ backgroundColor: newColor, height: "200px", width: "200px" }}
                ></div>
            )}

        </div>
    );
}

export default BoxDisplay;