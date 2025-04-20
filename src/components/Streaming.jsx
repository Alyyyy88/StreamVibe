import StreamingCard from "./StreamingCard";

const Streaming = () => {





  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-white md:text-2xl text-xl font-bold">We Provide you streaming experience across various devices.</h1>
      <p className="text-[#999999] md:text-base text-sm">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>
      <StreamingCard />
    </div>
  );
};

export default Streaming;
