import { useEffect, useState } from "react"
import arrow from '../assets/genres/arrow.png'

const Genres = () => {

  const [genres , setGenres] = useState([]);

  useEffect(()=>{
    fetch('/genres.json').
    then((res)=>{
      return res.json();
    }).then((data)=>{
      setGenres(data);
    })
  },[]);
  

  return (
    <div className=" md:flex md:items-center md:justify-evenly grid gap-12   place-content-center  w-full   mb-30" >
    {
      genres.map((genre)=>(
        <div key={genre.name} className=" p-5 flex bg-[#1A1A1A] flex-col  gap-4 rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] ">
          <img src={genre.image} alt={genre.name} className="object-fill" />
          <div className="flex justify-between items-center">
          <p className="text-white font-bold">{genre.name}</p>
          <img src={arrow} alt="arrow" className="cursor-pointer" />
          </div>
        </div>
      ))
    }

    </div>
  )
}

export default Genres