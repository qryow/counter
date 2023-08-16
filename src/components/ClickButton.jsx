import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, clear } from '../store/counterSlice'

const ClickButton = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button className='btn' onClick={() => dispatch(increment())}>+</button>
      <br />
      <button className='btn btn2' onClick={() => dispatch(clear())}>Clear</button>
    </div>
  )
}

export default ClickButton