import React, { useState } from "react";
import "./App.css";

function Button(props : any) {
    return (
        <button onClick={ props.onClickFunc }>
            + 1
        </button>
    );
}

function Display(props : any) {
    return (
        <div>{ props.message }</div>
    )
}

function App() {
    // eslint-disable-next-line
    const [counter, setCounter] = useState(0);
    const incCounter = () => setCounter(counter + 1);

    return (
        <div>            
            <Button onClickFunc={ incCounter }/>
            <Display message={ counter } />
        </div>
    );
}

export default App;
