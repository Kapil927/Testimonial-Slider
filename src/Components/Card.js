import React, { useState } from 'react'
import { FaQuoteLeft,FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Card(props) {

  const[index, setIndex] = useState(0);
  function leftHandler(){
    setIndex((preIndex)=> preIndex===0 ? props.data.length-1 :preIndex-1)
  }
  function RightHandler(){
    setIndex((preIndex)=> preIndex===props.data.length-1 ? 0 :preIndex+1)
  }
  function surprizeHandler(){
    setIndex(Math.floor(Math.random()*props.data.length));
  }
  return (
    <div className=' justify-between bg-slate-50 hover:shadow-lg transition-all duration-200 w-[94vw] md:w-[500px] min-h-[55%] md:min-h-[60vh] rounded-lg relative flex flex-col items-center mt-12 md:mt-5 py-10 px-5'>
      <div className='absolute w-[5rem] aspect-square bg-purple-400 rounded-full left-7 -top-[3.7rem]'/>
      <img alt={"img"} loading="eager" src={props.data[index].image} className={  ' w-[5rem] rounded-full absolute left-6 -top-14'}></img>
      <div className='grid place-items-center'>
      <h1 className='font-bold text-lg'>{props.data[index].name}</h1>
      <p className='text-violet-300 uppercase text-xs'>{props.data[index].job}</p>
      </div>
      <div className='grid place-items-center'>
      <FaQuoteLeft className='text-violet-300'/>
      <p className=' my-1 text-center'>{props.data[index].text}</p>
      <FaQuoteRight className='text-violet-300'/>
      </div>

      <div className='grid place-items-center'>
        <div className='flex gap-2' >
        <button onClick={leftHandler}><FaAngleLeft className=' text-2xl md:text-base'/></button> 
        <button onClick={RightHandler}><FaAngleRight className=' text-2xl md:text-base'/></button>
        </div>
        <button onClick={surprizeHandler} className=' mt-2 bg-purple-400 text-white text-sm font-semibold py-[0.30rem] px-7 rounded-lg'>Surprize Me</button>
      </div>
    </div>
  )
}

export default Card
