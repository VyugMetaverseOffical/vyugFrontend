import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "../../../images/Blog/blog1.webp";
import blog2 from "../../../images/Blog/blog2_2.webp";
import blog3 from "../../../images/Blog/blog3.webp";
import blog4 from "../../../images/Blog/blog4.webp";
import blog5 from "../../../images/Blog/blog5.webp";

const AllBlogs = ({ search }) => {
  const navigate = useNavigate();

  const blogList = [
    {
      id: "why-vyug",
      date: "July 9, 2024",
      title: "Why Vyug ?",
      desc1: "It had all begun with an idea in our minds.",
      desc2:
        "An imagination that will keep the future in your hands; a future that will not only be the technological leap ahead, but also give you true powers of advancement, knowledge, technology, environment, and other things in the most morally responsible way.",
      img: blog1,
    },
    {
      id: "first-ever-metaverse-dussehra-celebration",
      date: "October 8, 2024",
      title:
        "Experience First-ever Dussehra Celebration in the VYUG Metaverse!",
      desc1: "",
      desc2:
        "Explore the First Ever Dussehra Celebration in Vyug Mertavers at your home and Experience the epic battle between Lord Rama and Ravana.",
      img: blog2,
    },
    {
      id: "vyug-token-presale",
      date: "October 8, 2024",
      title: "Invest In Best Crypto Presale 2024: VYUG Token Presale",
      desc1: "",
      desc2:
        "Grab the opportunity to Invest in the upcoming Best Crypto Presale of 2024 of Vyug Token Presale and get the benefits of Vyug Token in Vyug Metaverse.",
      img: blog3,
    },
    {
      id: "best-crypto-presale-participate-in-the-vyug-token-presale",
      date: "October 16, 2024",
      title: "Best Crypto Presale is Upcoming Participate Now on VYUG.",
      desc1: "",
      desc2:
        "Start Investing in the Best Crypto Presale of VYUG Token 2024 and become an early investor of VYUG Metaverse.",
      img: blog4,
    },
    {
      id: "overview-of-vyug-metaverse",
      date: "October 18, 2024",
      title: "Embark the Journey to the Future: Overview of the VYUG Metaverse",
      desc1: "",
      desc2:
        "A complete detailed guide on what is VYUG Metaverse and learn how the VYUG Metaverse is the new YUG of Metaverse.",
      img: blog5,
    },
  ];

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

  const filterBlogs = (blogs, search) => {
    if (!search) return blogs;
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredItem = filterBlogs(blogList, search).reverse();

  return (
    <>
      {/* code appears when blogs be released */}
      <div className="w-full flex justify-center items-center flex-col my-10">
        {filteredItem.map((item) => (
          <div
            onClick={() => navigate(`/buzz/blogs/${item?.id}`)}
            key={item?.id}
            className="p-5 transform-transition duration-500 ease-in-out hover:bg-[#EEEEEF] mb-20 rounded-xl sm:p-10 flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <div className="w-full md:w-[50%] flex flex-col gap-5">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-start text-sm"
              >
                {item?.date} | COMMUNITY
              </Typography>
              <Typography
                variant="h1"
                className="header text-start text-3xl sm:text-4xl lg:text-[45px] sm:pt-10"
              >
                {highlightText(item.title, search)}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-start text-[#6D6A6A] text-sm md:text-base"
              >
                {item?.desc1} <br />
                {item?.desc2}
              </Typography>
            </div>
            <div className="w-full md:w-[50%] flex items-center justify-center gap-5">
              <div className="h-40 w-[100%] sm:h-80">
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={item?.img}
                  alt="Why VYUG ?"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}

        {/* code appears when more blogs released */}
        {/* <div className="flex flex-wrap items-center justify-center gap-10">
        <div
          onClick={() => navigate("/pages/blogs/id")}
          className="flex flex-col gap-2 sm:w-[30%] w-32"
        >
          <img
            className="h-[100%] w-[100%]"
            src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
            alt=""
          />
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="h1"
            className="header text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            PROMOTING LIFE INSIDE VYUG
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-[30%] w-32">
          <img
            className="h-[100%] w-[100%]"
            src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
            alt=""
          />
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            VYUG: NEW PLACE TO LIVE
          </Typography>
        </div>
        <div className="flex flex-col gap-2 sm:w-[30%] w-32">
          <img
            className="h-[100%] w-[100%]"
            src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
            alt=""
          />
          <Typography
            variant="subtitle2" component={"p"}
            className="description text-[8px] sm:text-sm"
          >
            July 1, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="subtitle2" component={"p"}
            className="header text-xs sm:text-lg font-bold sm:font-extrabold"
          >
            WHAT YOU CAN DO IN VYUG
          </Typography>
        </div>
      </div>
      <button className="white-btn w-fit mx-auto py-2 mt-5 sm:mt-10 px-4 lg:px-10 rounded-3xl description">
        Load More
      </button> */}
      </div>

      {/* code appears when no blogs list shown */}
      {/* <div className="flex min-h-[50vh] justify-center items-center flex-col gap-5">
        <Typography
          variant="h1"
          className="header text-2xl sm:text-3xl lg:text-4xl"
        >
          Coming Soon!
        </Typography>
        <Typography
          variant="subtitle2" component={"p"}
          className="description text-center text-sm md:text-base"
        >
          Our blog are being prepared. <br />
          Check back soon for insightful articles and updates.
        </Typography>
      </div> */}
    </>
  );
};

export default AllBlogs;
