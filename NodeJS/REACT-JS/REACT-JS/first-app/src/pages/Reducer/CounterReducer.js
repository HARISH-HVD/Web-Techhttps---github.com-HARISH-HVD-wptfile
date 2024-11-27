import { useReducer, useState } from "react";
import Header from "../Header";

export function CounterReducer() {
  const reducer = (state, action) => {
    let num = action.payload;
    switch (action.type) {
      case "fact":
        let fact = 1;
        for (let i = 1; i <= num; i++) {
          fact *= i;
        }
        return { ...state, result: `Factorial of ${num} is ${fact}` };

      case "area":
        const radius = action.payload;
        let area = Math.PI * radius * radius;
        return { ...state, result: `Area of Circle with radius ${radius} is ${area.toFixed(2)}` };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { result: "" });
  const [inputValue, setInputValue] = useState("");

  return (

    <div>
      <h2>Even Odd Reducer</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={() => dispatch({ type: "fact", payload: parseInt(inputValue) })}>
        Calculate Factorial
      </button>
      <button onClick={() => dispatch({ type: "area", payload: parseFloat(inputValue) })}>
        Calculate Circle Area
      </button>
      <div>
        <strong>Result: </strong> {state.result}
      </div>
    </div>
  );
}
