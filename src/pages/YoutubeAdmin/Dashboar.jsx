import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { protectedApiGetYoutubeAdmin } from "../../apis/api";
import { useYoutubeAdminAuth } from "../../redux/youtubeAdminAuthSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "../../components/toast";

const columns = [
  { id: "userName", label: "Name", minWidth: 170 },
  { id: "usdtAmount", label: "Purchased USDT Amount", minWidth: 100 },
  {
    id: "influencerCommission",
    label: "YouTuber’s Commission",
    minWidth: 170,
    align: "right",
  },
  {
    id: "userCommission",
    label: "User’s Commission",
    minWidth: 170,
    align: "right",
  },
];

const UserDetails = ({ dataArray }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(dataArray);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer className="description" sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="header text-sm md:text-base text-[#242424]"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    console.log(value);
                    return (
                      <TableCell
                        className="description text-sm md:text-base text-[#6D6A6A]"
                        key={column.id}
                        align={column.align}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        classes={{
          root: "description",
        }}
        className="description cursor-default text-sm md:text-base text-[#242424]"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const Dashboar = () => {
  const { isLoggedIn, youtubeAdminUser, logoutYoutubeAdmin } = useYoutubeAdminAuth();
  const navigate = useNavigate();  


  const handleLogout = () => {
    logoutYoutubeAdmin();
    toast.success(
      <ToastSuccess data={"Logout successful"} />,
      SuccessStyling
    );
    navigate('/youtube-admin/login')
  }

  console.log(youtubeAdminUser?.influencerId);
  const [data, setData] = useState({
    totalReferral: 0,
    totalSales: 0,
    totalEarnings: 0,
  });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          console.log(youtubeAdminUser);
          let influencerId = youtubeAdminUser.influencerId; // Replace with your influencer ID
          const response = await protectedApiGetYoutubeAdmin(
            `admin/influencer/influnecerData/${influencerId}`
          );
          console.log(response); // Replace with your API endpoint
          setData({
            totalReferral: response.totalReferrals,
            totalSales: response.totalSalesGenerated,
            totalEarnings: response.totalEarnings,
          });
          setDataArray(response.influencerSalesRecords);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [youtubeAdminUser?.influencerId]);
  console.log(dataArray);
  return (
    <div className="w-full md:w-[80%] mx-auto my-20">
      <div className="flex justify-between items-center">
        <h2 className="header text-base md:text-[35px]">Dashboard</h2>
        <div className="flex gap-7">
        <div className="header text-base md:text-[20px]">{youtubeAdminUser?.email || "Login"}</div>
        <button onClick={() => handleLogout()} className="white-btn py-2 px-4 lg:px-10 description text-base sm:text-lg uppercase">
          Log out
        </button>
        </div>
      </div>
      <div className="flex gap-10 mt-20 flex-wrap justify-stretch items-stretch">
        <div className="flex flex-col justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Total Referral <br />
              <span className="header text-lg md:text-2xl">
                {data.totalReferral}
              </span>
            </p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.21"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
                fill="#8280FF"
              />
              <path
                opacity="0.587821"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.6719 23.3333C20.6719 26.2789 23.0597 28.6667 26.0052 28.6667C28.9507 28.6667 31.3385 26.2789 31.3385 23.3333C31.3385 20.3878 28.9507 18 26.0052 18C23.0597 18 20.6719 20.3878 20.6719 23.3333ZM34.0039 28.6667C34.0039 30.8758 35.7948 32.6667 38.0039 32.6667C40.213 32.6667 42.0039 30.8758 42.0039 28.6667C42.0039 26.4575 40.213 24.6667 38.0039 24.6667C35.7948 24.6667 34.0039 26.4575 34.0039 28.6667Z"
                fill="#8280FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9778 31.3334C19.6826 31.3334 14.5177 34.5687 14.0009 40.9323C13.9727 41.2789 14.6356 42 14.97 42H36.9956C37.9972 42 38.0128 41.194 37.9972 40.9334C37.6065 34.391 32.3616 31.3334 25.9778 31.3334ZM45.2759 42L40.1315 42.0001C40.1315 38.9988 39.1399 36.2291 37.4664 34.0008C42.0099 34.0495 45.7201 36.3458 45.9993 41.2C46.0105 41.3955 45.9993 42 45.2759 42Z"
                fill="#8280FF"
              />
            </svg>
          </div>
          {/*<div className="flex gap-2 items-center">
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
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">8.5% </span>
              Up from yesterday
            </p>
          </div>*/}
        </div>
        <div className="flex flex-col justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Total Sales (USDT) <br />
              <span className="header text-lg md:text-2xl">
                {data.totalSales}
              </span>
            </p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.21"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
                fill="#4AD991"
              />
              <path
                d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z"
                fill="#4AD991"
              />
              <path
                opacity="0.5"
                d="M24.9091 34.175C24.3216 34.8017 23.3372 34.8335 22.7104 34.2459C22.0836 33.6583 22.0519 32.6739 22.6395 32.0472L28.4728 25.8249C29.0411 25.2188 29.9854 25.1662 30.6174 25.7056L35.2214 29.6343L41.22 22.0361C41.7524 21.3618 42.7306 21.2467 43.4049 21.779C44.0792 22.3114 44.1942 23.2895 43.6619 23.9638L36.6619 32.8305C36.1152 33.5231 35.1024 33.6227 34.4312 33.0499L29.7272 29.0358L24.9091 34.175Z"
                fill="#4AD991"
              />
            </svg>
          </div>
          {/*<div className="flex gap-2 items-center">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 12L16.29 9.71L11.41 4.83L7.41 8.83L0 1.41L1.41 0L7.41 6L11.41 2L17.71 8.29L20 6V12H14Z"
                fill="#F93C65"
              />
            </svg>
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#F93C65]">4.3% </span>
              Down from yesterday
            </p>
          </div>*/}
        </div>
        <div className="flex flex-col justify-center items-center gap-10 bg-[#F5F6FA] rounded-xl p-5">
          <div className="flex justify-between gap-20 px-3">
            <p className="description text-[#6D6A6A]">
              Total Earning (VYUG Token)<br />
              <span className="header text-lg md:text-2xl">
                {data.totalEarnings}
              </span>
            </p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.21"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
                fill="#FEC53D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 24.3164L27.9005 31.7645C28.0394 31.8447 28.1851 31.9026 28.3333 31.9394V46.3846L15.9201 39.0385C15.3498 38.701 15 38.0875 15 37.4248V24.3164ZM45.0013 24.1184V37.4248C45.0013 38.0875 44.6515 38.701 44.0812 39.0385L31.668 46.3846V31.8129C31.6982 31.7978 31.7282 31.7816 31.7579 31.7645L45.0013 24.1184Z"
                fill="#FEC53D"
              />
              <path
                opacity="0.499209"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4063 20.7014C15.5638 20.5024 15.7627 20.3343 15.9946 20.2108L29.1196 13.2201C29.6706 12.9266 30.3315 12.9266 30.8825 13.2201L44.0075 20.2108C44.1862 20.306 44.3454 20.4277 44.4811 20.5697L30.0909 28.8778C29.9963 28.9325 29.9091 28.995 29.8296 29.064C29.75 28.995 29.6628 28.9325 29.5682 28.8778L15.4063 20.7014Z"
                fill="#FEC53D"
              />
            </svg>
          </div>
          {/*<div className="flex gap-2 items-center">
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
            <p className="description text-sm text-[#6D6A6A] md:text-base">
              <span className="text-[#00B69B]">1.5% </span>
              Up from past week
            </p>
          </div>*/}
        </div>
      </div>
      <h2 className="header text-base md:text-[29px] mt-20 mb-10">
        User Details
      </h2>
      <UserDetails dataArray={dataArray} />
    </div>
  );
};

export default Dashboar;
