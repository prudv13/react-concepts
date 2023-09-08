import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const RQSuperHeroes = () => {
    const {isLoading, data, isError, error} = useQuery('super-heroes', () => {
        return axios.get("http://localhost:4000/superheroes")
    });

    if(isLoading){
        return <h2 className='my-3'>Loading...</h2>
    }

    if(isError){
        return <h2 className='my-3 text-danger'>{error.message}</h2>
    }

  return (
    <div>
        <h2 className='my-3'>Super Heroes</h2>
        {
            data?.data.map((hero) => (
                <div className='text-center' key={hero.id}>
                    <span>Hero: {hero.name}</span>
                    <p>Alterego: {hero.alterego}</p>
                </div>
            ))
        }
    </div>
  )
}

export default RQSuperHeroes;