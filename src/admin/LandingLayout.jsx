import { Navigate, useNavigate } from "react-router-dom";
import buzzSVG from "./assets/BuzzSVG.svg";
import { useAdminAuth } from "./auth/adminAuthSlice";
import { useEffect } from "react";

function LandingLayout() {
  const sections = [
    {
      title: "Buzz",
      url: "/admin/buzz/blogs",
      src: buzzSVG,
    },
    {
      title: "Key",
      url: "/admin/addKey",
      src: buzzSVG,
    },
  ];

  const { admin, adminAuthToken,fetchAdmin } = useAdminAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(!admin && adminAuthToken){
      fetchAdmin()
    } else if(!admin && !adminAuthToken){
      navigate("/admin/login")
    }
  }, [])


 

  return (
    <div className="flex flex-wrap justify-start items-start gap-6 my-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-3 cursor-pointer bg-[#E8E8E8] w-1/4 h-[150px] rounded-[1rem] drop-shadow-lg hover:scale-110 transition"
          onClick={() => navigate(section.url)}
        >
          <img src={section.src} alt="" className="w-[3.5rem]" />
          <h6 className="header text-xl text-[#242424]">{section.title}</h6>
        </div>
      ))}
    </div>
  );
}

export default LandingLayout;
