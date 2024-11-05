import { useEffect, useState } from "react";

function Announcements() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateToShow = new Date(currentDate);
  dateToShow.setUTCMinutes(dateToShow.getUTCMinutes() + 330);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="my-4 pe-3">
      <p className="description text-sm text-end">{`Date: ${dateToShow.toLocaleDateString(
        "en-us",
        { month: "long", day: "2-digit", year: "numeric" }
      )} | Time: ${dateToShow
        .getUTCHours()
        .toString()
        .padStart(2, "0")}:${dateToShow
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")} ${dateToShow.getHours() > 12 ? "PM" : "AM"}`}</p>

      {/* Annoucement Form */}
      <form className="flex flex-col justify-start items-stretch gap-3 my-5">
        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="announcement-title" className="description ps-3">
            Title
          </label>
          <input
            type="text"
            name="announcement-title"
            id="announcement-title"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
          />
          <span className="description text-[10px] text-end pe-3">
            12 : Word Limit
          </span>
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="announcement-title-body" className="description ps-3">
            Title Body
          </label>
          <textarea
            type="text"
            name="announcement-title-body"
            id="announcement-title-body"
            className="description text-[14px] text-[#6D6A6A] min-h-[100px] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-4"
          />
          <span className="description text-[10px] text-end pe-3">
            50 : Word Limit
          </span>
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="announcement-heading" className="description ps-3">
            Heading
          </label>
          <input
            type="text"
            name="announcement-heading"
            id="announcement-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
          />
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="announcement-body" className="description ps-3">
            Body
          </label>
          <textarea
            type="text"
            name="announcement-body"
            id="announcement-body"
            className="description text-[14px] text-[#6D6A6A] min-h-[200px] outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-4"
          />
        </div>

        <div className="flex justify-start items-center gap-6 my-6">
          <button className="description text-[#fff] font-bold bg-[#242424] rounded-[5rem] px-8 py-2 ms-auto">
            POST
          </button>
        </div>
      </form>
    </div>
  );
}

export default Announcements;
