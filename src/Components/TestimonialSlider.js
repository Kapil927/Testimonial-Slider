import React from 'react'
import reviews from '../data'
import Header from './Header'
import Card from './Card'

const TestimonialSlider = () => {

  return (
    <div className=' grid md:place-items-center h-[100vh] bg-slate-200'>
    <div className=' mt-14 md:mt-0 flex flex-col items-center md:grid md:place-items-center'>
      <Header/>
      <Card data = {reviews}/>
    </div>
    </div>
  )
}

export default TestimonialSlider
