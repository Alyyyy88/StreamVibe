import search from '../../assets/search.png';
import notif from '../../assets/notif.png';
const NavItems = () => {
  return (
    <div className='md:flex md:gap-6 hidden'>
    <img src={search} alt="search" 
    className='w-6 h-6'
  />
    <img src={notif} alt="notification" 
    className='w-6 h-6'
    />

  </div>
  )
}

export default NavItems