import playIcon from '../assets/Playicon.png'
const AboutUs = () => {
  return (
    <div className="p-4 text-center flex flex-col  items-center justify-center gap-4">
      <h1 className="text-white text-5xl">The Best Streaming Experience</h1>
      <p className="text-[#999999] text-sm">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
        enjoy a wide variety of <br /> content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists, so you can easily find the content you want to <br /> watch.
      </p>
      <div className='flex gap-4 p-4 bg-[#E50000] rounded-md cursor-pointer mt-4'>
        <img src={playIcon} alt="playIcon" />
        <p className='text-white font-bold'>
          Start Watching Now
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
