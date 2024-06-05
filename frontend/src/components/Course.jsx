import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from "react-router-dom"

export default function Course() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
             We're delighted to have you <span className='text-pink-500'>here! :)</span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea ipsa libero cupiditate fugit soluta accusamus, in a qui autem earum, eum, quia itaque necessitatibus eaque tempore. Eligendi doloremque aperiam, error recusandae laborum omnis animi, sit nobis eius eveniet eaque officia. Voluptatibus iure deleniti eos voluptatem amet, facere rerum provident?</p>
          <Link to="/"><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item)=>{
             return <Cards item={item} key={item.id}/>
          })}
          
      </div>
    </div>
  )
}
