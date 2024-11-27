import { useState } from "react";
import { Result } from "./Result";

export function EvenOdd() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(""); 

  function checkNumber() {
    const parsedNum = parseInt(num); 
    if (isNaN(parsedNum)) {
      alert("Please enter a valid number");
      setResult(""); 
      return;
    }

    if (parsedNum <= 0) {
      alert(parsedNum + " is a Global Number");
      setResult(""); 
    } else {
      setResult(parsedNum % 2 === 0 ? "Even" : "Odd");
    }
  }

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(event.target.value)}
        placeholder="Enter a number"
      />
      <button className="btn btn-lg btn-success" onClick={checkNumber}>
        Even/Odd
      </button>

      {result && <Result result={result} num={num} />}
    </>
  );
}
