import React from 'react'
import Genres from './Genres';
import MoviesSection from './MoviesSection';
import MovieMustWatch from '../assets/MovieMustWatch';

const MoviesSliders = () => {
  return (
    <div className='mb-10 border-b-gray-500 p-8 flex flex-col gap-8 '>
      <div className='p-4 bg-[#E50000] rounded-md justify-start w-fit'>
      <h1 className=' text-white'>Movies</h1>
      
      </div>
      <hr className='border-b-8-gray-500' />

      <div className='flex flex-col gap-4 justify-items-center'>
        <h3 className='text-white text-3xl font-bold'>Our Genres</h3>
      <Genres />
      </div>

      <div className=''>
        <h3 className='text-white text-3xl font-bold'>
          Upcoming
        </h3>
        <MoviesSection />
      </div>
      <div>
      <h3 className='text-white text-3xl font-bold'>
          Must Watch
        </h3>
        <MovieMustWatch/>
      </div>
    
  </div>
  )
}

export default MoviesSliders