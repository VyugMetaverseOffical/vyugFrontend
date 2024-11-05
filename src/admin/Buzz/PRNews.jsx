import { useEffect, useState } from "react";

function PRNews() {
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

      {/* PR and News Form */}
      <form className="flex flex-col justify-start items-stretch gap-3 my-5">
        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="pr-title" className="description ps-3">
            Title
          </label>
          <input
            type="text"
            name="pr-title"
            id="pr-title"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
          />
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="pr-heading" className="description ps-3">
            Heading
          </label>
          <input
            type="text"
            name="pr-heading"
            id="pr-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
          />
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="pr-body" className="description ps-3">
            Body
          </label>
          <textarea
            type="text"
            name="pr-body"
            id="pr-body"
            className="description text-[14px] text-[#6D6A6A] min-h-[200px] outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-4"
          />
        </div>

        <div className="flex justify-start items-center gap-6 my-6">
          <label
            htmlFor="pr-portal-logo"
            className="flex flex-col justify-center items-center gap-0 bg-[#E8E8E8] py-5 w-1/4 rounded-[0.5rem] cursor-pointer"
          >
            <p className="header text-[#6D6A6A] text-lg">+</p>
            <p className="header text-[#6D6A6A] text-base">News Portal Logo</p>
            <input
              type="file"
              name="pr-portal-logo"
              id="pr-portal-logo"
              hidden={true}
            />
          </label>
          <label
            htmlFor="pr-thumbnail"
            className="flex flex-col justify-center items-center gap-0 bg-[#E8E8E8] py-5 w-1/4 rounded-[0.5rem] cursor-pointer"
          >
            <p className="header text-[#6D6A6A] text-lg">+</p>
            <p className="header text-[#6D6A6A] text-base">Thumbnail</p>
            <input
              type="file"
              name="pr-thumbnail"
              id="pr-thumbnail"
              hidden={true}
            />
          </label>
          <label
            htmlFor="pr-inline-image"
            className="flex flex-col justify-center items-center gap-0 bg-[#E8E8E8] py-5 w-1/4 rounded-[0.5rem] cursor-pointer"
          >
            <p className="header text-[#6D6A6A] text-lg">+</p>
            <p className="header text-[#6D6A6A] text-base">Inline Image</p>
            <input
              type="file"
              name="pr-inline-image"
              id="pr-inline-image"
              hidden={true}
            />
          </label>
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="pr-link" className="description ps-3">
            Link
          </label>
          <input
            type="text"
            name="pr-link"
            id="pr-link"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2 w-1/2"
          />
        </div>

        <button className="description text-[#fff] font-bold bg-[#242424] rounded-[5rem] px-8 py-2 me-auto my-5">
          POST
        </button>
      </form>
    </div>
  );
}

export default PRNews;
