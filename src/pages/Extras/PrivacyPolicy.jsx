import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import SideIcon from "../../components/side-icon";
import Header from "../../components/Head";
import Searchbar from "../../components/Searchbar";
import { InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Vyug_LOGO from "../../images/vyugMobile.webp";
import { Link } from "react-router-dom";
import s2 from "../../images/socialIcons/telegramGray.svg";
import s3 from "../../images/socialIcons/discordGray.svg";
import s4 from "../../images/socialIcons/linkedin.png";
import t2 from "../../images/socialIcons/telegram.svg";
import t3 from "../../images/socialIcons/discord.svg";
import t4 from "../../images/socialIcons/linkedin.svg";
import { Helmet } from "react-helmet-async";

const Articles = [
  {
    id: 1,
    title: "Introduction",
    url: "introduction",
  },
  {
    id: 2,
    title: "Information on the VYUG Wallet Mobile App",
    url: "info-on-vyug-wallet-mobile-app",
  },
  {
    id: 3,
    title: "Information We Collect",
    url: "information-we-collect",
  },
  {
    id: 4,
    title: "How We Use Your Information",
    url: "how-we-use-your-information",
  },
  {
    id: 5,
    title: "Sharing Your Information",
    url: "sharing-your-information",
  },
  {
    id: 6,
    title: "Data Security",
    url: "data-security",
  },
  {
    id: 7,
    title: "Your Rights and Choices",
    url: "your-rights-and-choices",
  },
  {
    id: 8,
    title: "Data Deletion",
    url: "data-deletion",
  },
  {
    id: 9,
    title: "Age restriction and Children's Privacy",
    url: "age-restriction-and-childrens-privacy",
  },
  {
    id: 10,
    title: "Changes to This Privacy Policy",
    url: "changes-to-this-privacy-policy",
  },
];

const PrivacyPolicy = () => {
  const [position, setPosition] = useState(false);
  const [active, setActive] = useState("introduction");
  const [search, setSearch] = useState("");
  const [img, setImg] = useState(-1);
  const [timeAgo, setTimeAgo] = useState("");
  const date = "2024-08-22T00:00:00Z";

  useEffect(() => {
    const calaculateTimeAgo = () => {
      const now = new Date();
      const past = new Date(date);

      const diffTime = now - past;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        setTimeAgo("Today");
      } else if (diffDays === 1) {
        setTimeAgo("1 Day Ago");
      } else {
        setTimeAgo(`${diffDays} Days Ago`);
      }
    };
    calaculateTimeAgo();

    // Update the time every Day
    const intervalId = setInterval(calaculateTimeAgo, 86400000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleScrollToArticle = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 150;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActive(id);
      // element.scrollIntoView({ behavior : 'smooth'});
    }
  };

  const highlightText = (text) => {
    if (!search) {
      return text;
    }
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Social_Icons = [
    {
      name: "telegram",
      link: "https://telegram.me/vyugofficial",
      image: s2,
      colorImg: t2,
    },
    {
      name: "discord",
      link: "https://discord.gg/rqSaNCwjTx",
      image: s3,
      colorImg: t3,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/vyugofficial/",
      image: s4,
      colorImg: t4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - VYUG Metaverse</title>
        <meta name="description" content="Privacy Policy" />
        <meta name="keywords" content="Privacy Policy" />
        <meta property="og:title" content="Privacy Policy" />
        <meta property="og:description" content="Privacy Policy" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/privacy-policy"
        />
      </Helmet>

      <div className="min-h-screen w-full">
        <Header isTransparent={position} isHeaderText={true} />
        <SideIcon />
        <div className="w-[90%] mx-auto pt-32">
          <div className="w-full md:w-[45%] ml-auto">
            <Searchbar
              onSearch={setSearch}
              placeholder={"Search"}
              InputProps={{
                endAdornment: (
                  <InputAdornment className="me-4" position="end">
                    <SearchIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="w-full xl:w-[97%] mx-auto flex flex-col md:flex-row md:justify-between items-start">
            <div className="relative w-full hidden md:block md:w-[32%] lg:w-[25%] xl:w-[24%] flex flex-col justify-center mt-20">
              <div className="absolute w-full left-0 overflow-hidden">
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="header text-right text-sm md:text-lg text-[#242424]"
                >
                  Articles in this section
                </Typography>
                <br />
                {Articles.map((item) => (
                  <Typography
                    key={item?.id}
                    onClick={() => handleScrollToArticle(item?.url)}
                    variant="subtitle2"
                    component={"p"}
                    className={`description ${
                      item?.url === active &&
                      "pr-4 bg-[#242424] py-2 text-[#fff]"
                    } text-right text-[#6D6A6A] text-sm md:text-base rounded-lg mb-3 text-left cursor-pointer`}
                  >
                    {item?.title}
                  </Typography>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%] flex flex-col mt-10 justify-center">
              <div className="w-full mr-auto my-10">
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="header text-left font-semibold text-3xl sm:text-4xl lg:text-[45px]"
                >
                  VYUG Privacy Policy
                </Typography>
                <div className="flex gap-8 justify-center items-center mt-7">
                  <img className="h-20 w-20" src={Vyug_LOGO} alt="" />
                  <div className="w-full flex flex-col gap-2">
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      className="header font-semibold text-sm"
                    >
                      VYUG
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      className="description text-sm"
                    >
                      {timeAgo} . &nbsp; Updated
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-5 md:hidden">
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-base md:text-lg text-[#242424]"
                >
                  Articles in this section
                </Typography>
                <br />
                {Articles.map((item) => (
                  <Typography
                    key={item?.id}
                    onClick={() => handleScrollToArticle(item?.url)}
                    variant="subtitle2"
                    component={"p"}
                    className={`description ${
                      item?.url === active &&
                      "pl-2 bg-[#242424] py-2 text-[#fff]"
                    } text-left text-[#242424] text-base md:text-lg rounded-lg mb-3 text-left cursor-pointer`}
                  >
                    {item?.title}
                  </Typography>
                ))}
              </div>
              <div className="w-full flex flex-col mt-10">
                <Typography
                  id="introduction"
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Introduction`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`Welcome to VYUG. We are a platform that promises to bring you the
            best immersive experiences. Your privacy is of utmost importance to
            us.`)}{" "}
                  <br /> <br />
                  {highlightText(`This Privacy Policy explains how we collect, use, share, and protect
            your personal information when you visit our website, use our
            services, or interact with our platform.`)}{" "}
                  <br /> <br />
                  {highlightText(
                    `By using VYUG, you agree to the terms of this Privacy Policy.`
                  )}
                </Typography>{" "}
                <br />
                <Typography
                  id="info-on-vyug-wallet-mobile-app"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Information on the VYUG Wallet Mobile App`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`VYUG has its own VYUG wallet mobile application, which is available
            to download from multiple stores for iOS, android, etc. This
            application, just like our website, follows all our norms of privacy
            policy`)}{" "}
                  <br /> <br />
                  {highlightText(`In this application, we collect your personal information, your
            contact number, your email address, etc. Moreover, location and
            contact information, media access information shall also be taken in
            account for better backend and frontend access to user information
            and distinctive privacy.`)}{" "}
                  <br /> <br />
                  {highlightText(`We also automatically gather information about your device when you
            use our application, this information includes Mobile device type,
            Operating System, etc.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="information-we-collect"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  Information We Collect
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`Personal Information: We may collect personal information that you
            provide to us directly, such as your name, email address, phone
            number, date of birth, and payment information when you sign up,
            make any sort of purchase, or contact us for support.`)}{" "}
                  <br /> <br />
                  {highlightText(`Cookies Dynamics: We use cookies and similar tracking technologies
            to enhance your experience on our platform. These technologies help
            us understand how you interact with our platform, personalize your
            experience, and deliver relevant content.`)}{" "}
                  <br /> <br />
                  {highlightText(`Device Data: We might automatically gather information about your
            device when you use our services or browse our website, these
            information include Device Type, IP address, browser type, Operating
            System, etc.`)}{" "}
                  <br /> <br />
                  {highlightText(`Location and Media Access: While using our mobile application, users
            will be required to, at places, upload a few images/visuals/media
            files, for reference. Along with these, the location information of
            the users will also be taken for better update on information and
            convenience of access.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="how-we-use-your-information"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`How We Use Your Information`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`To Provide and Improve Services: We use your information to deliver,
            maintain, and enhance our services, including personalizing content,
            processing transactions, and providing customer support.`)}{" "}
                  <br />
                  {highlightText(`To Communicate with You: We may use your contact information to send
            you updates, promotional offers, and important notices related to
            your account or our services.`)}{" "}
                  <br />
                  {highlightText(`For Security Purposes: Your information helps us detect and prevent
            fraudulent activities, monitor for security threats, and ensure the
            safety of our platform and users.`)}{" "}
                  <br />
                  {highlightText(`For Legal Compliance: We may use your information to comply with
            legal obligations, respond to government requests, or protect our
            legal rights.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="sharing-your-information"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Sharing Your Information`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`Third-Party Service Providers: We may share your information with
            trusted third-party service providers who assist us in operating our
            platform, processing payments, and delivering services. These
            providers are contractually obligated to protect your information
            and use it only for the purposes specified by us.`)}{" "}
                  <br />
                  {highlightText(`Business Transfers: In the event of a merger, acquisition, or sale
            of assets, your information may be transferred to the new entity. We
            will notify you of any such change in ownership or control of your
            personal information.`)}{" "}
                  <br />
                  {highlightText(`Legal Requirements: We may disclose your information if required to
            do so by law, or in response to a valid request by public
            authorities.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="data-security"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Data Security`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`We implement robust security measures to protect your information
            from unauthorized access, alteration, disclosure, or destruction.`)}{" "}
                  <br />
                  {highlightText(`These measures include encryption, secure socket layer (SSL)
            technology, regular security audits,etc. However, please note that
            no method of transmission over the internet or electronic storage is
            completely secure, and we also cannot guarantee absolute security.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="your-rights-and-choices"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Your Rights and Choices`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`Access and Update: You have the right to access and update your
            personal information. You can do so by logging into your account or
            contacting us directly.`)}{" "}
                  <br />
                  {highlightText(`Opting Out: You may opt out of receiving promotional communications
            from us by following the unsubscribe instructions provided in the
            emails or by contacting us. Please note that you may still receive
            non-promotional communications, such as updates related to your
            account or our services.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="data-deletion"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Data Deletion`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`You can request the deletion of your personal information by
            contacting us. We will take reasonable steps to delete your data,
            except where we are required to retain it for legal or business
            purposes. For this deletion, users will need to reach out to us to
            confirm their deletion and to proceed further for erasing all the
            user information and access.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="age-restriction-and-childrens-privacy"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Age restriction and Children's Privacy`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`VYUG is not intended for use by individuals under the age of 13. We
            do not knowingly collect personal information from children under
            this age. If we become aware that any under-age child user has
            provided us with personal information, we will take steps to delete
            such information from our records.`)}
                </Typography>{" "}
                <br />
                <Typography
                  id="changes-to-this-privacy-policy"
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  {highlightText(`Changes to This Privacy Policy`)}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  {highlightText(`Our Privacy Policy is subjected to changes/developments and we may
            update our policies from time to time to reflect changes according
            to our development and requirements. We shall , but not obliged to,
            notify our users of any significant changes by updating the policies
            on our website. We encourage you to review this Privacy Policy
            periodically.`)}
                </Typography>{" "}
                <br />
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="header text-left text-sm md:text-sm text-[#242424]"
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  For any queries or updates related to our privacy policy or
                  any other specific matter, users are advised to contact us on
                </Typography>{" "}
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  Our Discord Page:{" "}
                  <Link
                    to="https://discord.gg/rqSaNCwjTx"
                    className="no-underline text-[#9747FF]"
                  >
                    VYUG Discord Page
                  </Link>
                </Typography>{" "}
                <br />
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-sm text-[#6D6A6A]"
                >
                  Our Email:{" "}
                  <a
                    href="mailto:support@vyug.io"
                    className="no-underline text-[#9747FF]"
                  >
                    support@vyug.io
                  </a>
                </Typography>{" "}
                <br />
              </div>
              <div className="flex gap-5 items-center mb-20">
                {Social_Icons.map((item, index) => {
                  return (
                    <Link
                      target="__blank"
                      to={item.link}
                      key={index}
                      onMouseEnter={() => setImg(index)}
                      onMouseLeave={() => setImg(-1)}
                      className="no-underline flex justify-center header text-center w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh]"
                    >
                      {img === index ? (
                        <img
                          className="transition tarnsform-transition duration-150 ease-in-out hover:scale-125"
                          width={"100%"}
                          height={"100%"}
                          src={item.colorImg}
                          alt={item.name}
                        />
                      ) : (
                        <img
                          className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                          width={"100%"}
                          height={"100%"}
                          src={item.image}
                          alt={item.name}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
