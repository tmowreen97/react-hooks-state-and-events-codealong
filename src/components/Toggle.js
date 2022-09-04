import React, { useState } from "react";

function Toggle() {
  const [toggleBtn, setToggleBtn] = useState(false)
  //When toggleBtn is false, it's OFF.
  //When toggleBtn is true, it's ON.
  function handleClick(){
    setToggleBtn(!toggleBtn)
  }
  const color = toggleBtn ? "red" : "white"
  return <button style={{background : color}} onClick={handleClick}>
    {toggleBtn ? 'ON': 'OFF'}
    </button>;
}

export default Toggle;
