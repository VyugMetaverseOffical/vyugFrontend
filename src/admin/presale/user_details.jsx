import React from 'react';
import { Card,CardContent,Typography} from '@mui/material';
import { useState,useEffect } from 'react';
import { useAdminAuth } from '../auth/adminAuthSlice';
import { protectedApiGetAdmin } from '../../apis/api';

const UserDetails = () => {
  const [dataArray,setDataArray] =useState([])
  // Dummy data for the table
  const tableData = [
    { name: 'Christine Brooks', code: '089 Kutch Green Apt. 448', referrals: 4, usdt: 'XYZ', commission: 'Completed' },
    { name: 'Rosie Pearson', code: '979 Immanuel Ferry Suite 526', referrals: 5, usdt: 'XYZ', commission: 'Processing' },
    { name: 'Darrell Caldwell', code: '8587 Frida Ports', referrals: 65, usdt: 'XYZ', commission: 'Rejected' },
    { name: 'Gilbert Johnston', code: '768 Destiny Lake Suite 600', referrals: 3, usdt: 'XYZ', commission: 'Completed' },
    { name: 'Alan Cain', code: '042 Mylene Throughway', referrals: 7, usdt: 'XYZ', commission: 'Processing' },
    { name: 'Alfred Murray', code: '543 Weinmann Mountain', referrals: 65, usdt: 'XYZ', commission: 'Completed' },
    { name: 'Maggie Sullivan', code: 'New Scottieberg', referrals: 12, usdt: 'XYZ', commission: 'Processing' },
    { name: 'Rosie Todd', code: 'New Jon', referrals: 34, usdt: 'XYZ', commission: 'On Hold' },
    { name: 'Dollie Hines', code: '124 Lyla Forge Suite 975', referrals: 14, usdt: 'XYZ', commission: 'In Transit' },
  ];

  // Function to determine badge color based on commission status
  const getBadgeColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-purple-100 text-purple-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      case 'On Hold':
        return 'bg-orange-100 text-orange-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  const {admin} =useAdminAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (admin) { 
      
      
        const response = await protectedApiGetAdmin(`admin/referral/getUsersWithReferralCode`);
       // Replace with your API endpoint
       
        setDataArray(response)
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [admin]);
  console.log(dataArray)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  // Calculate indices for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = dataArray.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
    <div className="flex flex-col mt-10 justify-center ">
      <Card className="w-full h-full">
        <CardContent>
          <div className="overflow-x-auto">
            <div className="w-full">
              <Typography variant="h5" className="mb-4 header text-left font-bold">
                User Details
              </Typography>
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">NAME</th>
                    <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">Purchased USDT Amount</th>
                    <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">Youtuber's Commission</th>
                    <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">User's Commission</th>
                    <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">Referral Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((data, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">{data.userName}</td>
                      <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">{data.usdtAmount}</td>
                      <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">{data.influencerCommission}</td>
                      <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">{data.userCommission}</td>
                      <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">  {data?.date ? new Date(data.date).toLocaleString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }) : "Invalid Date"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600 w-full description">
            <div>
              Showing {startIndex + 1}-{Math.min(endIndex, dataArray.length)} of {dataArray.length}
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 cursor-pointer ${currentPage === 1 ? "opacity-50" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handlePrevPage}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 cursor-pointer ${currentPage === totalPages ? "opacity-50" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleNextPage}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  );
};

export default UserDetails;
