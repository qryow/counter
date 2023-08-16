import React from 'react'
import ClickButton from './ClickButton'
import ClickCounter from './ClickCounter'

const Counter = () => {
  return (
    <div className='counter__wrapper'>
      <div className='counter'>
        <ClickCounter />
        <br />
        <ClickButton />
      </div>
    </div>
  )
}

export default Counter