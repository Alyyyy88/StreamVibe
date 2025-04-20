import React from 'react'
import FormSupport from '../components/FormSupport'
import spImage from '../assets/Support.png';
import FreqAskQ from '../components/FreqAskQ';
import FooterSection from '../components/FooterSection';

const Support = () => {
  return (
    <div className='bg-[#1E1E1E]  flex flex-col     min-h-screen justify-center'>
      <div className=' py-12 px-5 mt-20  md:flex justify-center items-center  md:gap-12 '>
      <img src={spImage} alt="spImage" className='h-auto  object-cover ' />
      <FormSupport />
      </div>
      <FreqAskQ />
      <FooterSection />
      


    </div>
  )
}

export default Support