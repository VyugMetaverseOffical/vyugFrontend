import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import SideIcon from "../../components/side-icon";
import Header from "../../components/Head";
import Searchbar from "../../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import s2 from "../../images/socialIcons/telegramGray.svg";
import s3 from "../../images/socialIcons/discordGray.svg";
import s4 from "../../images/socialIcons/linkedin.png";
import t2 from "../../images/socialIcons/telegram.svg";
import t3 from "../../images/socialIcons/discord.svg";
import t4 from "../../images/socialIcons/linkedin.svg";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  const [position, setPosition] = useState(false);
  const [img, setImg] = useState(-1);
  const [search, setSearch] = useState("");

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
        <title>Terms Of Use - VYUG Metaverse</title>
        <meta name="description" content="Terms Of Use" />
        <meta name="keywords" content="Terms Of Use" />
        <meta property="og:title" content="Terms Of Use" />
        <meta property="og:description" content="Terms Of Use" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/terms-of-use"
        />
      </Helmet>
      <div className="min-h-screen">
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
          <div className="w-full md:w-[50%] mr-auto my-10">
            <Typography
              variant="h1"
              className="header text-left font-semibold text-3xl sm:text-4xl lg:text-[45px]"
            >
              Terms Of Use
            </Typography>
          </div>
          <div className="w-full flex flex-col mt-20">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`The VYUG terms of use, which are coined by VYUG, are meant to be
            governed or to be referred in case of user activity on the VYUG
            website or the VYUG wallet mobile application, which are
            subsidiaries of VYUG, a metaverse platform integrated to provide
            immersive new age technology experience to all its users. These
            terms of use, for all right reasons, must be used as a reference for
            usage, or for legal research and procedures as well.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`Agreement`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`By agreeing to below mentioned terms of use, you agree to our terms,
            and privacy policy norms. If you do not agree to these terms or
            privacy policy, you are advised to not use our website/application.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`Eligibility`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`Our platform is intended to be used for all the users over the age
            of 13. VYUG is not for use by individuals under the age of 13. Other
            than this, we do not entertain any other restriction criteria and
            welcome all sorts of users, from any community, religion, class and
            country. Any person or place, or any identity of that sort, which is
            restricted by the applicable laws of their respective countries or
            areas of references, are not eligible to use this platform, for
            obvious legal reasons.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`Code of Conduct`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`You commit to using the VYUG mobile wallet application and Vyug in
            an orderly and considerate manner. Users are strictly advised to
            ensure that they must not:`)}
            </Typography>{" "}
            <br />
            <ul className="ps-5 text-left mt-4 text-[#6D6A6A] description text-sm gap-4 list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMTEgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUuNSIgY3k9IjUuNSIgcj0iNS41IiBmaWxsPSIjMjQyNDI0Ii8+Cjwvc3ZnPgo=)]">
              <li>
                {highlightText(`Participate in any conduct that breaches the law or the rights of
              other people.`)}
              </li>
              <li>
                {highlightText(`Circulate any offensive, pornographic, dangerous, or improper
              content within the platform.`)}
              </li>
              <li>
                {highlightText(`Use our platform's identity to Harass, threaten, or intimidate
              people.`)}
              </li>
              <li>
                {highlightText(`Try to access other people's accounts or Vyug's systems without
              authorization.`)}
              </li>
              <li>
                {highlightText(`Perform any commercial use of Vyug without our prior written
              consent.`)}
              </li>
            </ul>
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`Registration and Use`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`The users, while registering on VYUG website or the VYUG Wallet
            mobile application, are hereby informed to agree to our terms and
            conditions, and go through the complete registration procedure, and
            provide us with accurate information, identifications which is true
            to their knowledge.`)}{" "}
              <br /> <br />
              {highlightText(`Our registration procedures also require various kinds of access to
            information like personal identity, date of birth, location,
            contacts, media files, etc, users are advised to provide true
            information of all these while registering themselves.`)}{" "}
              <br /> <br />
              {highlightText(`A key factor to note here is that for various kinds of transactions within
            our mobile application or website, or for any redemption of rewards
            on our platforms, users need to do their KYC verification, which is
            an essential criteria, and shall not be ideally compromised upon in
            any case or scenario.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`Ownership of Content`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`By using VYUG, you will come across various content, which include,
            but is not limited to, multiple kinds of images, visuals, logos,
            illustrations, videos, texts, informations, audios, graphics, etc,
            which are made available through our services. These Contents are
            owned, in true sense, by VYUG. This list excludes any in-app asset
            owned by you, or any distinctive data of yours, these assets and
            data shall, until obliged by any issue, remain the property of yours
            only.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Virtual Assets and VYUG Token
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`VYUG is a metaverse platform and users shall perform various kinds
            of in-app purchases, or NFT-based transactions, and possess multiple
            sorts of virtual assets within our platforms. Our wallet mobile
            application also offers various blockchain transactions, to
            facilitate users with transactions of cryptocurrencies and
            blockchains. These virtual assets are not real-world assets and have
            no intrinsic value outside of the Vyug platform. We also offer NFT-
            based transactions as our platform experience. And for this, we have
            our own metaverse token, named 'VYUG Token', this token is intended
            to facilitate all kinds of in-app purchases and NFT-based
            transactions, and is available on all sorts of blockchains.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              The Right to Access
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`By agreeing to our terms of use, you give us consent to get access
            to all the information you provide. We ensure that no other sort of
            private or objectionable information is asked by our platform. In
            case such information is asked, using the name of our platform,
            immediately reach out to us and do not entertain any such activity.
            Moreover, if any user is found out to provide any sort of illegal,
            or unethical information, or is found out to use or access data, or
            in-app authorities, for any unethical reason or means, shall be
            immediately subjected to various strict actions by our authority.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              {highlightText(`VYUG Mobile Wallet App`)}
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              <span className="font-semibold">Functions : </span>{" "}
              {highlightText(`Users can safely
            store, manage, and exchange digital assets, such as NFTs and VYUG
            Tokens, through the VYUG mobile wallet application. From the app,
            users can also manage their virtual items, collect prizes, and take
            part in airdrops.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              <span className="font-semibold">Security : </span>{" "}
              {highlightText(`We give careful
            consideration to how your digital assets are secured. To safeguard
            your assets, the mobile wallet uses cutting-edge encryption and
            security procedures. But you are in charge of protecting your mobile
            device's security and your account credentials.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              <span className="font-semibold">Trading : </span>{" "}
              {highlightText(`Through our mobile
            wallet application, users will be able to trade through multiple
            cryptocurrencies, and even swap their VYUG tokens with the
            cryptocurrency of their choice. Any use of this platform is, as
            directed, as a normal trading or a wallet application, although a
            few features are specific. We don't encourage or entertain any
            unethical financial transactions through this application. Users are
            advised to foresee their financial risks and abilities whenever they
            choose to opt for trading through our application.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              <span className="font-semibold">KYC Requirements : </span>
              {highlightText(`Users must finish a KYC verification process in order to withdraw or
            deposit digital assets, execute transactions, or take part in
            specific activities within the Vyug wallet. Your ability to use
            specific wallet features may be restricted if you don't finish the
            KYC process.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              <span className="font-semibold">Fees/Charges : </span>
              {highlightText(`Users are hereby informed that VYUG wallet app does not include any
            in-app charges or GAS Fees. We also do not entertain any kind of
            hidden charges. If any third-party transactions are obliged to GAS
            fees or charges, those shall be acted upon, in as it is form.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Disclaimers
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`Vyug is offered "as is available" with no implicit or explicit
            guarantees of any sort. We do not promise that Vyug will function
            flawlessly, without errors, or in a secure manner. These guarantees,
            even if they come from any of our platforms, unintentionally, are
            advised not to be entertained.`)}{" "}
              <br /> <br />
              {highlightText(`Regarding the operation of the services, as well as the information,
            content, materials, products (including software), and other
            services included on or otherwise made available to you through the
            services, our platform makes no representations or warranties of any
            kind, either explicit or implied. It is your sole risk to use the
            services, as soon as you agree to their usage.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Suspension and Termination
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`If we find any sort of occurrence of unethical activities, such as
            behaviour that we determine to be detrimental to our community or
            for violating these terms of use, we are free to terminate or
            suspend, or take other actions, on the respective user.`)}{" "}
              <br /> <br />
              {highlightText(`We retain the right to suspend or terminate these accounts or their
            access to the Vyug platform and mobile wallet, without any prior
            notice, though, they shall be notified about these actions in most
            of the cases.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Privacy Norms
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`We collect, use, and protect your personal information in accordance
            with our Privacy Policy, which governs how you use Vyug and the
            mobile wallet. Users who want detailed information on our privacy
            policy can check it on our website and give a thorough check.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Changes
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`Our Terms of use are subject to changes/ developments and we may
            update our policies from time to time to reflect changes according
            to our development and requirements. We shall , but not obliged to,
            notify our users of any significant changes by updating the policies
            on our website. We encourage you to review these terms at regular
            intervals of time.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Feedback
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              {highlightText(`We, at VYUG, are open to all sorts of feedback or reviews. If you
            think that your suggestions can help us improve and develop our
            platform, or our terms, your suggestions are welcome with full
            heart.`)}
            </Typography>{" "}
            <br />
            <Typography
              variant="h1"
              className="header text-left text-sm md:text-sm text-[#242424]"
            >
              Contact Us
            </Typography>
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-left text-sm md:text-sm text-[#6D6A6A]"
            >
              For any queries or updates related to our privacy policy or any
              other specific matter, users are advised to contact us on
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
                  key={index}
                  to={item.link}
                  target="__blank"
                  onMouseEnter={() => setImg(index)}
                  onMouseLeave={() => setImg(-1)}
                  className="no-underline flex justify-center text-center w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh]"
                >
                  {img === index ? (
                    <img
                      className="transition tarnsform-transition duration-150 ease-in-out hover:scale-125"
                      width={"100%"}
                      height={"100%"}
                      src={item.colorImg}
                      alt={item.name}
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                      width={"100%"}
                      height={"100%"}
                      src={item.image}
                      alt={item.name}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfUse;
