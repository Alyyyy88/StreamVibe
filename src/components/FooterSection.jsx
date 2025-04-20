import React from 'react'
import FooterItems from './FooterItems';
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import linkedin from '../assets/link.png'

const FooterSection = () => {


  const social = 
  <div>
    <ul className='flex items-center gap-8 '>
      <li className='bg-[#1A1A1A] rounded-md md:p-2'><img src={fb} alt="fb" width={20} height={20} /></li>
      <li className='bg-[#1A1A1A] rounded-md md:p-2'><img width={20} height={20} src={x} alt="x" /></li>
      <li className='bg-[#1A1A1A] rounded-md md:p-2'><img src={linkedin} alt="fb"width={20} height={20} /></li>
      
    </ul>
  </div>


  return (
    <footer className='bg-[#0F0F0F] p-16 grid grid-cols-2 md:grid-cols-6 '>

    <FooterItems title={'Home'} links={[
      {label:'Categories'},
       { label: "Devices" },
       { label: "Pricing" },
       { label: "FAQ" },
    ]} />
    <FooterItems title={'Movies'} links={[
      {label : 'Genres'},
      {label : 'Trending'},
      {label : 'New Release'},
      {label : 'Popular'},
    ]} />
    <FooterItems title={'Shows'} links={[
      {label : 'Genres'},
      {label : 'Trending'},
      {label : 'New Release'},
      {label : 'Popular'},
    ]} />

    <FooterItems title={'Support'} links={[{label:'Contact Us'}]} />
    <FooterItems title={'Subscription'} links={[
      {label : 'plans'},
      {label: 'Features'},
    ]} />  

    <FooterItems title={'Connect With Us '} links={
      [{label:social}]
    } />
      
    
  </footer>
  )
}

export default FooterSection