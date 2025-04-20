import { useEffect, useState } from "react";

const StreamingCard = () => {
  const [stream, setStream] = useState([]);

  useEffect(() => {
    fetch("/streaming.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStream(data);
      });
  }, []);

  return (
    <div className="md:grid md:grid-cols-3 grid place-content-center gap-6 p-2 md:gap-4 md:p-4">
      {stream.map((s) => (
        <div key={s.name} className=" bg-[#E50000] bg-gradient-to-tr from-[#0F0F0F] from-85% p-4 rounded-md flex flex-col justify-between gap-4" >

          <div className="flex items-center gap-2">
          <img src={s.image} alt={s.name} />
          <p className="text-white">{s.name}</p>
          </div>
          <p className="text-[#999999] text-base">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
      ))}
    </div>
  );
};

export default StreamingCard;
