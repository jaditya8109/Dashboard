import React from 'react';

const MainDown = () => {
  return (
    <>
    <h2 className='text-2xl text-purple-400 font-semibold mt-4'>Explore More</h2>
    <div className='flex flex-col md:flex-row sm:flex-row gap-16 m-auto my-4'>
    <div className='w-60 p-4 flex flex-row text-white rounded-md bg-gradient-to-tr from-purple-800 to-violet-600 shadow-lg'>
        <div>
            <h2 className='text-2xl font-semibold'>Enroll</h2>
            <p className='text-gray-200'>completely free to enroll. You will put an effort of 4 to 5 hours per week</p>
            <p className='text-pink-400 text-2xl'>$0</p>
        </div>
        <div>
            <img src="/enroll.png" alt='logo'/>
        </div>
    </div>

    <div className='w-60 p-4 d-lg-none flex flex-row text-white rounded-md bg-gradient-to-tr from-purple-800 to-violet-600 shadow-lg'>
        <div>
            <h2 className='text-2xl font-semibold'>Investment</h2>
            <p className='text-gray-200'>monetary investment to buy your domain name, website hosting, etc.</p>
            <p className='text-pink-400 text-2xl'>$0</p>
        </div>
        <div>
            <img src="/invest.png" alt='logo'/>
        </div>
    </div>

    <div className='w-60 p-4 d-lg-none flex flex-row text-white rounded-md bg-gradient-to-tr from-purple-800 to-violet-600 shadow-lg'>
        <div>
            <h2 className='text-2xl font-semibold'>Refer</h2>
            <p className='text-gray-200'>You will get USD $50 for every referral who completes milestones.</p>
            <p className='text-pink-400 text-2xl'>$50</p>
        </div>
        <div>
            <img src="/refer.png" alt='logo'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default MainDown;