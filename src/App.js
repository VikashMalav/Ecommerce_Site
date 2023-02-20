import { Increament,Decreament } from './features/Counter/CounterSlice'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function App() {

    const count=useSelector((state)=>state.counter.value
    )
    const dispatch=useDispatch()
  return (
    <div>
        
        <button onClick={()=>dispatch(Increament())}>Increament</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(Decreament())}>Decreament</button>
    </div>
  )
}

export default App