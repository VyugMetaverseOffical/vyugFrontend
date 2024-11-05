import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import Header from "../components/header";
import { useState } from "react";

const Investment = () => {
  const [position, setPosition] = useState(false);
  const isAppBarTransparent = true;
  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  return (
    <Grid2 xs={12} container className="flex justify-center">
      <Header isTransparent={isAppBarTransparent} position={true} />
      <Grid2
        xs={11}
        sm={9}
        className="flex justify-center items-center flex-col my-20"
      >
        <Typography variant="h2" className="header text-2xl sm:text-4xl my-20">
          Invest in VYUG
        </Typography>
        <Typography
          variant="subtitle2"
          className="description text-xs sm:text-sm"
        >
          VYUG visions to take virtual reality beyond the sphere of
          entertainment. It is the largest open-world Metaverse platform. When
          you invest in VYUG, you are committing to showing the world the true
          unmatched potential of the Metaverse. When you buy land in VYUG, you
          hold the key to unlocking the boundless opportunities within its
          ecosystem. Here, under the umbrella of augmented reality (AR), virtual
          reality (VR), and extended reality (XR), lies a planet for exploration
          and development that you decide. A land of infinite potential that
          promises borderless education, business growth, and a sound political
          environment. Your investment in VYUG allows you to bend the platform
          the way you like it. <br />
          <br />
          The VYUG Metaverse is creating a future where you can use
          cryptocurrency tokens to learn history by walking through the bylanes
          of ancient Rome and attending concerts with long-distance friends. A
          new digital world where education is accessible to everyone, business
          collaboration in real-time from anywhere, and entertainment that makes
          you celebrate life. Whether you're a student, or professional, or need
          entertainment, the VYUG Metaverse is shaping up to be a game-changer.
          By investing now, you're not just entering a new world, you're helping
          to build it.
        </Typography>
      </Grid2>
      <Footer />
    </Grid2>
  );
};
export default Investment;
