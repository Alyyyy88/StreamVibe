import React from 'react'
import Background from '../components/Background'
import AboutUs from '../components/AboutUs'
import Explore from '../components/Explore'
import Streaming from '../components/Streaming'
import FreqAskQ from '../components/FreqAskQ'
import Plans from '../components/Plans'
import FooterSection from '../components/FooterSection'

const Homepage = () => {
  return (
    <div className='bg-[#1E1E1E] min-h-screen   flex flex-col'>
   <Background />
   <AboutUs />
   <Explore />
   <Streaming />
   <FreqAskQ />
   <Plans />
   <FooterSection />
  </div>
  )
}

export default Homepage