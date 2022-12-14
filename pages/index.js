import React from "react";
import CommonButton from "../src/Components/Button";
import OfferCard from "../src/Components/OfferCard";
import OrderHeader from "../src/Components/OrderHead";
import SidePanel from "../src/Components/SidePanel";
import WalletCard from "../src/Components/WalletCard";

const index = () => {
  const data = [
    {
      id: 2051934,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051935,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Pending",
    },
  ];
  return (
    <>
      <div className="flex">
        <SidePanel />
        <div className="w-[100%] ml-[48px] mt-[36px]">
          <h2 className="text-[24px] font-semibold text-[#000000]">
            Hello, John! &#128075;
          </h2>
          <select className="bg-[#2D9CDB] rounded-lg w-[164px] text-[#F6F5F8] text-[16px] font-medium h-[40px] pl-[16px] focus:outline-none mt-[36px] mb-[24px]">
            <option
              value="Recent Orders"
              className="bg-[#ffffff] text-[#565D5C] rounded-none"
            >
              Recent Orders
            </option>
            <option
              value="Recent Orders"
              className="bg-[#ffffff] text-[#565D5C] rounded-none"
            >
              Recent Orders
            </option>
            <option
              value="Recent Orders"
              className="bg-[#ffffff] text-[#565D5C] rounded-none"
            >
              Recent Orders
            </option>
            <option
              value="Recent Orders"
              className="bg-[#ffffff] text-[#565D5C] rounded-none"
            >
              Recent Orders
            </option>
          </select>
          <OrderHeader data={data} />
          <div className="flex items-center justify-center mt-[22px]">
            <CommonButton
              buttonLink="/dashboard-all-orders"
              buttonStyle="border border-[#2D9CDB] rounded-[5px] px-[56px] py-[2px]"
              buttonFontStyle = "text-[12px] font-semibold text-[#2D9CDB] text-center"
              buttonText="View All"
            />
          </div>
          <div className="flex justify-between w-[96%] mt-[36px]">
            <WalletCard amount = "15.00" mainStyle = "xl:w-[536px] w-[500px] h-[310px] flex flex-col" buttonAlignment = "flex-row mt-[48px] ml-[22px] mb-[22px]"/>
            <OfferCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
