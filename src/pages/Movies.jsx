import React from 'react'

import MoviesSection from '../components/MoviesSection';
import MoviesHome from '../components/MoviesHome';
import MoviesSliders from '../components/MoviesSliders';
import { Footer } from 'antd/es/layout/layout';
import FooterSection from '../components/FooterSection';

const Movies = () => {
  
  
  return (
    <div className='bg-[#1E1E1E]   flex flex-col   min-h-screen'>
      <MoviesHome/>
      <MoviesSliders />
      <FooterSection />
      
    </div>
    
  )
}

export default Movies