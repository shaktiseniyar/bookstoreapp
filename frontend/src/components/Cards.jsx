import React from 'react'

export default function Cards({item}) {
  return (
    <div>
      <div className="card w-92 bg-base-100 border shadow-xl mt-2 mb-3 mx-2 dark:bg-slate-900 dark:text-white">
  <figure><img src={item.image} alt="Shoes"/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline p-3">${item.price}</div> 
      <div className="badge badge-outline p-3 hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}
