import React, { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
    case 'increment':
        return {count: state.count + 1}
    case 'decrement':
        return {count: state.count - 1}
    }
}

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrease = ()=>{
    dispatch({type:'increment'})
  }
  const handleDecrease = ()=>{
    dispatch({type:'decrement'})
  }
  
  return (
    <>
      <button onClick={handleIncrease}>+</button>
      {state.count}
      <button onClick={handleDecrease}>-</button>
    </>
  );
}
