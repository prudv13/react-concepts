import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => setData(res.data))
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for(let i = 0; i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("This was Computed");
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <div>
        <h2>Longest Comment : </h2>
        <h4>{getLongestName}</h4>
        <button
            className='btn btn-dark my-3'
            onClick={() => setToggle(!toggle)}
        >Toggle</button>
        {toggle && <h5>toggle</h5>}
    </div>
  )
}

export default UseMemo;