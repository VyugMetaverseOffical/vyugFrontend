import { Typography } from "@mui/material";
import React from "react";

const AllEvents = () => {

  return (
    <>
      {/* <div className="w-[90%] flex flex-wrap items-center mx-auto justify-center gap-10">
        <div
          className="flex flex-col gap-2 sm:w-60 w-32 cursor-pointer"
          onClick={() => navigate("/pages/event/id")}
        >
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="h1"
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-60 w-32">
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-60 w-32">
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-60 w-32">
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="h1"
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-60 w-32">
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-60 w-32">
          <div className="h-32 sm:w-60 w-32 sm:h-60">
            <img
              className="h-[100%] w-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header sm:w-48 text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
      </div> */}
      <div className="flex min-h-[50vh] justify-center items-center flex-col gap-5">
        <Typography
          variant="h1"
          className="header text-2xl sm:text-3xl lg:text-4xl"
        >
          Exciting Events Ahead!
        </Typography>
        <Typography
          variant="subtitle2" component={"p"}
          className="description text-center text-sm md:text-base"
        >
          No events are scheduled at the moment. <br />
          Please revisit this page soon for upcoming events and activities.
        </Typography>
      </div>
    </>
  );
};

export default AllEvents;
