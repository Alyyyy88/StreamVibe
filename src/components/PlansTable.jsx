import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import PlansTableButton from "./PlansTableButton";

const TABLE_HEAD = ["Features", "Basic", "Standard", "Premium"];

const PLANS = [
  {
    name: "Basic",
    price: "$5.99/month",
    content: "Limited selection of popular titles",
    devices: "Watch on 1 device at a time",
    freeTrial: "7-day free trial",
    cancelAnytime: true,
    hdr: false,
    dolbyAtmos: false,
    adFree: false,
    offlineViewing: false,
    familySharing: false,
  },
  {
    name: "Standard",
    price: "$9.99/month",
    content: "Access to most titles including new releases",
    devices: "Watch on up to 2 devices",
    freeTrial: "14-day free trial",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: false,
    adFree: true,
    offlineViewing: true,
    familySharing: false,
  },
  {
    name: "Premium",
    price: "$14.99/month",
    content: "Full access to all titles including exclusives",
    devices: "Watch on up to 4 devices",
    freeTrial: "30-day free trial",
    cancelAnytime: true,
    hdr: true,
    dolbyAtmos: true,
    adFree: true,
    offlineViewing: true,
    familySharing: true,
  },
];

const FEATURES = [
  { label: "Price", key: "price" },
  { label: "Content", key: "content" },
  { label: "Devices", key: "devices" },
  { label: "Free Trial", key: "freeTrial" },
  { label: "Cancel Anytime", key: "cancelAnytime" },
  { label: "HDR", key: "hdr" },
  { label: "Dolby Atmos", key: "dolbyAtmos" },
  { label: "Ad-Free", key: "adFree" },
  { label: "Offline Viewing", key: "offlineViewing" },
  { label: "Family Sharing", key: "familySharing" },
];

export function PlansTable() {
  const [select, setSelect] = useState("Basic");

  return (
    <>
      {" "}
      <Card className="hidden md:flex h-full  overflow-x-auto bg-[#1E1E1E] p-4 mb-20">
        <table className="w-full min-w-max table-auto text-left text-white">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-[#0F0F0F] p-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-bold opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FEATURES.map(({ label, key }, index) => (
              <tr key={label} className="even:bg-[#181818] odd:bg-[#1E1E1E]">
                <td className="p-4 font-medium text-white border-b border-gray-700">
                  {label}
                </td>
                {PLANS.map((plan) => (
                  <td
                    key={plan.name + key}
                    className="p-4 text-white border-b border-gray-700"
                  >
                    {typeof plan[key] === "boolean" ? (
                      plan[key] ? (
                        <p className="text-[#999999]">YES</p>
                      ) : (
                        <p className="text-[#999999]">NO</p>
                      )
                    ) : (
                      plan[key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex flex-col mb-100 gap-8 justify-center items-center md:hidden">
        <PlansTableButton select={select} setSelect={setSelect} />
        <div className="bg-[#0F0F0F] p-4 rounded-md ">
          {
            
            PLANS.map((p)=>(
              select === p.name ?(
                <div key={p.name} className="grid grid-cols-2 gap-8 w-86 p-4">
                  <div>
                    <p className="text-[#999999] text-sm font-bold">Price</p>
                    <p className="text-white">{p.price}</p>
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm font-bold">Free Trail</p>
                    <p className="text-white">{p.freeTrial}</p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#999999] text-sm font-bold">Content</p>
                    <p className="text-white">{p.content}</p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-[#999999] text-sm font-bold">Devices</p>
                    <p className="text-white">{p.devices}</p>
                  </div>

                  <div>
                    <p className="text-[#999999] text-sm font-bold">Cancel AnyTime</p>
                    <p className="text-white">{p.cancelAnytime ? 'YES' : 'NO'}</p>
                  </div>

                  <div>
                    <p className="text-[#999999] text-sm font-bold">HDR</p>
                    <p className="text-white">{p.hdr ?"YES":"NO"}</p>
                  </div>

                  <div>
                    <p className="text-[#999999] text-sm font-bold">Dolby Atoms</p>
                    <p className="text-white">{p.dolbyAtmos ? "YES" : "NO"}</p>
                  </div>

                  <div>
                    <p className="text-[#999999] text-sm font-bold">AD-Free</p>
                    <p className="text-white">{p.adFree ? "YES":"NO"}</p>
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm font-bold">Offline Viewing</p>
                    <p className="text-white">{p.offlineViewing ? "YES":"No"}</p>
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm font-bold">Family Sharing</p>
                    <p className="text-white">{p.familySharing ? "Yes" : "No"}</p>
                  </div>


                </div>
              ):null
             
             
            ))
          }


        </div>
      </div>
    </>
  );
}
