import React from "react";

import { useRef, useState } from "react";

function ExampleRef() {
  const inputRef = useRef();

  const [input, setInput] = useState("");

  function handleInputState(event) {
    inputRef.current = event.target.value;
    setInput(inputRef.current);
  }

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleInputState} />
      <h2>{input}</h2>
    </div>
  );
}

export default ExampleRef;
