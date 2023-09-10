import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect02 = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => setData(response.data[0]))
        console.log("API Called")
    }, []);
  return (
    <div>
        <h4 className='mb-4'>API Response</h4>
        <p>postId : {data.id}</p>
        <p>name : {data.name}</p>
        <p>email : {data.email}</p>
        <p>body : {data.body}</p>
    </div>
  )
}

export default UseEffect02;