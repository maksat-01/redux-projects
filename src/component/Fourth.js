import React from 'react';
import {useSelector} from "react-redux";

const Fourth = ({message}) => {

    const age = useSelector(state => state.age)

    return (
        <div>
            <h5>{age}</h5>
            <h3>{message}</h3>
        </div>
    );
};

export default Fourth;