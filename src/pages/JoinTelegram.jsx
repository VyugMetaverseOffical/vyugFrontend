// import Header from "../components/Head";
import bgImg from "../images/join_telegram_bg_img.png";
import logo from "../images/airdrop_vyug_logo.png";
import icon1 from "../images/join_telegram_icon_1.png";
import icon2 from "../images/join_telegram_icon_2.png";
import icon3 from "../images/join_telegram_icon_3.png";
import icon4 from "../images/join_telegram_icon_4.png";

function JoinTelegram() {
  return (
    <div className="relative w-screen h-[200vh]">
      <img
        src={bgImg}
        alt="Vyug"
        className="absolute z-[0] object-cover object-top w-full h-full"
      />
      <div className="absolute z-[1] w-full h-full bg-[#ffffff98]"></div>
      <div className="absolute z-[2] w-[100%] mx-auto pt-16">
        <div className="flex flex-col justify-center items-center gap-1">
          <img
            src={logo}
            alt="VYUG LOGO"
            className="max-w-[8rem] w-[6rem] md:w-[10rem]"
          />
          <h1 className="header text-[#242424] text-lg md:text-4xl">VYUG</h1>
          <h2 className="description text-[#242424] text-lg md:text-2xl">
            Where You Grow
          </h2>
        </div>
        <div className="flex justify-center items-center my-16">
          <a
            href="https://telegram.me/vyugofficial"
            target="_blank"
            className="bg-[#000000] description text-[#ffffff] text-sm md:text-base font-bold px-5 md:px-8 py-2 rounded-[4rem]"
          >
            Join VYUG Telegram Community
          </a>
        </div>
        <div className="flex justify-center items-center my-16">
          <ul className="flex flex-col justify-start items-stretch gap-5 px-4">
            <li className="flex justify-start items-center gap-3 border-0 border-b-[2px] border-solid border-[#000000] pb-3">
              <img src={icon4} alt="Unlock Icon" />
              <p className="description text-[#242424] text-sm md:text-base font-semibold text-start md:text-center flex-1">
                Get early access to the{" "}
                <span className="text-[#9747FF] font-bold">Presale</span>.
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 border-0 border-b-[2px] border-solid border-[#000000] pb-3">
              <img src={icon3} alt="Explore Icon" />
              <p className="description text-[#242424] text-sm md:text-base font-semibold text-start md:text-center flex-1">
                Dive Deep into the Metaverse.
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 border-0 border-b-[2px] border-solid border-[#000000] pb-3">
              <img src={icon2} alt="Community Icon" />
              <p className="description text-[#242424] text-sm md:text-base font-semibold text-start md:text-center flex-1">
                Become a part of our thriving <br />
                community for latest updates.
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 border-0 border-b-[2px] border-solid border-[#000000] pb-3">
              <img src={icon1} alt="Gift Icon" />
              <p className="description text-[#242424] text-sm md:text-base font-semibold text-start md:text-center flex-1">
                Get special prices by participating in <br />
                our giveaways.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3 my-10">
          <a
            href="https://telegram.me/vyugofficial"
            target="_blank"
            className="flex justify-center items-center bg-[#242424] py-3 px-2.5 rounded-[50%]"
          >
            <svg
              width="24"
              height="21"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25556 6.23481C1.25556 6.23481 8.46461 3.23503 10.9684 2.17376C11.924 1.75047 15.1777 0.400879 15.1777 0.400879C15.1777 0.400879 16.6776 -0.188035 16.5506 1.24744C16.5083 1.83636 16.1756 3.90982 15.843 6.14893C15.341 9.32047 14.8028 12.7865 14.8028 12.7865C14.8028 12.7865 14.7181 13.7619 14.0105 13.9275C13.3029 14.0993 12.1357 13.3386 11.924 13.1668C11.7547 13.038 8.79724 11.1363 7.71467 10.21C7.42438 9.95846 7.09175 9.4493 7.75701 8.85425C9.25688 7.46171 11.047 5.72564 12.1357 4.62756C12.6376 4.1184 13.1336 2.93444 11.0531 4.37605C8.09569 6.44952 5.17457 8.39416 5.17457 8.39416C5.17457 8.39416 4.50931 8.81744 3.2574 8.4371C2.00549 8.05676 0.547954 7.5476 0.547954 7.5476C0.547954 7.5476 -0.449942 6.91574 1.25556 6.23481Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://discord.gg/rqSaNCwjTx"
            target="_blank"
            className="flex justify-center items-center bg-[#242424] py-3 px-2.5 rounded-[50%]"
          >
            <svg
              width="25"
              height="20"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9342 1.42599C14.7583 0.883432 13.5231 0.501851 12.2462 0.28125C12.0859 0.567436 11.9018 0.949017 11.777 1.25309C10.423 1.05037 9.04518 1.05037 7.69113 1.25309C7.5486 0.919206 7.38231 0.597247 7.20415 0.28125C5.9273 0.495889 4.68608 0.883432 3.51613 1.43195C1.18811 4.91388 0.5586 8.31233 0.873358 11.6631C2.23929 12.6826 3.77151 13.4577 5.39874 13.9526C5.76695 13.4518 6.08765 12.9271 6.36677 12.3726C5.83822 12.1758 5.32748 11.9314 4.84049 11.6392C4.96521 11.5438 5.08993 11.4485 5.2087 11.3471C8.07122 12.7065 11.391 12.7065 14.2595 11.3471C14.3782 11.4485 14.5089 11.5438 14.6336 11.6392C14.1466 11.9314 13.6359 12.1758 13.1073 12.3726C13.3865 12.9211 13.7131 13.4518 14.0754 13.9466C15.7026 13.4518 17.2348 12.6767 18.6008 11.6571C18.969 7.77574 17.9653 4.40709 15.9402 1.42003L15.9342 1.42599ZM6.75874 9.60613C5.87385 9.60613 5.15525 8.79527 5.15525 7.79958C5.15525 6.8039 5.86197 5.98708 6.75874 5.98708C7.6555 5.98708 8.3741 6.79794 8.36816 7.79362C8.36222 8.78931 7.66144 9.60613 6.75874 9.60613ZM12.6976 9.60613C11.8127 9.60613 11.0941 8.79527 11.0941 7.79958C11.0941 6.8039 11.8008 5.98708 12.6976 5.98708C13.5943 5.98708 14.3129 6.79794 14.301 7.79362C14.2892 8.78931 13.5943 9.60613 12.6976 9.60613Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/vyugofficial"
            target="_blank"
            className="flex justify-center items-center bg-[#242424] py-2.5 px-2.5 rounded-[50%]"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 18.0002C51.3981 19.6289 53.431 21.8711 55.1401 25.2627C56.1601 28.5101 56.2264 31.2112 56.1953 34.6135C56.1889 35.8607 56.1824 37.1078 56.1758 38.3928C56.159 39.6864 56.1423 40.9799 56.125 42.3127C56.116 43.6256 56.107 44.9385 56.0977 46.2912C56.0741 49.5276 56.0382 52.7639 56 56.0002C52.04 56.0002 48.08 56.0002 44 56.0002C43.9394 54.4585 43.8788 52.9168 43.8164 51.3283C43.732 49.3023 43.6473 47.2762 43.5625 45.2502C43.5232 44.2344 43.4839 43.2187 43.4434 42.1721C43.4015 41.1924 43.3596 40.2127 43.3164 39.2033C43.2797 38.3026 43.2431 37.4019 43.2053 36.4738C43.0169 34.2043 42.6263 32.1846 42 30.0002C37.9311 29.6076 37.9311 29.6076 34.3328 31.1792C32.5424 33.6255 32.5716 35.3092 32.4883 38.3244C32.4528 39.3525 32.4174 40.3805 32.3809 41.4397C32.347 43.0474 32.347 43.0474 32.3125 44.6877C32.2783 45.7712 32.2442 46.8546 32.209 47.9709C32.1265 50.647 32.0616 53.3236 32 56.0002C28.04 56.0002 24.08 56.0002 20 56.0002C20 43.7902 20 31.5802 20 19.0002C23.96 19.0002 27.92 19.0002 32 19.0002C32.33 19.6602 32.66 20.3202 33 21.0002C33.5491 20.5155 34.0983 20.0308 34.6641 19.5315C38.7834 16.8311 43.2569 17.2657 48 18.0002Z"
                fill="#FEFEFE"
              />
              <path
                d="M2 19C5.96 19 9.92 19 14 19C14 31.21 14 43.42 14 56C10.04 56 6.08 56 2 56C2 43.79 2 31.58 2 19Z"
                fill="#FEFEFE"
              />
              <path
                d="M11.0004 0.999906C13.4379 2.62491 13.4379 2.62491 15.0004 4.99991C15.6064 8.63623 15.472 10.2831 13.4379 13.3749C10.1009 15.5995 7.9313 15.5002 4.00035 14.9999C2.06285 13.9999 2.06285 13.9999 1.00035 11.9999C0.470749 8.41948 0.341488 5.24012 2.06285 1.99991C5.17945 0.39134 7.56298 0.577772 11.0004 0.999906Z"
                fill="#FEFEFE"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinTelegram;
