import React from "react";
import { useAdminAuth } from "../auth/adminAuthSlice";
import { useEffect } from "react";
import { protectedApiGetAdmin } from "../../apis/api";


const SvgFunc = () => {
  return (
    <svg
      width="69"
      height="60"
      viewBox="0 0 69 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.21"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.273438 30V37C0.273438 49.7025 10.5709 60 23.2734 60H34.5101H45.7467C58.4493 60 68.7467 49.7025 68.7467 37V30.0202C68.7467 30.0135 68.7467 30.0067 68.7467 30C68.7467 29.9933 68.7467 29.9865 68.7467 29.9798V23C68.7467 10.2975 58.4493 0 45.7467 0H34.5101H23.2734C10.5709 0 0.273438 10.2975 0.273438 23V30Z"
        fill="#8280FF"
      />
      <path
        opacity="0.587821"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.8594 23.3333C23.8594 26.2789 26.5844 28.6667 29.9459 28.6667C33.3074 28.6667 36.0324 26.2789 36.0324 23.3333C36.0324 20.3878 33.3074 18 29.9459 18C26.5844 18 23.8594 20.3878 23.8594 23.3333ZM39.0697 28.6666C39.0697 30.8758 41.1135 32.6666 43.6346 32.6666C46.1557 32.6666 48.1995 30.8758 48.1995 28.6666C48.1995 26.4575 46.1557 24.6666 43.6346 24.6666C41.1135 24.6666 39.0697 26.4575 39.0697 28.6666Z"
        fill="#8280FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.9193 31.3334C22.735 31.3334 16.8408 34.5687 16.251 40.9323C16.2189 41.2789 16.9754 42 17.357 42H42.4931C43.6361 42 43.6539 41.194 43.6361 40.9334C43.1903 34.391 37.2047 31.3334 29.9193 31.3334ZM51.9511 42.0001H46.0802V42.0001C46.0802 38.9988 44.9485 36.2292 43.0387 34.0009C48.2238 34.0495 52.458 36.3459 52.7766 41.2001C52.7894 41.3956 52.7766 42.0001 51.9511 42.0001Z"
        fill="#8280FF"
      />
    </svg>
  );
};

const TopArrow = () => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z"
        fill="#00B69B"
      />
    </svg>
  );
};

const Overview = () => {
  const {admin} =useAdminAuth()
  const [data, setData] = React.useState({
    totalReferral: 0,
    totalSales: 0,
    bestPerformer: "",
    totalInfluencers: 0,
    overallUSDTRaised:0
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (admin) { 
          console.log(admin)
        const response = await protectedApiGetAdmin(`admin/referral/getInfluencerData`);
        console.log(response) // Replace with your API endpoint
        setData({
          totalReferral: response.totalReferralCount,
          totalSales: response.totalUSDRaised,
          totalInfluencers: response.totalInfluencerCount,
          bestPerformer:response.bestPerformer.name,
          overallUSDTRaised:response.overallTotalUSDTRaised
        });
   
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [admin]);
  return (
    <div className="w-full my-10">
      <h2 className="header text-[30px] md:text-[35px]">Overview</h2>
      <div className="flex w-[80%] mt-16 flex-wrap justify-between items-stretch">
        <div className="flex flex-col w-[80%] lg:w-2/5 py-10 justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-left text-[#6D6A6A]">
              Total USDT Raised <br />
              <span className="header text-lg md:text-2xl">{data.totalSales}</span>
            </p>
            <SvgFunc />
          </div>
          {/* <div className="flex gap-2 items-center">
            <TopArrow />
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div> */}
        </div>
        <div className="flex flex-col w-[80%] lg:w-2/5 py-10 justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Total Referral <br />
              <span className="header text-lg md:text-2xl">{data.totalReferral}</span>
            </p>
            <SvgFunc />
          </div>
          {/* <div className="flex gap-2 items-center">
            <TopArrow />
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex w-[80%] mt-16 flex-wrap justify-between items-stretch">
        <div className="flex flex-col w-[80%] lg:w-2/5 py-10 justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Total Youtubers <br />
              <span className="header text-lg md:text-2xl">{data.totalInfluencers}</span>
            </p>
            <SvgFunc />
          </div>
          {/* <div className="flex gap-2 items-center">
            <TopArrow />
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div> */}
        </div>
        <div className="flex flex-col w-[80%] lg:w-2/5 py-10 justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Best Performer <br />
              <span className="header text-lg md:text-2xl">{data.bestPerformer}</span>
            </p>
            <SvgFunc />
          </div>
          {/* <div className="flex gap-2 items-center">
            <TopArrow />
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex w-[80%] mt-16 flex-wrap justify-between items-stretch">
        <div className="flex flex-col w-[80%] lg:w-2/5 py-10 justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Overall USDT Raised <br />
              <span className="header text-lg md:text-2xl">{data.overallUSDTRaised}</span>
            </p>
            <SvgFunc />
          </div>
          {/* <div className="flex gap-2 items-center">
            <TopArrow />
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div> */}
        </div>
       
      </div>
    </div>
  );
};

export default Overview;
