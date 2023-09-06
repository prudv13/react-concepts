import React, { useEffect, useState } from 'react'

const UseEffect01 = () => {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        console.log("use effect");
    }, []);

    setInterval(() => {
        setTimer(timer+1)
    }, 5000);
  return (
    <div>useEffect() {console.log("component loaded")} {`Timer: ${timer}`}</div>
  )
}

export default UseEffect01;