import PlansButtons from "./PlansButtons";
import PriceCards from "./PriceCards";
import { useState } from "react";


const Plans = () => {
  const [select , setSelect] = useState('M');

  return (
    <div className="flex flex-col gap-8 mb-40">
      <div className="flex md:flex-row  flex-col gap-4 items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <h1 className="md:text-2xl text-xl text-white font-bold">
            Choose the plan that's right for you
          </h1>
          <p className="md:text-base text-sm text-[#999999]">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div>
          <PlansButtons select={select} setSelect={setSelect} />
        </div>
      </div>
      <div>
        <PriceCards select={select} />
      </div>
    </div>
  );
};

export default Plans;
