import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Announcements from "./Announcements";
import PRNews from "./PRNews";
import Events from "./Events";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Buzz() {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  const lastPart = pathArr[pathArr.length - 1];
  const initialTab =
    lastPart === "annoucements"
      ? 0
      : lastPart === "blogs"
      ? 1
      : lastPart === "pr-and-news"
      ? 2
      : lastPart === "events" && 3;
  const [value, setValue] = useState(initialTab);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let urlToNavigate = "/admin/buzz";
    if (newValue === 0) {
      urlToNavigate += "/annoucements";
    } else if (newValue === 1) {
      urlToNavigate += "/blogs";
    } else if (newValue === 2) {
      urlToNavigate += "/pr-and-news";
    } else if (newValue === 3) {
      urlToNavigate += "/events";
    }
    navigate(urlToNavigate);
  };

  return (
    <div className="my-10">
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          "& button[aria-selected='true']": {
            color: "#242424 !important",
            fontWeight: 600,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#242424 !important",
          },
        }}
        aria-label="Buzz Tabs"
      >
        <Tab
          label="Announcement"
          {...a11yProps(0)}
          className="description text-[14px]"
        />
        <Tab
          label="Blogs"
          {...a11yProps(1)}
          className="description text-[14px]"
        />
        <Tab
          label="PR & News"
          {...a11yProps(2)}
          className="description text-[14px]"
        />
        <Tab
          label="Events"
          {...a11yProps(3)}
          className="description text-[14px]"
        />
      </Tabs>
      <Routes>
        <Route path="blogs" element={<Blogs />} />
        <Route path="annoucements" element={<Announcements />} />
        <Route path="events" element={<Events />} />
        <Route path="pr-and-news" element={<PRNews />} />
      </Routes>
    </div>
  );
}

export default Buzz;
