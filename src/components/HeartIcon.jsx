import React from 'react'

const HeartIcon = ({children}) => {
  return (
    <div className='2xl:w-[15rem] 2xl:h-[15rem] sm:w-[8rem] sm:h-[6rem] flex flex-col items-center 2xl:gap-3'>
        <img src="./images/heartVector.svg" alt="heart vector" />
        <h3>{children}</h3>
    </div>
  )
}

export default HeartIcon