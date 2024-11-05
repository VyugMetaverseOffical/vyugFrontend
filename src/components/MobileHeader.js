import mission from "../images/mobileHeader/mission.svg";
import about from "../images/mobileHeader/about.svg";
import core1 from "../images/mobileHeader/core1.svg";
import core2 from "../images/mobileHeader/core2.svg";
import digital1 from "../images/mobileHeader/digital1.svg";
import digital2 from "../images/mobileHeader/digital2.svg";
import invest1 from "../images/mobileHeader/invest1.svg";
import invest2 from "../images/mobileHeader/invest2.svg";
import innovator from "../images/mobileHeader/innovator.svg";
import trade1 from "../images/mobileHeader/trade1.svg";
import trade2 from "../images/mobileHeader/trade2.svg";
import buzz1 from "../images/mobileHeader/buzz1.svg";
import buzz2 from "../images/mobileHeader/buzz2.svg";
import buzz3 from "../images/mobileHeader/buzz3.svg";
import buzz4 from "../images/mobileHeader/buzz4.svg";

export const MobileHeader = [
  {
    name: "Presence",
    child: [
      {
        name: "Mission/ Vision",
        img: mission,
        to: '/mission-vision'
      },
      {
        name: "About Us",
        img: about,
        to: '/about-us'
      },
      {
        name: "Innovators",
        img: innovator,
        to: '/innovators'
      },
    ],
  },
  {
    name: "Core",
    child: [
      {
        name: "How It's Made",
        img: core1,
      },
      {
        name: "Regions",
        img: core2,
        to: '/regions'
      },
    ],
  },
  {
    name: "Digital Reality",
    child: [
      {
        name: "Partners",
        img: digital1,
        to: '/partners',
      },
      {
        name: "Sectors",
        img: digital2,
        to: '/sectors',
      },
    ],
  },
  {
    name: "Invest",
    child: [
      {
        name: "Investor",
        img: invest1,
        to: '/invest-in-vyug',
      },
      {
        name: "Owner",
        img: invest2,
        to: '/be-an-investor',
      },
    ],
  },
  {
    name: "Map",
    to: "/map",
  },
  {
    name: "Trade",
    child: [
      {
        name: "Policies",
        img: trade1,
        to: '/privacy-policy',
      },
      {
        name: "Trade Centre",
        img: trade2,
        to: '/trade-center/market-place',
      },
    ],
  },
  {
    name: "Token",
    to: "/vyug-token",
  },
  {
    name: "Wallet",
    to: "/wallet",
  },
  {
    name: "PlaySpace",
    to: "/play-space",
  },
  {
    name: "Buzz",
    child: [
      {
        name: "Blogs",
        img: buzz1,
        to: '/buzz/blogs'
      },
      {
        name: "Announcements",
        img: buzz2,
        to: '/buzz/announcements',
      },
      {
        name: "Events",
        img: buzz3,
        to: '/buzz/events',
      },
      {
        name: "News & PR",
        img: buzz4,
        to: '/buzz/pr-news',
      },
    ],
  },
];
