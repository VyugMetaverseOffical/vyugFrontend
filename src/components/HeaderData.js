import iceCaps from "../images/ice-caps.svg";
import desert from "../images/desert.svg";
import plains from "../images/plains.svg";
import beaches from "../images/beaches.svg";
import mountains from "../images/mountains.svg";
import education from "../images/education.svg";
import entertainment from "../images/entertainment.svg";
import games from "../images/games.svg";
import corporate from "../images/corporate.svg";
import commercial from "../images/commercial.svg";
import events from "../images/events.svg";
import tourism from "../images/tourism.svg";
import hospitality from "../images/hospitality.svg";
import funParks from "../images/fun-parks.svg";
import land from "../images/land.svg";
import wearables from "../images/wearables.svg";
import emotes from "../images/emotes.svg";
import privacy from "../images/privacy_policy.svg";
import content from "../images/content_policy.svg";
import security from "../images/security.svg";
import forest from "../images/forest.svg";

export const HeaderData = [
  {
    name: "Presence",
    child: [
      {
        name: "What is Vyug",
        tag: [
          { name: "About us", to: "/about-us" },
          { name: "Mission/ Vision", to: "/mission-vision" },
          // { name: "Mission", to: "/mission" },
        ],
      },
      {
        name: "Vyug Innovators",
        tag: [{ name: "", to: "" }],
      },
    ],
  },
  {
    name: "Core",
    child: [
      {
        name: "Regions",
        tag: [
          { name: "Deserts", to: "/regions/virtual-reality-in-desert", img: desert },
          { name: "Water Body", to: "/regions/virtual-reality-in-water-body", img: iceCaps },
          { name: "Forest", to: "/regions/virtual-reality-in-forest", img: forest },
          { name: "Islands", to: "/regions/virtual-reality-in-island", img: beaches },
          { name: "Plains", to: "/regions/virtual-reality-in-plains", img: plains },
          { name: "Mountains", to: "/regions/virtual-reality-in-mountain", img: mountains },
        ],
      },
      { name: "How it's Made" },
    ],
  },
  {
    name: "Digital Reality",
    child: [
      {
        name: "Sectors",
        tag: [
          { name: "Education", to: "/sectors/virtual-reality-in-education", img: education },
          { name: "Entertainment", to: "/sectors/virtual-reality-in-entertainment", img: entertainment },
          { name: "Sports", to: "/sectors/virtual-reality-in-sports", img: games },
          { name: "Corporate", to: "/sectors/virtual-reality-in-corporate", img: corporate },
          { name: "Commercial", to: "/sectors/virtual-reality-in-commercial", img: commercial },
          { name: "Events", to: "/sectors/virtual-reality-in-event", img: events },
          { name: "Tourism", to: "/sectors/virtual-reality-in-tourism", img: tourism },
          { name: "Sustainability", to: "/sectors/virtual-reality-in-sustainability", img: funParks },
          { name: "Hospitality", to: "/sectors/virtual-reality-in-hospitality", img: hospitality },
        ],
      },
      {
        name: "Partners",
        tag: [{ name: "", to: "" }],
      },
    ],
  },
  {
    name: "Invest",
    child: [{ name: "Invest in Vyug" }, { name: "Be an Investor" }],
  },
  {
    name: "Map",
    to: "/map",
  },
  {
    name: "Trade",
    child: [
      {
        name: "Trade Center",
        tag: [
          { name: "Lands", to: "/trade-center/market-place", img: land },
          { name: "Wearables", to: "/trade-center/market-place", img: wearables },
          { name: "Emotes", to: "/trade-center/market-place", img: emotes },
        ],
      },
      // { name: "White Paper" },
      {
        name: "Policies",
        tag: [
          { name: "Privacy Policy", to: "/privacy-policy", img: privacy },
          { name: "Content Policy", to: "/content-policy", img: content },
          { name: "Security", to: "/security", img: security },
        ],
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
        name: "Announcements",
      },
      {
        name: "Events",
      },
      {
        name: "PR/ News",
      },
      {
        name: "Blogs",
      },
    ],
  },
];
