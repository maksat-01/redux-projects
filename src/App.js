import './App.css';
import {useState} from "react";
import First from "./component/First";
import {useDispatch, useSelector} from "react-redux";


// useSelector
// useDispatch

function App() {
    const [message, setMessage] = useState("Welcome to Redux")
    const dispatch = useDispatch()
    const {money} = useSelector((state) => state)

    const getMoney = (som ) => {
        dispatch({type: "GET_MONEY", payload: som})
    }

    return (
        <div className="App">
            <First message={message}/>
            <button onClick={() => dispatch({type: "ADD_MONEY", payload: 100})}>add money</button>
            <button onClick={() => getMoney(300)}>get money</button>
            <h1>{money}</h1>
        </div>
    );
}

export default App;
