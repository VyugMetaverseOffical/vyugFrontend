import React, { useEffect, useState } from "react";
import { HeaderData } from "./HeaderData";
import { Link, useNavigate } from "react-router-dom";
import icon from "../images/vect.svg";
import { ComingSoon } from "./ComingSoon";

const HeaderDropdown = ({ isExpand }) => {
  const [dataList, setDataList] = useState([]);
  const [showData, setShowData] = useState("");
  const [status, setStatus] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    HeaderData.filter((item) => {
      if (item?.name === isExpand) {
        setDataList(item.child);
      }
    });
  }, [isExpand]);

  return (
    <div className="description w-[85%] mx-auto gap-20 flex pb-5 pt-20 text-xs sm:text-sm text-white">
      <div className="flex flex-col w-[20%] items-start gap-4">
        {dataList &&
          dataList.map((item, index) => {
            if (isExpand == "Buzz") {
              return (
                <div
                  key={index}
                  onClick={() =>
                    navigate(
                      `/buzz/${item?.name
                        .toLowerCase()
                        .replace(/[\s/]+/g, "-")}`
                    )
                  }
                  className="flex gap-1 items-center justify-center cursor-pointer hover:font-bold uppercase"
                >
                  <p>{item?.name}</p>
                </div>
              );
            }
            if (isExpand == "Invest") {
              return (
                <div
                  key={index}
                  onClick={() =>
                    navigate(
                      `/${item?.name.toLowerCase().replace(/[\s/]+/g, "-")}`
                    )
                  }
                  className="flex gap-1 items-center justify-center cursor-pointer hover:font-bold uppercase"
                >
                  <p>{item?.name}</p>
                </div>
              );
            }
            return (
              <div
                key={index}
                onMouseOver={() => setShowData(item?.name)}
                className="flex gap-1 items-center justify-center cursor-pointer hover:font-bold uppercase"
              >
                {item?.name == "Vyug Innovators" ? (
                  <p onClick={() => navigate("/innovators")}>{item?.name}</p>
                ) : item?.name == "Partners" ? (
                  <p onClick={() => navigate("/partners")}>
                    {item?.name}
                  </p>
                ) : (
                  <p
                    onClick={() =>
                      item?.name == "Regions"
                        ? navigate("/regions")
                        : item?.name == "Sectors" && navigate("/sectors")
                    }
                  >
                    {item?.name}
                  </p>
                )}
                {item?.name !== "Vyug Innovators" &&
                  item?.name !== "Partners" && (
                    <img
                      src={icon}
                      className="h-2 ml-2"
                      style={{
                        transition: "transform 0.3s",
                        transform:
                          showData === item?.name
                            ? "rotate(-90deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  )}
              </div>
            );
          })}
      </div>
      <div className="flex justify-start items-center w-[80%] xl:w-[50%] items-center flex-wrap">
        {showData &&
          dataList
            .filter((item) => item?.name === showData)
            .map((filteredItem) =>
              filteredItem?.tag
                ? filteredItem?.tag.map((item, index) => {
                    if (
                      // item?.name === "Privacy Policy" ||
                      item?.name === "Content Policy" ||
                      item?.name === "Security"
                    ) {
                      return (
                        <p
                          onClick={() => setStatus(0)}
                          className="no-underline w-1/3 hover:scale-125 transition-transform duration-500 ease-in-out transform description text-[#fff] flex flex-col my-5 items-center justify-center"
                        >
                          <img
                            src={item?.img}
                            className="h-12 w-12"
                            alt={item?.name}
                            aria-hidden="true"
                          />
                          <p className="description text-[#fff] text-xs sm:text-sm">
                            {item?.name}
                          </p>
                        </p>
                      );
                    }
                    return (
                      <Link
                        key={index}
                        to={item.to}
                        className="no-underline w-1/3 hover:scale-125 transition-transform duration-500 ease-in-out transform description text-[#fff] flex flex-col my-5 items-center justify-center"
                      >
                        {item?.img && (
                          <img
                            src={item?.img}
                            className="h-12 w-12"
                            alt={item?.name}
                            aria-hidden="true"
                          />
                        )}
                        <p className="description text-[#fff] text-xs sm:text-sm">
                          {item?.name}
                        </p>
                      </Link>
                    );
                  })
                : "Coming Soon !"
            )}
      </div>
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </div>
  );
};

export default HeaderDropdown;
