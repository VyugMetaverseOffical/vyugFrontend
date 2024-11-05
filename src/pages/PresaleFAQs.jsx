import { Divider, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PresaleFAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs1 = [
    {
      question: "What is a VYUG Token?",
      answer:
        "VYUG Token is the native token of the VYUG metaverse. It is the best high-utility metaverse token that you need for your future economic needs.",
    },
    {
      question: "What are the Key Features of the VYUG Token?",
      answer:
        "VYUG token has a huge supply volume of 3.5 billion. It is available on 4 different blockchains. It supports a swap-off feature with multiple other crypto coins and much more.",
    },
    {
      question: "What is the VYUG Token Presale?",
      answer:
        "The VYUG Token Presale is a unique investment opportunity to stake in the high-utility VYUG Tokens. These tokens are available at discounted rates in the presale.",
    },
    {
      question: "What is the Presale Token Price?",
      answer:
        "The presale token price includes three different phases. The price for the first phase is $0.033. The price for the second phase is $0.040. The price for the final phase is $0.044.",
    },
    {
      question: "What is the listing price for the VYUG Token?",
      answer: "The listing price for the VYUG token is $0.088",
    },
    {
      question: "What are the purchase limits?",
      answer:
        "The minimum purchase limit is set at $20. As of now, there is no maximum purchase limit.",
    },
  ];

  const faqs2 = [
    {
      question: "How do I Participate in the Presale?",
      answer:
        "Firstly, visit the VYUG homepage. Then go to the presale page, select the amount you want to invest, add your wallet, and you are good to go",
    },
    {
      question: "Which Blockchains are Supported?",
      answer:
        "Currently we are accepting payments in SOL and USDT. Very soon our presale will support all the blockchains.",
    },
    {
      question: "Why should I buy during the presale?",
      answer:
        "VYUG tokens are available at discounted prices in the presale. These prices will rise as soon as the token gets listed and will keep rising thereafter. Hence, it's a good opportunity. ",
    },
    {
      question: "How will tokens be distributed?",
      answer:
        "The tokens will be distributed in three different phases. We're distributing 3% tokens out of the total supply of 3.5 billion. The division includes 1% tokens, each distributed in every phase.",
    },
    {
      question: "How to buy Tokens on Presale?",
      answer:
        "Visit the VYUG presale page, select the amount you want to invest, add your wallet, and you can buy your tokens from there.",
    },
    {
      question: "Can I sell my pre-sale token?",
      answer:
        "Yes. Users will be able to sell your VYUG tokens as soon as they get listed on the exchanges.",
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <Grid2
        xs={12}
        container
        className="flex justify-center py-10 text-[#fff]"
      >
        <h2 className="header font-transyl text-[#fff] py-20 text-center text-[25px] md:text-[30px] lg:text-[35px] uppercase">
          frequently asked questions
        </h2>
        <Grid2
          xs={11}
          container
          className="flex justify-around gap-6 md:gap-32 py-10"
        >
          <Grid2
            xs={11}
            sm={9}
            md={5}
            container
            className="flex flex-col gap-5 justify-center"
          >
            {faqs1.map((faq, index) => (
              <div key={index}>
                <Typography
                  variant="subtitle2"
                  component={"h6"}
                  className="description text-left text-sm md:text-base cursor-pointer text-[#fff]"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}{" "}
                </Typography>
                {expandedIndex === index && (
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-left faq-transition font-semibold bg-[#fff] text-[#6D6A6A] rounded-xl p-5 mt-2 text-sm md:text-base"
                  >
                    {faq.answer}
                  </Typography>
                )}
                {/* </Typography> */}
                <Divider
                  sx={{ height: 1.2, backgroundColor: "white", mt: 2 }}
                  orientation="horizontal"
                />
              </div>
            ))}
          </Grid2>
          <Grid2
            xs={11}
            sm={9}
            md={5}
            container
            className="flex flex-col gap-5 justify-center"
          >
            {faqs2.map((faq, index) => (
              <div key={index}>
                <Typography
                  variant="subtitle2"
                  component={"h6"}
                  className="description text-sm md:text-base cursor-pointer text-[#fff]"
                  onClick={() => handleToggle(index + 6)}
                >
                  {faq.question}{" "}
                </Typography>
                {expandedIndex === index + 6 && (
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description faq-transition font-semibold bg-[#fff] text-[#6D6A6A] rounded-xl p-5 mt-2 text-sm md:text-base"
                  >
                    {faq.answer}
                  </Typography>
                )}
                {/* </Typography> */}
                <Divider
                  sx={{ height: 1.2, backgroundColor: "white", mt: 2 }}
                  orientation="horizontal"
                />
              </div>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default PresaleFAQs;
