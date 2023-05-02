import React from 'react';
import Third from "./Third";

const Second = ({message}) => {
    return (
        <div>
            <Third message={message}/>
        </div>
    );
};

export default Second;