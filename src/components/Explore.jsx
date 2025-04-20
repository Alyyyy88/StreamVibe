import Genres from "./Genres"
const Explore = () => {
  return (
    <div className="">
      <div className="mb-20 p-4 gap-2 flex  flex-col ">
        <h1 className="md:text-2xl text-xl text-white font-bold">Explore our Wide variety of Categories</h1>
        <p className="text-[#999999] md:text-base text-sm">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
      </div>
      <Genres />
    </div>
  )
}

export default Explore