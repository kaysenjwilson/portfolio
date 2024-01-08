"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


    

const HeroSection = () => {
  return (
    <section>
        <div className='grid  grid-cols-1 lg:grid-cols-12'>
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    Hello, I'm {""}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Kaysen',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'A Web Developer',
                        1000,
                        'An UI/UX Designer',
                        1000,
                        ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                     
                </h1>
                <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod est eos, amet nemo consequuntur sequi quisquam vero consectetur aut debitis unde expedita ab officia dolores necessitatibus excepturi temporibus quia.
                </p>
                <div>
                    <button className='px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire me</button>
                    <button className='px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center'>
                    <Image
                        src="/images/hero-image2.png"
                        alt=""
                        className='absolute'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection