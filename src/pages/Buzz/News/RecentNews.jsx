import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import news from "./PRNews";

const RecentNews = ({ search }) => {
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(3);
  const [results, setResults] = useState([]);
  const selectedIndex = [7, 12, 15, 17, 18];

  const highlightText = (text, word) => {
    const parts = text.split(new RegExp(`(${word})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === word.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    const items = news.filter((item, index) => selectedIndex.includes(index));
    setResults(items);
  }, []);

  const filterBlogs = (results, search) => {
    if (!search) return results;
    return results.filter((blog) =>
      blog.heading.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredItem = filterBlogs(results, search);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {filteredItem.length > 0 ? (
        filteredItem
          // .filter((_, index) => selectedIndex.includes(index))
          .slice(0, visibleCount)
          ?.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                // navigate(`/pages/pr-news/${item?.id.replace(/\s+/g, "-").toLocaleLowerCase()}`)
                navigate(`/buzz/pr-news/${item?.id}`)
              }
              className="cursor-pointer w-full transition duration-500 ease-in-out hover:bg-[#EEEEEF] p-2 rounded-2xl flex gap-5"
            >
              <div className="w-[25%] md:w-[15%] flex justify-center items-center gap-2">
                <img src={item?.icon} alt={item?.iconImg} aria-hidden="true" />
              </div>
              <div className="w-[80%] md:w-[85%] flex flex-col sm:flex-row sm:items-center justify-stretch gap-2 border-l-[1px] border-black pl-5 md:pl-10">
                <div className="w-full sm:w-[50%] lg:w-[50%] h-[100%] sm:pr-4">
                  <img
                    className="h-[100%] w-[100%] rounded-2xl"
                    src={item?.img}
                    alt={item?.id}
                    aria-hidden="true"
                  />
                </div>
                <div className="w-full sm:w-[65%] lg:w-[65%] flex flex-col mt-4 sm:mt-0 gap-2 sm:gap-4">
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-[#242424] text-sm sm:text-base w-full"
                  >
                    {item?.date}
                  </Typography>
                  <Typography
                    variant="h2"
                    className="header font-extrabold text-[#111113] sm:font-extrabold text-base text-left hyphens-auto sm:text-lg lg:text-2xl w-full"
                  >
                    {highlightText(item.heading, search)}
                  </Typography>
                </div>
              </div>
            </div>
          ))
      ) : (
        <Typography
          variant="h2"
          className="header text-[#242424] mt-10 text-center text-xl md:text-2xl w-full"
        >
          No results found <br />
          <span className="text-[6D6A6A] text-sm sm:text-base font-normal">
            Try using different spelling or keywords !
          </span>
        </Typography>
      )}
      {visibleCount < filteredItem.length && (
        <button
          onClick={handleClick}
          className="white-btn w-fit mx-auto py-2 mt-5 sm:mt-10 px-4 lg:px-10 rounded-3xl description"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default RecentNews;
