import Faqs from "./Faqs";

const FreqAskQ = () => {

  return (
    <div className="p-6 mt-20 mb-40 ">
      <div className="md:flex md:flex-row md:justify-between md:items-center m flex flex-col  gap-4 ">
        <div className="flex flex-col gap-4">
          <h1 className="md:text-2xl text-white font-bold">Frequently Asked Questions</h1>
          <p className="md:text-base text-xs text-[#999999]">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button  className=" md:p-4 p-2  cursor-pointer text-xs rounded-md bg-[#E50000] text-white font-[600]">Ask a Question</button>
      </div>
      <Faqs/>
    </div>
  );
};

export default FreqAskQ;
