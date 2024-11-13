import React from 'react'

const HeartIcon = ({children}) => {
  return (
    <div className='w-[15rem] h-[15rem] flex flex-col items-center gap-3'>
        <img src="./images/heartVector.svg" alt="heart vector" />
        <h3>{children}</h3>
    </div>
  )
}

export default HeartIcon