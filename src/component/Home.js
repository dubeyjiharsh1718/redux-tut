import React from 'react';


export default function Home() {
  return (
    <div>
        <h1>Ho component</h1>
        <div className='cart-wrapper shadow p-3 mb-5 bg-white rounded'>
         
        <div className='img-wrapper item'>
            <img src='https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80' alt='img' />
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button className='btn btn-primary'>Add to cart</button>
        </div>
        </div>
    </div>
  )
}
