import React from "react";
import pre_22 from "../images/pre_22.svg";
import pre_23 from "../images/pre_23.svg";
import pre_24 from "../images/pre_24.svg";
import pre_25 from "../images/pre_25.svg";
import { Divider } from "@mui/material";
import Marquee from "react-fast-marquee";

const PresaleRoadmap = () => {
  return (
    <div>
      <h2 className="header font-transyl mt-20 text-[#fff] text-center text-[25px] md:text-[30px] lg:text-[35px] uppercase">
        vision in action
      </h2>
      <h2 className="description text-[#fff] mb-20 text-center text-[15px] md:text-[20px] lg:text-[20px] pt-2 font-semibold">
        The Strategic Roadmap For VYUG Token
      </h2>
      <Marquee pauseOnHover>
        <section
          className="w-[6450px] flex justify-center items-center my-60 mt-[300px] md:mt-[400px] pt-2 h-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(21, 146, 85, 0.5) 12%, rgba(4, 154, 153, 0.5) 20%, rgba(0, 0, 0, 0.5) 32.5%, rgba(21, 146, 85, 0.5) 43%, rgba(4, 154, 153, 0.5) 49%, rgba(0, 0, 0, 0.5) 60.5%, rgba(21, 146, 85, 0.5) 69.5%, rgba(21, 146, 85, 0.5) 78%, rgba(0, 0, 0, 0.5) 91.5%, rgba(4, 154, 153, 0.5) 100%)",
          }}
        >
          <div className="flex gap-4 w-[750px] items-center px-10">
            <div className="flex w-[10%] justify-start items-end">
              <img src={pre_22} alt="" />
            </div>
            <div className="flex gap-40 w-[90%] relative h-16 items-center">
              <div className="flex flex-col absolute top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q3
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JUL</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">AUG</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">SEP</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Project Ideation
                  </span>{" "}
                  <br />
                  The initial concept and vision for the VYUG metaverse were
                  formulated
                </p>
              </div>
              <div className="flex flex-col absolute left-[50%] bottom-5 gap-2 justify-start items-start">
                <p className="description text-[#fff] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Conceptualization
                  </span>{" "}
                  <br />
                  The project's core features and functionalities were defined
                </p>
                <div className="flex gap-5 items-end">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">OCT</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">NOV</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">DEC</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q4
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[1500px] items-center px-10">
            <div className="flex w-[10%] justify-start items-end">
              <img src={pre_23} alt="" />
            </div>
            <div className="flex gap-40 w-[45%] relative h-16 items-center">
              <div className="flex flex-col absolute top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q1
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JAN</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">FEB</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">MAR</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Research & Development
                  </span>{" "}
                  <br />
                  Technical feasibility and market research were conducted
                </p>
              </div>
              <div className="flex flex-col absolute left-[50%] bottom-5 gap-2 justify-start items-start">
                <p className="description text-[#fff] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Team Formation
                  </span>{" "}
                  <br />A dedicated team was assembled to drive the project
                  forward
                </p>
                <div className="flex gap-5 items-end">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">APR</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">MAY</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">JUN</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q2
                </p>
              </div>
            </div>
            <div className="flex gap-40 w-[45%] relative h-16 items-center">
              <div className="flex flex-col absolute top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q3
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JUL</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">AUG</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">SEP</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Project Naming &World-Design
                  </span>{" "}
                  <br />
                  The project was officially named "VYUG" and the metaverse's
                  core concepts and aesthetics were established
                </p>
              </div>
              <div className="flex flex-col absolute left-[50%] bottom-5 gap-2 justify-start items-start">
                <p className="description text-[#fff] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Project Announcement
                  </span>{" "}
                  <br />
                  The VYUG project was unveiled to the public, generating
                  anticipation and interest
                </p>
                <div className="flex gap-5 items-end">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">OCT</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">NOV</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">DEC</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q4
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[2700px] items-center px-10">
            <div className="flex w-[100px] justify-start items-end">
              <img src={pre_24} alt="" />
            </div>
            <div className="flex gap-40 w-[1000px] relative h-16 items-center">
              <div className="flex flex-col absolute top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q1
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JAN</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">FEB</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">MAR</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    "Nexara" The Capital City
                  </span>{" "}
                  <br />
                  The first major city within the VYUG metaverse was introduced
                  which is also the capital of VYUG
                </p>
              </div>
              <div className="flex flex-col absolute left-[50%] bottom-5 gap-2 justify-start items-start">
                <div className="flex gap-5 items-end">
                  <p className="description text-[#fff] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      Alpha Version Release
                    </span>{" "}
                    <br />
                    The initial version of the VYUG platform was released
                  </p>
                  <p className="description text-[#fff] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      Playspace Announcement
                    </span>{" "}
                  </p>
                </div>
                <div className="flex gap-5 items-end w-full">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col w-[20%] gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">APR</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col w-[20%] gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">MAY</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col w-[80%] gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">JUN</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q2
                </p>
              </div>
            </div>
            <div className="flex gap-40 w-[1600px] relative h-16 items-center">
              <div className="flex flex-col absolute w-[800px] top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q3
                </p>
                <div className="flex gap-5 items-start w-full">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col w-[20%] gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JUL</p>
                  </div>
                  <div className="flex flex-col w-[35%] gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">AUG</p>
                  </div>
                  <div className="flex flex-col w-[35%] gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">SEP</p>
                  </div>
                </div>
                <div className="flex gap-16 items-end">
                  <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      VYUG Token
                    </span>{" "}
                    <br />
                    Introduced "VYUG token" The economy of the VYUG Metaverse
                  </p>
                  <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      VYUG Token Airdrop
                    </span>{" "}
                    <br />A distribution of VYUG tokens to early supporters and
                    community members was conducted
                  </p>
                  <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      Beta Version Release
                    </span>{" "}
                    <br />A more refined version of the VYUG platform has been
                    released
                  </p>
                </div>
              </div>
              <div className="flex flex-col absolute left-[50%] w-[700px] bottom-5 gap-2 justify-start items-start">
                <div className="flex gap-16 items-end">
                  <div className="flex flex-col gap-3">
                    <p className="description text-[#fff] text-sm md:text-base text-left">
                      <span className="header text-base text-[#fff]">
                        Partnership & Presale
                      </span>{" "}
                      <br /> <br />
                      &#9702; Partnerships with visionary brands of the Web3
                      community for promotion <br />
                      &#9702; Launch of the Presale of VYUG tokens <br />
                      &#9702; V1: Turbo Track, Racing game will be launched on
                      meta quest store publicly
                    </p>
                  </div>
                  <p className="description text-[#fff] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      New Region
                    </span>{" "}
                    <br />
                    Haas region announcement
                  </p>
                  <p className="description text-[#fff] text-sm md:text-base text-left">
                    <span className="header text-base text-[#fff]">
                      Map & Marketplace
                    </span>{" "}
                    <br /> <br />
                    &#9702; 3D map of vyug metaverse <br />
                    &#9702; Decentralized marketplace launch
                  </p>
                </div>
                <div className="flex gap-5 items-end w-full">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 w-[10%] justify-center items-center">
                    <p className="description text-xs text-[#fff]">OCT</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-[40%] justify-center items-end">
                    <p className="description text-xs text-[#fff]">NOV</p>
                    <Divider
                      className="h-[32px] bg-[#fff] mr-3"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-[40%] justify-center items-center">
                    <p className="description text-xs text-[#fff]">DEC</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q4
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[1900px] items-center px-10">
            <div className="flex w-[100px] justify-start items-end">
              <img src={pre_25} alt="" />
            </div>
            <div className="flex gap-40 w-[800px] relative h-16 items-center">
              <div className="flex flex-col absolute w-[400px] top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q1
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JAN</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">FEB</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">MAR</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Cex exchanges listing
                  </span>{" "}
                </p>
              </div>
              <div className="flex flex-col absolute w-[400px] left-[50%] bottom-5 gap-2 justify-start items-start">
                <p className="description text-[#fff] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Marketing, Collaboration & Expansion
                  </span>{" "}
                </p>
                <div className="flex gap-5 items-end">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">APR</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">MAY</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <p className="description text-xs text-[#fff]">JUN</p>
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                  </div>
                </div>
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q2
                </p>
              </div>
            </div>
            <div className="flex gap-40 w-[800px] relative h-16 items-center">
              <div className="flex flex-col absolute w-[400px] top-5 gap-2 justify-end items-start">
                <p className="header font-transyl text-[#fff] text-base sm:text-lg md:text-xl">
                  Q3
                </p>
                <div className="flex gap-5 items-start">
                  <Divider
                    className="h-[100px] ml-3 w-[2px] bg-[#fff]"
                    orientation="vertical"
                  />
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">JUL</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">AUG</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <Divider
                      className="h-[32px] bg-[#fff]"
                      orientation="vertical"
                    />
                    <p className="description text-xs text-[#fff]">SEP</p>
                  </div>
                </div>
                <p className="description text-[#fff] w-[50%] text-sm md:text-base text-left">
                  <span className="header text-base text-[#fff]">
                    Governance token launch
                  </span>{" "}
                </p>
              </div>
              <div className="flex flex-col absolute left-[50%] w-[400px] bottom-5 gap-2 justify-start items-start">
                <p className="header uppercase text-[#fff]">
                  soon to be released
                </p>
              </div>
            </div>
          </div>
        </section>
      </Marquee>
    </div>
  );
};

export default PresaleRoadmap;
