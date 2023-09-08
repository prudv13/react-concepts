import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/superheroes")
        .then((res) => {
            setData(res.data);
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2 className='my-3'>Loading...</h2>
    }

  return (
    <div>
        <h2 className='my-3'>Super Heroes</h2>
        {
            data.map((hero) => (
                <div className='text-center' key={hero.id}>
                    <span>Hero: {hero.name}</span>
                    <p>Alterego: {hero.alterego}</p>
                </div>
            ))
        }
    </div>
  )
}

export default SuperHeroes;