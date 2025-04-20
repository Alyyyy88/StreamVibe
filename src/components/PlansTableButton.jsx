
const PlansTableButton = ({select , setSelect}) => {
  return (
    
    <div className="flex gap-4 bg-[#0F0F0F] w-96 items-center justify-center  p-4 rounded-md text-sm md:hidden">

    <button onClick={() => setSelect('Basic')}
      className={`px-4 rounded-md py-2 transition-all duration-200 cursor-pointer ${
        select === 'Basic'
          ? "bg-[#1A1A1A] text-white"
          : "hover:bg-gray-800 text-[#BFBFBF]"
      }`}>Basic</button>

    <button onClick={() => setSelect('Standard')}
      className={`px-4 rounded-md py-2 transition-all duration-200 cursor-pointer ${
        select === 'Standard'
          ? "bg-[#1A1A1A] text-white"
          : "hover:bg-gray-800 text-[#BFBFBF]"
      }`}>Standard</button>

    <button onClick={() => setSelect('Premium')}
      className={`px-4 rounded-md py-2 transition-all duration-200 cursor-pointer ${
        select === 'Premium'
          ? "bg-[#1A1A1A] text-white"
          : "hover:bg-gray-800 text-[#BFBFBF]"
      }`}>Premuim</button>
  </div>
  )
}

export default PlansTableButton