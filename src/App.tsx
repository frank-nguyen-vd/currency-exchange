import React, { useState } from "react";
import "./App.css";

function Button(props: any) 
{
    const handleClick = () => props.onClickFunc(props.increment);
    return <button onClick={handleClick }> +{props.increment} </button>;
}

function Display(props: any) {
    return <div>{props.message}</div>;
}

function App() {
    // eslint-disable-next-line
    const [counter, setCounter] = useState(0);
    const incCounter = (val: number) => setCounter(counter + val);

    return (
        <div>
            <Button onClickFunc={incCounter} increment={1} />
            <Button onClickFunc={incCounter} increment={5} />
            <Button onClickFunc={incCounter} increment={10} />
            <Button onClickFunc={incCounter} increment={100} />
            <Display message={counter} />
        </div>
    );
}

export default App;
