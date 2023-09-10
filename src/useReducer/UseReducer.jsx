import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "TOGGLE":
            return {count: state.count, showText: !state.showText};
        case "RESET":
            return {count: 0, showText: "This is a text"};
        default:
            return state;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    })

  return (
    <div className='d-flex flex-column gap-3'>
        <h1>count clicks: {state.count}</h1>
        <div className='d-flex gap-3'>
            <button
                className='btn btn-dark'
                onClick={() => {
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "TOGGLE"})
                }}
            >
            click here
            </button>

            <button
                className='btn btn-dark'
                onClick={() => {
                    dispatch({type: "RESET"});
                }}
            >
            reset
            </button>
        </div>

        {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default UseReducer;