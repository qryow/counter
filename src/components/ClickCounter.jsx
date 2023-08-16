import React from 'react'
import { useSelector } from 'react-redux'

const ClickCounter = () => {
  const count = useSelector(state => state.counter.counter)

  return (
    <div>
      <h1 className='count'>{count}</h1>
    </div>
  )
}

export default ClickCounter