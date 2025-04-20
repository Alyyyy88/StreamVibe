import { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import soon from "../assets/soon.jpg";

const MovieMustWatch = () => {
  const [movie, setMovie] = useState([]);

  const imdbIds = [
    'tt0144084', // American Psycho
    'tt0110912', // Pulp Fiction
    'tt0114369', // Se7en
    'tt0111161', // The Shawshank Redemption
    'tt0468569', // The Dark Knight
    'tt0137523', // Fight Club
    'tt1375666', // Inception
    'tt0068646', // The Godfather
    'tt0816692', // Interstellar
    'tt6751668'  // Parasite
  ];

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
     <div className="">
          <Splide
            className="mt-20"
            options={{
              perPage: 4,
              rewind: false,
              gap: "1rem",
              pagination: true,
              arrows: true,
              breakpoints: {
                768: {
                  perPage: 2,
                  pagination: false, // on screens ≤ 768px, show 2 slides
                },
                480: {
                  perPage: 1,
                  pagination: false, // optional: on smaller screens ≤ 480px, show 1 slide
                },
              },
            }}
            aria-label="My Favorite Movies"
          >
            {movie.map((m) => (
              <SplideSlide
                key={m.id}
                className="bg-[#1A1A1A] rounded-md md:px-4 p-2 flex flex-col"
              >
                <div className="bg-[#1919191] rounded-md md:w-full md:p-4  flex flex-col items-center gap-4  ">
                  {m.primaryImage?.url ? (
                    <img
                      src={m.primaryImage.url}
                      alt={m.titleText.text}
                      className=" h-auto object-cover mt-2 rounded-2xl"
                    />
                  ) : (
                    <img
                      src={soon}
                      alt="SOON"
                      className=" h-60  object-cover mt-2 rounded"
                    />
                  )}
                  <p className="text-white font-bold">{m.originalTitleText.text}</p>
                  <p className="text-white font-bold">{m.releaseYear.year}</p>
                  
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
  )
}

export default MovieMustWatch