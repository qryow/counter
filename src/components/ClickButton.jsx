import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, clear } from '../store/counterSlice'

const ClickButton = () => {

  const dispatch = useDispatch();

  return (
    <>
      <a className='plus' onClick={() => dispatch(increment())} href="#">
          <span className='plus__span'>+</span>
          <div class="liquid"></div>
      </a>
      <a className='clear' onClick={() => dispatch(clear())} href="#">
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        Clear
      </a>
    </>
  )
}

export default ClickButton