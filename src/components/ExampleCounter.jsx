import React, { useCallback, useEffect, useState } from "react";

function ExampleCounter() {
  const [count, setCount] = useState(0);

  const someFunction = useCallback(() => {
    console.log("This function is recreated on every render");
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    someFunction();
  }, [someFunction]); // Dependency array contains a function

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={someFunction}>Increment</button>
    </div>
  );
}

export default ExampleCounter;
