import React, { useState } from "react";
import { Collapse, Typography } from "@mui/material";
import OutboundIcon from "@mui/icons-material/Outbound";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import Layout from "./Layout";

const Press_Release = () => {
  const Month = [
    {
      id: 1,
      month: "January",
    },
    {
      id: 2,
      month: "February",
    },
    {
      id: 3,
      month: "March",
    },
    {
      id: 4,
      month: "April",
    },
    {
      id: 5,
      month: "May",
    },
    {
      id: 6,
      month: "June",
    },
    {
      id: 7,
      month: "July",
    },
    {
      id: 8,
      month: "August",
    },
    {
      id: 9,
      month: "September",
    },
    {
      id: 10,
      month: "October",
    },
    {
      id: 11,
      month: "November",
    },
    {
      id: 12,
      month: "December    ",
    },
  ];

  const [openChild, setOpenChild] = useState(0);
  const [month, setMonth] = useState("January");

  return (
    <>
      <Layout x={2} />
      <Grid2
        xs={12}
        my={5}
        container
        className="flex items-center justify-center flex-col"
      >
        <Grid2
          xs={11}
          className="flex justify-between"
          sx={{ borderRadius: "8px", backgroundColor: "#F2ECFF" }}
        >
          <Typography className="bg-btn m-0 text-xs sm:text-sm flex items-center cursor-pointer">
            {month}
            {openChild == 1 ? (
              <ArrowDropUp
                onClick={() => setOpenChild(0)}
                className="ml-4 navbar-menuText"
              />
            ) : (
              <ArrowDropDown
                onClick={() => setOpenChild(1)}
                className="ml-4 navbar-menuText"
              />
            )}
          </Typography>
          <Typography className="bg-btn flex items-center my-2">
            <SearchIcon />
          </Typography>
        </Grid2>
        <Grid2 xs={11} className="flex justify-between">
          <Collapse className="bg-btn" in={openChild == 1}>
            {Month.map((item) => (
              <Typography
                key={item.id}
                onClick={() => {
                  setMonth(item.month);
                  setOpenChild(0);
                }}
                className="description text-xs sm:text-sm my-2 cursor-pointer"
              >
                {item.month}
              </Typography>
            ))}
          </Collapse>
        </Grid2>
        <Grid2 xs={11}>
          <Typography
            variant="subtitle1"
            className="header text-xl sm:text-2xl my-5 text-black"
          >
            {month}
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          sm={11}
          container
          gap={1}
          mt={5}
          className="flex items-center justify-center"
        >
          <Grid2 xs={2}>
            <OutboundIcon sx={{ color: "#000000", fontSize: 30 }} />
          </Grid2>
          <Grid2 xs={8}>
            <Typography className="description text-xs">22/04/2024</Typography>
            <Typography
              variant="h6"
              className="header text-base sm:text-xl text-[#686262]"
            >
              SAD ASD AD ASDN AS JN N A SD AS D D ASD asd ADSD DASD D ASD AS .
            </Typography>
            <Typography className="description text-xs sm:text-sm">
              Sass asdn ad asd da saksd askd adna kdn akm dka kkdmk adskdsams
              kddma m as sadasd asd asd ads asd asd d as asd ad a as dd asd asd as
              da d ad as d dsa d sa dsd as d asdas das asd asd asd asd asd as a d
              ads das asd asd asd dsaj naskd nasdn aksdandsl;ad mlnads nlasdn
              lkdas klndkn lasdl nasldn nasd ndasln
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          xs={12}
          sm={11}
          container
          gap={1}
          mt={5}
          className="flex items-center justify-center"
        >
          <Grid2 xs={2}>
            <OutboundIcon sx={{ color: "#000000", fontSize: 30 }} />
          </Grid2>
          <Grid2 xs={8}>
            <Typography className="description text-xs">22/04/2024</Typography>
            <Typography
              variant="h6"
              className="header text-base sm:text-xl text-[#686262]"
            >
              SAD ASD AD ASDN AS JN N A SD AS D D ASD asd ADSD DASD D ASD AS .
            </Typography>
            <Typography className="description text-xs sm:text-sm">
              Sass asdn ad asd da saksd askd adna kdn akm dka kkdmk adskdsams
              kddma m as sadasd asd asd ads asd asd d as asd ad a as dd asd asd as
              da d ad as d dsa d sa dsd as d asdas das asd asd asd asd asd as a d
              ads das asd asd asd dsaj naskd nasdn aksdandsl;ad mlnads nlasdn
              lkdas klndkn lasdl nasldn nasd ndasln
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          xs={12}
          sm={11}
          container
          gap={1}
          mt={5}
          className="flex items-center justify-center"
        >
          <Grid2 xs={2}>
            <OutboundIcon sx={{ color: "#000000", fontSize: 30 }} />
          </Grid2>
          <Grid2 xs={8}>
            <Typography className="description text-xs">22/04/2024</Typography>
            <Typography
              variant="h6"
              className="header text-base sm:text-xl text-[#686262]"
            >
              SAD ASD AD ASDN AS JN N A SD AS D D ASD asd ADSD DASD D ASD AS .
            </Typography>
            <Typography className="description text-xs sm:text-sm">
              Sass asdn ad asd da saksd askd adna kdn akm dka kkdmk adskdsams
              kddma m as sadasd asd asd ads asd asd d as asd ad a as dd asd asd as
              da d ad as d dsa d sa dsd as d asdas das asd asd asd asd asd as a d
              ads das asd asd asd dsaj naskd nasdn aksdandsl;ad mlnads nlasdn
              lkdas klndkn lasdl nasldn nasd ndasln
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          xs={12}
          sm={11}
          container
          gap={1}
          mt={5}
          className="flex items-center justify-center"
        >
          <Grid2 xs={2}>
            <OutboundIcon sx={{ color: "#000000", fontSize: 30 }} />
          </Grid2>
          <Grid2 xs={8}>
            <Typography className="description text-xs">22/04/2024</Typography>
            <Typography
              variant="h6"
              className="header text-base sm:text-xl text-[#686262]"
            >
              SAD ASD AD ASDN AS JN N A SD AS D D ASD asd ADSD DASD D ASD AS .
            </Typography>
            <Typography className="description text-xs sm:text-sm">
              Sass asdn ad asd da saksd askd adna kdn akm dka kkdmk adskdsams
              kddma m as sadasd asd asd ads asd asd d as asd ad a as dd asd asd as
              da d ad as d dsa d sa dsd as d asdas das asd asd asd asd asd as a d
              ads das asd asd asd dsaj naskd nasdn aksdandsl;ad mlnads nlasdn
              lkdas klndkn lasdl nasldn nasd ndasln
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Press_Release;
