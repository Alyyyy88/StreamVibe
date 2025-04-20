const PlansButtons = ({ select, setSelect }) => {
  return (
    <div className="flex gap-4 bg-[#0F0F0F] p-2 rounded-md text-sm">
      <button
        onClick={() => setSelect("M")}
        className={`px-4 rounded-md py-2 transition-all duration-200 cursor-pointer ${
          select === "M"
            ? "bg-[#1A1A1A] text-white"
            : "hover:bg-gray-800 text-[#BFBFBF]"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => setSelect("Y")}
        className={`px-4 rounded-md py-2 transition-all duration-200 cursor-pointer ${
          select === "Y"
            ? "bg-[#1A1A1A] text-white"
            : "hover:bg-gray-800 text-[#BFBFBF]"
        }`}
      >
        Yearly
      </button>
    </div>
  );
};

export default PlansButtons;
