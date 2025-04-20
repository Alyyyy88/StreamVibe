import { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import play from '../assets/Playicon.png';
import add from '../assets/Film/Button.png'
import like from '../assets/Film/Button-1.png'
import sound from '../assets/Film/Button-2.png'
const MoviesHome = () => {
  const [movie, setMovie] = useState([]);
  const imdbIds = [
    'tt4154796',
    'tt4154756',
    'tt0848228',
    'tt2395427'
  ]

  useEffect(() => {
    const fetchMovie = async () => {

      const fetchMoveis = [];

      for (const id of imdbIds) {
        try {
          const response = await axios.get(
            `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
            {
              headers: {
                "x-rapidapi-key": "80b07685bcmsh01df7e472b792d4p139e29jsnc8eae90e6cb6",
                "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
              },
            }
          );
          fetchMoveis.push(response.data.results);
        } catch (error) {
          console.error(`Error fetching movie with ID ${id}:`, error);
        }
      }

      setMovie(fetchMoveis);
    };

    fetchMovie();
  }, []);

  return (
   <div className="md:flex md:items-center px-5 py-20 md:px-40 md:py-20 mt-10">

<Splide
        className=""
        options={{
          perPage: 1,
          rewind: false,
          gap: "1rem",
          pagination: true,
          arrows: true,
          breakpoints: {
            768: {
              perPage: 2,
              pagination: false, 
            },
            480: {
              perPage: 1,
              pagination: false, 
            },
          },
        }}
        aria-label="My Favorite Movies"
      >
        {
          movie.map((m)=>(
            <SplideSlide key={m.id} className=" md:w-[1280px] md:h-[709px] w-full h-auto  flex flex-col justify-center items-center ">
              {/* Text Container - positioned above the image */}
            <div className="absolute flex flex-col gap-4 top-75 left-3 md:top-115 md:left-90 w-full z-10 p-4">

              <div className="flex gap-4 text-center">
              <p className="text-white text-xl md:text-4xl font-bold drop-shadow-lg">
                {m.originalTitleText.text}
              </p>
              <p className="text-white md:text-4xl text-xl font-bold" >
               ({m.releaseYear.year})
              </p>
              </div>
             
              <div className="md:flex flex-col flex md:flex-row md:p-4 p-2 gap-4" >

                <div className=" cursor-pointer md:p-4 p-2 items-center justify-center md:justis  bg-[#E50000] rounded-md text-white flex">
                  <img src={play} alt="play" />
                  <p>Play Now</p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img className="cursor-pointer" src={add} alt="" />
                  <img className="cursor-pointer" src={like} alt="" />
                  <img className="cursor-pointer" src={sound} alt="" />
                </div>
              </div>
            </div>
            
            {/* Image Container */}
            <div className=" w-full  h-full">
              {m.primaryImage?.url && (
                <img 
                  src={m.primaryImage.url} 
                  alt={m.originalTitleText.text} 
                  className="rounded-2xl h-full w-full object-cover" 
                />
              )}
            </div>

            </SplideSlide>

          ))
        }
        </Splide>
   </div>
  );
};

export default MoviesHome;
