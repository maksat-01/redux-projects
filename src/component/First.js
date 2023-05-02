import React from 'react';
import Second from "./Second";

const First = ({message}) => {
    return (
        <div>
            <Second message={message}/>
        </div>
    );
};

export default First;