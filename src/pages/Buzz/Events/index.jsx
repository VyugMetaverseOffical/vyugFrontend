import React, { useEffect, useState } from "react";
import eventImg from "../../../images/eventImg.svg";
import { Button, InputAdornment, Typography } from "@mui/material";
import Searchbar from "../../../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import AllEvents from "./AllEvents";
import Recent from "./Recent";
import Archive from "./Archive";
import Header from "../../../components/Head";
import Footer from "../../../components/Footer";
import { ComingSoon } from "../../../components/ComingSoon";
import { Helmet } from "react-helmet-async";

const Events = () => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(false);
  const [status, setStatus] = useState(1);

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Events - VYUG Metaverse</title>
        <meta name="description" content="Events" />
        <meta name="keywords" content="Events" />
        <meta property="og:title" content="Events" />
        <meta property="og:description" content="Events" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/buzz/events"
        />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <div className="min-h-screen py-20 pt-40">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            alt="Events"
            aria-hidden="true"
            src={eventImg}
            className="h-16 sm:w-28 w-16 sm:h-28 contrast-[80%] brightness-0 hover:contrast-[1] hover:brightness-[1] transform transition-transform duration-500 hover:scale-[1.1] ease-in-out"
          />
          <Typography
            variant="h2"
            className="header text-3xl sm:text-4xl lg:text-[45px] pt-5"
          >
            EVENTS
          </Typography>
        </div>
        <div className="w-[95%] m-auto md:w-[80%] xl:w-[65%] flex-col sm:flex-row flex gap-5 items-center justify-center py-10">
          <div className="w-full sm:w-3/4">
            <Searchbar
              InputProps={{
                endAdornment: (
                  <InputAdornment className="me-4" position="end">
                    <SearchIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="w-full sm:w-1/4">
            <button
              onClick={() => setStatus(0)}
              className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase"
            >
              Create Event
            </button>
            {status == 0 && (
              <ComingSoon status={status} setStatus={setStatus} />
            )}
          </div>
        </div>

        {/* show code when events appeears */}
        {/* <div className="w-[90%] py-5 sm:py-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-[40%] flex flex-col gap-6 sm:gap-10">
            <Typography
              variant="subtitle2"
              className="description text-xs sm:text-sm"
            >
              July 9, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-2xl sm:text-3xl lg:text-5xl"
            >
              UPCOMING EVENTS
            </Typography>
            <Typography
              variant="subtitle2"
              className="description text-xs sm:text-sm"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna
            </Typography>
          </div>
          <div className="w-full md:w-[60%] flex items-center justify-center gap-5">
            <div className="h-40 sm:w-60 w-40 sm:h-60">
              <img
                className="h-[100%]"
                src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
                alt=""
              />
            </div>
            <div className="h-40 sm:w-60 w-40 sm:h-60">
              <img
                className="h-[100%]"
                src="https://s3-alpha-sig.figma.com/img/15c7/ea12/e9835b32ec1563fc3ee379bd613d426e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1DiXGmW-yZx-v03lCjVGE36cZRNML4f4jYr8xv5FnGna9M8f4-I6I1lsJ9fIzgtD3opkEEcaqzfeb8z98D~xFd5SvhN33My~tSsXkmErue24cbqnmbb2obnyT~BQO3wj6atxclTg6gbnjQ1HQ0qlgJbczZHP8x03RA21t6HQdD2Qe8CckHMf9zJzZoVxsWKlnKMGPKfw9-DRVSX3naw9fu9IgnImkDIzQji839b~k3ZZLxpurWIMD2-I53pnE2-H5WHTPCYURxOnAOFNhHl~sC7uGZLWGs-AzjMLjhykJ60MIwsHgAE2v3qJo0o9zjPw5HPjQ07j78ZzAS~pdCBNg__"
                alt=""
              />
            </div>
          </div>
        </div> */}

        <div className="w-[90%] mx-auto py-5 pb-10 sm:py-10 flex gap-5">
          {["ALL EVENTS", "RECENT", "ARCHIVE"].map((item, index) => (
            <Typography
              key={index}
              onClick={() => setActive(index)}
              variant="subtitle2"
              component={"p"}
              className={`w-fit sm:px-3 description text-center text-sm cursor-pointer ${
                active == index && "font-bold underline"
              }`}
            >
              {item}
            </Typography>
          ))}
        </div>
        {active == 0 ? (
          <AllEvents />
        ) : active == 1 ? (
          <Recent />
        ) : (
          active == 2 && <Archive />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Events;
