import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Starter from "../../components/Starter";

const Announcement = lazy(() => import("./Announcment"));
const AnnounceData = lazy(() => import("./Announcment/AnnounceData"));
const Blogs = lazy(() => import("./Blogs"));
const Blog1 = lazy(() => import("./Blogs/Blog1"));
const News = lazy(() => import("./News"));
const NewsPr = lazy(() => import("./News/NewsPr"));
const Events = lazy(() => import("./Events"));
const EventId = lazy(() => import("./Events/Event"));

const Buzz = () => {
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route path="/*" element={<Navigate to="blogs" replace={true} />} />
        <Route path="announcements" element={<Announcement />} />
        <Route path="announcement/:id" element={<AnnounceData />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog1 />} />
        <Route path="pr-news" element={<News />} />
        <Route path="pr-news/:id" element={<NewsPr />} />
        <Route path="events" element={<Events />} />
        <Route path="event/:id" element={<EventId />} />
      </Routes>
    </Suspense>
  );
};

export default Buzz;
