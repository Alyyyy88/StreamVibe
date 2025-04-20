import logo from '../../assets/Vector.png';

const NavLogo = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
    <img src={logo} alt="logo" />
    <p className='text-lg text-white font-bold'>StreamME</p>
    </div>
  )
}

export default NavLogo