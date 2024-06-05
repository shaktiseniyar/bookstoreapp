import React from 'react'
import banner from '../../public/Banner.jpg'

export default function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                    <div className="space-y-10">
                        <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!</span></h1>
                        <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure impedit reiciendis eaque. Molestias iusto, recusandae quasi aspernatur atque voluptatum. Accusantium sapiente ratione praesentium nesciunt dolore?</p>
                    <label className="input input-bordered flex items-center gap-2">

                        <input type="email" className="grow" placeholder="Enter your email to login" />
                    </label>
                    </div>
                    <button className="btn btn-secondary mt-3">Login</button>
                </div>
                <div className='w-full order-1 md:w-1/2'>
                    <img src={banner} className='w-92 h-92' alt=""/>
                </div>
            </div>
        </>
    )
}
