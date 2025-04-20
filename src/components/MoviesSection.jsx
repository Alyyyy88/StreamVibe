import { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import soon from "../assets/soon.jpg";

const MoviesSection = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
          {
            headers: {
              "x-rapidapi-key":
                "80b07685bcmsh01df7e472b792d4p139e29jsnc8eae90e6cb6",
              "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );
        setMovie(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
            className="bg-[#1A1A1A] rounded-md md:p-4 p-4 flex flex-col"
          >
            <div className="bg-[#1919191] rounded-md md:w-full md:p-4  flex flex-col items-center gap-4  ">
              {m.primaryImage?.url ? (
                <img
                  src={m.primaryImage.url}
                  alt={m.titleText.text}
                  className=" h-60  object-cover mt-2 rounded"
                />
              ) : (
                <img
                  src={soon}
                  alt="SOON"
                  className=" h-60  object-cover mt-2 rounded"
                />
              )}
              <p className="text-white">{m.originalTitleText.text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MoviesSection;
