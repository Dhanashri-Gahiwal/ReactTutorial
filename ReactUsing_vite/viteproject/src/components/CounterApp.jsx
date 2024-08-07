import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(1);

    const incrementCount = () =>{
        setCount(count+factor)
    }

    const decrementCount = () =>{
        setCount(count-factor)
    }

    const incrementFactor = () =>{
        setFactor(factor+1)
    }

    const decrementFactor = () =>{
        setFactor(factor-1)
    }
  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
      <div>
        <h1>Factor : {factor}</h1>
        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
      </div>
    </>
  );
};

export default CounterApp;
