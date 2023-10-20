import React, { useEffect, useState } from 'react';
import './Loading.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Loadingg = () => {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate('/login', {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])


    return (
        <main className='flex justify-center items-center min-h-screen flex-col'>
            <h1 className='text-2xl py-10'>Redirecting to you in {count} seconds</h1>
            <svg className="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#5ebd3e" />
                        <stop offset="33%" stopColor="#ffb900" />
                        <stop offset="67%" stopColor="#f78200" />
                        <stop offset="100%" stopColor="#e23838" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stopColor="#e23838" />
                        <stop offset="33%" stopColor="#973999" />
                        <stop offset="67%" stopColor="#009cdf" />
                        <stop offset="100%" stopColor="#5ebd3e" />
                    </linearGradient>
                </defs>
                <g fill="none" strokeLinecap="round" strokeWidth="16">
                    <g className="ip__track" stroke="#ddd">
                        <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                        <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                    </g>
                    <g strokeDasharray="180 656">
                        <path className="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                        <path className="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                    </g>
                </g>
            </svg>
        </main>
    );
};

export default Loadingg;

