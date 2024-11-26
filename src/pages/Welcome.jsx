import React from 'react'

const Welcome = () => {
    return (
        <div className='bg-slate-900 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10'>
            {/* <Header /> */}
            <div className='flex justify-between'>

                <div className='flex items-center justify-center gap-5'>
                    <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="logo" />
                </div>

                <ul className='hidden lg:flex justify-between items-center text-gray-400 gap-6'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Help</a></li>
                </ul>
                <div className='hidden lg:flex justify-center items-center gap-6'>
                    <a href="/login" className='text-gray-400'>Log in</a>
                    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>join Now</button>
                </div>

                <div className='lg:hidden'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="bar" />
                </div>

            </div>
            {/* <Body /> */}

            <div className='space-y-4 lg:flex flex-row-reverse'>

                <div className="flex items-center justify-center lg:flex-1 lg:h-[400px] relative">
                    {/* First Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2257/2257295.png"
                        alt="Icon 1"
                        className="-rotate-[45deg] h-12 md:h-16 lg:h-20 absolute top-0 left-0"
                    />

                    {/* Second Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/14751/14751764.png"
                        alt="Icon 2"
                        className="-rotate-[15deg] h-16 md:h-20 lg:h-24 absolute top-1/4 left-1/4"
                    />

                    {/* Third Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/14751/14751758.png"
                        alt="Icon 3"
                        className="-rotate-[30deg] h-20 md:h-24 lg:h-28 absolute bottom-0 right-1/4"
                    />

                    {/* Fourth Image */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5608/5608209.png"
                        alt="Icon 4"
                        className="h-16 md:h-20 lg:h-24 absolute bottom-0 right-0"
                    />
                </div>

                <div className='lg:flex-1'>
                    <h1 className='text-5xl font-bold leading-tight text-slate-100'>Manage users, roles, and permissions...</h1>
                    <p className='text-gray-400'>Role-Based Access Control (RBAC) User Interface. This assignment is designed to give you the flexibility to showcase your problem-solving abilities and your personal approach to designing secure and functional UIs.</p>
                    <form action="" className='flex flex-col gap-4 mt-4 md:flex-row'>
                        <input type="email" placeholder='enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400' />
                        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
                    </form>
                    <div className='flex gap-3'>
                        <img src="./assets/Checkmark.svg" alt="" />
                        <p className='text-gray-400'>Role-Based Access Control (RBAC) UI.</p>
                    </div>
                </div>

            </div>

            {/* <Footer /> */}
            <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
                <ul className='flex gap-6 text-gray-400'>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/512/18/18436.png" alt="help" />
                    <div>
                        <p className='font-thin text-slate-200'>Have any questions?</p>
                        <a href="/" className='font-medium text-slate-400'>talk to a specialist</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
