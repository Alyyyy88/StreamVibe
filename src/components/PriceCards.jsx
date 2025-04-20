import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const PriceCards = ({ select }) => {
  const pricePlans = [
    {
      name: "Basic",
      price: "$5.99/month",
      yearly: "$49.99/Year",
      brief:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
      name: "Standard",
      price: "$9.99/month",
      yearly: "$99.9/Year",
      brief:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    },
    {
      name: "Premium",
      price: "$14.99/month",
      yearly: "$149.99/Year",
      brief:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    },
  ];

  return (
    <div className="md:grid md:grid-cols-3 md:p-4 md:gap-8 flex flex-col gap-8">
      {pricePlans.map((card) => (
        <motion.div
          key={card.name}
          layout
          transition={{ duration: 0.4 }}
          className="bg-[#1F1F1F] flex flex-col gap-6 p-8 rounded-2xl place-content-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-lg text-white font-bold">{card.name}</h2>
          <p className="text-[#999999]">{card.brief}</p>

          <div className="flex items-center justify-between min-h-[40px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={select + card.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white font-bold text-2lg"
              >
                {select === "M" ? card.price : card.yearly}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence>
              {select === "Y" && (
                <motion.span
                  key={"save" + card.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-600 text-white text-xs p-4 font-bold rounded-md"
                >
                  Save 20%
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-8 items-center">
            <button className="bg-[#141414] text-white p-2 cursor-pointer rounded-md">
              Start Free Trial
            </button>
            <Link to="/subscription" className="bg-[#E50000] text-white cursor-pointer p-2 rounded-md">
              Choose Plan
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PriceCards;
