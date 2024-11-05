import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Cross button
import { protectedApiPostAdmin, protectedApiGetAdmin } from "../../apis/api";
import { toast } from "react-toastify";
import { useAdminAuth } from "../auth/adminAuthSlice";
import { useEffect } from "react";


const NewReferral = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataArray, setDataArray] = useState([]); // State to toggle form visibility
  const [formData, setFormData] = useState({
    email: "",
    channelName: "",
    userCommission: "",
  });

  // Dummy data for the table
  const tableData = [
    {
      name: "Christine Brooks",
      code: "089 Kutch Green Apt. 448",
      referrals: 4,
      usdt: "XYZ",
      commission: "Completed",
    },
    {
      name: "Rosie Pearson",
      code: "979 Immanuel Ferry Suite 526",
      referrals: 5,
      usdt: "XYZ",
      commission: "Processing",
    },
    {
      name: "Darrell Caldwell",
      code: "8587 Frida Ports",
      referrals: 65,
      usdt: "XYZ",
      commission: "Rejected",
    },
    {
      name: "Gilbert Johnston",
      code: "768 Destiny Lake Suite 600",
      referrals: 3,
      usdt: "XYZ",
      commission: "Completed",
    },
    {
      name: "Alan Cain",
      code: "042 Mylene Throughway",
      referrals: 7,
      usdt: "XYZ",
      commission: "Processing",
    },
    {
      name: "Alfred Murray",
      code: "543 Weinmann Mountain",
      referrals: 65,
      usdt: "XYZ",
      commission: "Completed",
    },
  ];

  // Function to determine badge color based on commission status
  const getBadgeColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-purple-100 text-purple-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "On Hold":
        return "bg-orange-100 text-orange-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  const { admin, fetchAdmin } = useAdminAuth();
  const fetchData = async () => {
    try {
      if (admin) {
        const response = await protectedApiGetAdmin(
          `admin/referral/getInfluencersWithGeneratedReferrals`
        );
        // Replace with your API endpoint

        setDataArray(response);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [admin]);
  console.log(dataArray);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      console.log("abhi");
      const resp = await protectedApiPostAdmin(
        "admin/referral/referralCode",
        formData
      );

      if (resp && resp.status === 200) {
        // Success case
        toast.success(`${resp.message}`); // Display success message
        fetchData();
      } else {
        // Handle non-200 status codes
        toast.error(`Error: ${resp.message}`);
      }

      // Reset form data and close the modal
      setFormData({
        email: "",
        channelName: "",
        userCommission: "",
      });
      setShowForm(false);
    } catch (error) {
      // Handle any errors during the API request
      toast.error(
        `Error: ${
          error.resp || "An error occurred while generating referral code"
        }`
      );
    }
  };

  // Function to handle form close
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataArray?.influencers?.slice(startIndex, endIndex);

  // Handle navigation
  const totalPages = Math.ceil(dataArray?.influencers?.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen ">
      <div className="flex flex-col mt-10 w-full justify-center">
        <Card className="w-full">
          <CardContent>
            <div className="overflow-x-auto">
              <div className="w-full">
                <Typography
                  variant="h5"
                  className="mb-4 header text-left font-bold"
                >
                  New Referral Code
                </Typography>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">
                        Email
                      </th>
                      <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">
                        Channel Name
                      </th>
                      <th className="py-2 px-4 text-left header text-sm md:text-base text-[#242424]">
                        User Commission
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems?.map((data, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">
                          {data.email}
                        </td>
                        <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">
                          {data.channelName}
                        </td>
                        <td className="py-2 px-4 description text-sm md:text-base text-[#6D6A6A]">
                          {data.userCommission} %
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600 w-full description">
              <div>
                Showing {startIndex + 1}-
                {Math.min(endIndex, dataArray?.influencers?.length)} of{" "}
                {dataArray?.influencers?.length}
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  onClick={handlePrevious}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 cursor-pointer ${
                    currentPage === 1 ? "opacity-50" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <svg
                  onClick={handleNext}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 cursor-pointer ${
                    currentPage === totalPages ? "opacity-50" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Popup */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-md relative w-96">
              <IconButton
                className="absolute top-2 right-2"
                onClick={handleCloseForm}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className="mb-4 text-center header">
                Generate Referral Code
              </Typography>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                className="mb-4"
                required
              />
              <TextField
                label="Channel Name"
                name="channelName"
                value={formData.channelName}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                className="mb-4"
              />
              <TextField
                label="User Commission"
                name="userCommission"
                value={formData.userCommission}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                className="mb-4"
              />

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md w-full font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-5">
          <button
            className="px-4 py-2 font-bold white-btn description"
            onClick={() => setShowForm(true)} // Show form on button click
          >
            Generate Referral Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReferral;
