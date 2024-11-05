import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import blogBg from "../../../images/Blog/blogBg.webp";
import blog2 from "../../../images/Blog/blog2.webp";
import blog2_2 from "../../../images/Blog/blog2_2.webp";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";

function Blog2() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="w-full -z-10 h-[50vh] relative">
        <img
          className="h-[100%] w-[100%]"
          src={blogBg}
          alt="BG Blogs"
          aria-hidden="true"
        />
        <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center"></div>
      </div>
      <div className="mb-20 w-[95%] md:w-[80%] z-10 -mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-5 md:p-10">
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-sm"
        >
          October 8, 2024 | COMMUNITY
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          className="header text-[#111113] text-start text-3xl sm:text-4xl md:text-[45px] mt-3"
        >
          Experience First-ever Dussehra Celebration in the VYUG Metaverse!
        </Typography>
        <p className="w-[100%] flex justify-start items-start my-4 mt-6">
          <img
            className="h-[100%] w-[100%] object-contain object-left"
            src={blog2_2}
            alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
            aria-hidden="true"
          />
        </p>
        <div className="w-full pt-6 flex flex-col gap-4">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
          >
            Dussehra, one of the most celebrated Indian festivals, is around the
            corner. VYUG, being the ultimate metaverse platform of this
            generation, brings a grand gesture for you. We bring you a visual
            treat this Dussehra. Experience the vibes of this epic festival. The
            metaverse has never witnessed the essence of culture and history.
            VYUG tends to empower the future generation with the right seeds of
            tradition, culture, and history. The festival of Dussehra is a
            symbolic representation of Hindu mythology's rich heritage and
            culture. With stories rooted in the Treta Yug, Ram and Ravan's
            characters have long represented the extreme sides of human
            existence, which are ‘the good’ and ‘the bad’. This Dussehra, VYUG,
            brings you a holistic metaverse experience where you can get iconic
            glimpses of the{" "}
            <strong>First-Ever Dussehra in the Metaverse</strong>. Immerse
            yourselves in the journey of victory of the good over the bad.
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Celebrate the First-Ever Virtual Dussehra
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG presents you with the sacred victory of Lord Ram over Ravan.
            Who could imagine seeing the golden infrastructure of Ravan’s Lanka
            in the metaverse? Who could think of{" "}
            <a
              // href="https://www.dussehra-celebration.vyugmetaverse.com/"
              href="https://www.vyugmetaverse.com/stream-announcement"
              onClick={(e) => {
                e.preventDefault()
                navigate("/stream-announcement")
              }}
              // target="_blank"
              className="font-bold text-[#006BFF]"
            >
              Celebrating Dussehra Virtually
            </a>
            ? VYUG is here to bring all these imaginations to reality. Virtual
            reality will now move beyond just games and virtual blocks. VYUG has
            presented the first-ever hyper-realistic metaverse. It brings
            forward immersive cultural experiences. VYUG is aimed at providing
            every person with a treat of the metaverse without moving away from
            the roots of culture.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            We bring you the ultimate jewels of Treta Yug, the Yug that inspired
            us to follow the paths of Satya and become the ideal humans by
            thrashing away the evil inside us. The Sanatan Dharm has always
            worshipped Lord Ram for his Maryada Purushottam Avatar. This avatar
            made us believe that the eternal essence of humanity lies in the
            sacred and good-deed characters.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Today society is witnessing many unfortunate scenes of darkness.
            Violence, Wars, Terrorism, Discriminations, and whatnot. These evils
            slowly dig a hole inside our souls and sit down as a power set to
            diminish our humanity. VYUG brings a virtual discovery for everyone
            to introspect, evacuate the evil powers within us, and move on to
            the paths of Sanskriti, Satkarm, and Maryada.
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Thrash Your Inner Demons with VYUG
          </Typography>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/7RjXrXCmb3Y?si=UI_ddfAGtn698XkU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG’s Dussehra celebration campaign doesn’t just celebrate the
            festival; it offers a personal transformation experience. We don’t
            limit our celebrations to just wishes, visuals, and feasts. We want
            everyone to experience this holy festival with an immersive
            experience. We want you to own the festival of Dussehra and
            celebrate it. Ravan symbolizes evil traits, and every Dussehra
            brings you a chance to fight through the Ravan sitting inside you.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            But this time make it happen with VYUG. VYUG Dussehra celebration is
            unique. Each of Ravana’s ten heads represents traits like anger,
            greed, laziness, ego, and whatnot. We’re giving users a chance to
            introspect, choose the vice they want to conquer, and symbolically
            defeat it in the virtual world. The campaign encourages users to
            reflect on their inner challenges while celebrating this ancient
            holy festival.
          </Typography>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Merge of Sanskriti and Takneek
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG presents you with the fusion of ancient vibes of VijayDashmi
            and modern-era technologies. The holy traits of Lord Ram and the
            sayings of the Ramayana were blurring away from our visions. The
            mighty heroics of Sugreev and Hanuman that shook the entire Lanka
            and the ultimate celebrations in the land of Awadh have all become
            history now. We must bring back these heroics and these celebrations
            today. We should make the next generation familiar with the roots of
            our Sanatan Dharm. Technology has brought us together, and this is
            the best road to rebuild the vibes of our Hindu Sanskriti and Lord
            Ram’s visions.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG, a synonym for next-gen technology, brings you the ultimate
            platform to revisit the ultimate Ravan Wadh. Feel like you’re in the
            lands of Lanka, witnessing the epic battles of Ramayana. Get the
            first-ever chance to immerse yourself in the virtual reality version
            of the epic Dussehra celebrations with the{" "}
            <a
              href="https://www.vyugmetaverse.com/"
              className="font-bold text-[#006BFF]"
            >
              VYUG Metaverse
            </a>
            .
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Technology is all about bringing together futuristic innovations and
            deep-rooted traditional values. Lord Ram depicts the core
            traditional values of humanity in the best sense. A character like
            Ram is the need of society today. We need humane ethics to get
            better and uplift the future. Merging this need with the nuances of
            technology is what VYUG sets as its mission. This Dussehra, we march
            forward with this mission and provide a chance to stand at the
            merging bridge of Sanskriti and Takneek and move ahead to an
            enlightened future.
          </Typography>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Enjoy Dussehra in the Metaverse
          </Typography>
          <p className="w-[100%] flex justify-start items-start my-4">
            <img
              className="h-[100%] w-[100%] object-contain object-left"
              src={blog2}
              alt="Dussehra Celebration in VYUG Metaverse!"
              aria-hidden="true"
            />
          </p>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Set your alarms high. This Dussehra, visit the vibes of Dhanush and
            Baans through 3-D simulations and virtual reality. Celebrate the
            victory of good over evil in the world of virtual reality. Witness
            the iconic thrashing of the ten-headed monster in the metaverse.
            Celebrate and discover the historic moments with VYUG.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Our platform brings you an extraordinary surreal visit to the
            history and culture of Hinduism and takes you to the ultimate
            discovery of the Ram within us.
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Is Dussehra, Khud ko Samjho! Khud ko Badlo!
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The sides of evil and the sacred are both within us. Dussehra is all
            about burning the ‘Ravan within us’ and celebrating the inheritance
            of the ‘Ram within us’.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG stands as a flag bearer of humanity. We want our users to
            experience the values of Ramayana in modern technology.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG brings you a unique immersive experience this Dussehra to
            vanquish the evils inside you. Witness Ravana's ten heads
            representing different evil traits. Choose the ones that you feel
            lie inside you. Battle your inner demons and defeat them with your
            bow and arrow in an extraordinary metaverse experience!
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            With the slogan ‘Khud ko samjho, Khud ko badlo’, VYUG urges the
            whole world to join hands with our metaverse platform, discover the
            holy side of humanity, and vanquish the evils of society.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Join the unique{" "}
            <a
              href="https://www.vyugmetaverse.com/buzz/blogs/first-ever-metaverse-dussehra-celebration"
              className="font-bold text-[#006BFF]"
            >
              VYUG Dussehra Experience
            </a>{" "}
            and witness the authentic cultural essence of Dussehra, Ramayan, and
            Sanatan Dharm.
          </Typography>
          <div className="flex gap-5 items-center mt-6">
            <button
              onClick={() => navigate("/buzz/blogs")}
              className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase"
            >
              &lt; Back
            </button>
            <RWebShare
              data={{
                url: window.location.href,
                title: "Check it out this article",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase">
                Share <ShareIcon fontSize="25px" />
              </button>
            </RWebShare>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog2;
