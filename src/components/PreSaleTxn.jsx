import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_URL } from "../apis/url";
import { baseURL, protectedApiPost } from "../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "./toast";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  createTransferInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useAuth } from "../redux/counterSlice";
import {
  // CloverWalletAdapter,
  // Coin98WalletAdapter,
  // CoinbaseWalletAdapter,
  // MathWalletAdapter,
  // PhantomWalletAdapter,
  SolflareWalletAdapter,
  // SafePalWalletAdapter,
  // TrustWalletAdapter,
  // WalletConnectWalletAdapter,
  // OntoWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  Box,
  CircularProgress,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
// import { useWeb3ModalProvider } from "@reown/appkit";

function PreSaleTxnForm({
  handleOpenWaitlist,
  price,
  nextPrice,
  phase,
  listingPrice,
}) {
  const [usdt, setUsdt] = useState("");
  const [vyug, setVyug] = useState("");
  const [referralInput, setReferralInput] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const { authToken, user } = useAuth();
  const [userTxnHash, setUserTxnHash] = useState(
    "35qGjz3eDEAxMhbFY5JBFbrweLkoGK2J42FgTUtDot4o"
  );
  const [purchasing, setPurchasing] = useState(false);
  const [invalidReferral, setInvalidReferral] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Function to detect if the user is on mobile
  const isMobile = useMemo(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
    return /iPhone|iPad|iPod|Android/i.test(userAgent);
  }, []);

  // ------------------------------------------> Timer Code Start <----------------------------------------

  const [currentDate, setCurrentDate] = useState(new Date());
  const lastDateToBuy = new Date("12 November, 2024, 11:00 PM");

  const timeLeftToBuy = {
    days:
      currentDate > lastDateToBuy
        ? 0
        : Math.floor((lastDateToBuy - currentDate) / (1000 * 60 * 60 * 24)) ||
          0,
    hours:
      (currentDate > lastDateToBuy
        ? 0
        : Math.floor((lastDateToBuy - currentDate) / (36 * 100000)) % 24) || 0,
    minutes:
      (currentDate > lastDateToBuy
        ? 0
        : Math.floor((lastDateToBuy - currentDate) / (6 * 10000)) % 60) || 0,
    seconds:
      (currentDate > lastDateToBuy
        ? 0
        : Math.floor((lastDateToBuy - currentDate) / 1000) % 60) || 0,
  };

  const handleCurrentDateUpdate = () => {
    const timerId = setInterval(() => {
      const newDate = new Date();
      setCurrentDate(newDate);
    }, 1000);
    return timerId;
  };

  useEffect(() => {
    const timerId = handleCurrentDateUpdate();
    return () => clearInterval(timerId);
  }, []);

  // -----------------------------------------> Timer Code End <-------------------------------------------

  // -----------------------------------------> Blockchain code start <------------------------------------

  // const { connection } = useConnection();
  const connection = new Connection(
    "https://small-blue-sanctuary.solana-mainnet.quiknode.pro/5208978fae5bbfe45cc40f34bc287a6dc05baba9",
    "confirmed"
  ); //Mainnet

  // Devnet
  // const connection = new Connection(
  //   "https://api.devnet.solana.com/",
  //   "confirmed"
  // );

  // const { publicKey, sendTransaction, wallet, disconnect, signTransaction } =
  //   useWallet();
  const [transactionStatus, setTransactionStatus] = useState("");

  // AppKit Code Starts
  // const { provider } = useWeb3ModalProvider();
  const { address } = useAppKitAccount();
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { walletProvider } = useAppKitProvider("solana");
  const publicKey = walletProvider?.publicKey;
  // console.log("AppKit", walletProvider?.wallet?.icon);

  // async function connectWallet() {
  //   try {
  //     // Trigger wallet connection using AppKit's connect function
  //     await open();

  //     if (walletProvider && walletProvider.publicKey) {
  //       console.log(
  //         "Connected to wallet:",
  //         walletProvider.publicKey.toString()
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Connection error:", error);
  //   }

  //   // Optionally, handle disconnection
  //   walletProvider?.on("disconnect", () => {
  //     console.log("Wallet disconnected");
  //   });
  // }

  // async function sendSolanaTransaction(recipientAddress, amount) {
  //   if (!walletProvider || !walletProvider.publicKey) {
  //     console.error("Wallet not connected");
  //     return;
  //   }

  //   const userWalletPublicKey = walletProvider.publicKey;

  //   // Create a transaction to send tokens or SOL
  //   const transaction = new Transaction().add(
  //     SystemProgram.transfer({
  //       fromPubkey: userWalletPublicKey,
  //       toPubkey: new PublicKey(recipientAddress),
  //       lamports: amount * 10 ** 9, // Convert amount to lamports (1 SOL = 10^9 lamports)
  //     })
  //   );

  //   try {
  //     // Request walletProvider to sign the transaction
  //     const signedTransaction = await walletProvider.signTransaction(
  //       transaction
  //     );

  //     // Send the signed transaction to the Solana network
  //     const txSignature = await connection.sendRawTransaction(
  //       signedTransaction.serialize()
  //     );
  //     await connection.confirmTransaction({
  //       signature: txSignature,
  //       commitment: "confirmed",
  //     });

  //     console.log("Transaction confirmed with signature:", txSignature);
  //   } catch (error) {
  //     console.error("Transaction error:", error);
  //   }
  // }

  // AppKit Code Ends

  // // Function to check SOL balance to ensure transaction fees can be covered
  // const checkSolBalance = async () => {
  //   if (!publicKey) return false;
  //   const balance = await connection.getBalance(publicKey);
  //   return balance >= 0.0005 * 1e9; // Ensure at least 0.0005 SOL for transaction fees
  // };

  const handleValidation = async () => {
    if (referralCode) {
      try {
        const response = await protectedApiPost("presale/checkReferralCode", {
          referralCode: referralCode,
        });

        if (response.message === "Valid referral code") {
          if (price !== 0) {
            setVyug(((usdt / price) * 102) / 100);
          } else {
            setVyug(0);
          }
          setInvalidReferral(false);
        } else {
          toast.error(
            <ToastError
              data={`Invalid referral code. Please enter a valid code!`}
            />,
            ErrorStyling
          );
          setInvalidReferral(true);
          return;
        }
        setInvalidReferral(false);
      } catch (error) {
        if (price !== 0) {
          setVyug(usdt / price);
        } else {
          setVyug(0);
        }
        if (error?.response.data.message === "jwt malformed") {
          toast.error(
            <ToastError data={"please login first!"} />,
            ErrorStyling
          );
          return;
        }

        if (error?.response.data.message === "Invalid referral code") {
          setInvalidReferral(true);
          toast.error(
            <ToastError
              data={`Invalid referral code. Please enter a valid code!`}
            />,
            ErrorStyling
          );
        } else {
          setInvalidReferral(false);
          toast.error(
            <ToastError
              data={error?.response.data.message || "Unknown error"}
            />,
            ErrorStyling
          );
        }
        return;
      }
    } else {
      setInvalidReferral(false);
      if (price !== 0) {
        setVyug(usdt / price);
      } else {
        setVyug(0);
      }
    }
  };

  const handlePurchase = async () => {
    const usdtAmount = parseFloat(usdt);
    if (!publicKey) {
      toast.error(
        <ToastError data={"Please connect your wallet!"} />,
        ErrorStyling
      );
      // alert("Please connect your wallet!");
      return;
    }

    if (!usdtAmount || isNaN(usdtAmount) || usdtAmount <= 0) {
      toast.error(
        <ToastError data={"Please enter a valid USDT amount!"} />,
        ErrorStyling
      );
      // alert("Please enter a valid USDT amount!");
      return;
    }

    const accountSize = 165; // Size for a token account; adjust if needed
    const minimumBalance = await connection.getMinimumBalanceForRentExemption(
      accountSize
    );
    // console.log("Line 1")
    const balance = await connection.getBalance(publicKey);
    console.log(`Current SOL balance: ${balance / 1000000000} SOL`);

    if (balance < minimumBalance) {
      toast.error(
        <ToastError
          data={`Insufficient funds for transaction. Required: ${
            minimumBalance / 1000000000
          } SOL`}
        />,
        ErrorStyling
      );
      return;
    }

    // // Check for minimum USDT condition (minimum 10 USDT)
    // if (parseFloat(usdtAmount) < 10) {
    //   toast.error(
    //     <ToastError data={"The minimum purchase amount is 10 USDT."} />,
    //     ErrorStyling
    //   );
    //   // alert("The minimum purchase amount is 10 USDT.");
    //   return;
    // }

    // const hasEnoughSol = await checkSolBalance();
    // if (!hasEnoughSol) {
    //   toast.error(
    //     <ToastError data={"Insufficient SOL to cover transaction fees."} />,
    //     ErrorStyling
    //   );
    //   // alert("Insufficient SOL to cover transaction fees.");
    //   return;
    // }

    try {
      setTransactionStatus("Initiating transaction...");
      setPurchasing(true);
      const usdtMintAddress = new PublicKey(
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" //Mainnet
      );
      // const usdtMintAddress = new PublicKey(
      //   "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr" //Testnet
      // );
      // USDC Mint Address
      const companyUsdtWallet = new PublicKey(
        "5ftLHzWn5853Kc3VjQGjuxWV3PoJcm2FD6eUvMJWuRfK" //Mainnet
      );
      // const companyUsdtWallet = new PublicKey(
      //   "FNrcCs8h9mUSmdcYtpviCY7uVNsJmF9fCv4SNXnmJUxC" //Testnet
      // );
      // Company's USDT wallet address

      // Get or create user's USDT associated token account
      const userUsdtTokenAccountAddress = await getAssociatedTokenAddress(
        usdtMintAddress,
        publicKey
      );
      const userUsdtTokenAccountInfo = await connection.getAccountInfo(
        userUsdtTokenAccountAddress
      );
      console.log(userUsdtTokenAccountAddress, userUsdtTokenAccountInfo);

      if (!userUsdtTokenAccountInfo) {
        setPurchasing(false);
        toast.error(
          <ToastError
            data={
              "You do not have a USDT token account. Please create one before making a purchase."
            }
          />,
          ErrorStyling
        );
        // alert(
        //   "You do not have a USDT token account. Please create one before making a purchase."
        // );
        return;
      }

      const userUsdtTokenBalance = await connection.getTokenAccountBalance(
        userUsdtTokenAccountAddress
      );

      console.log("userUsdtTokenBalance", userUsdtTokenBalance);

      const usdtAmountInSmallestUnit = parseFloat(usdtAmount) * 1e6; // Convert to smallest unit (e.g., 15 USDT -> 15000000)

      console.log("usdtAmountInSmallestUnit", usdtAmountInSmallestUnit);

      if (
        parseFloat(userUsdtTokenBalance.value.amount) < usdtAmountInSmallestUnit
      ) {
        setPurchasing(false);
        toast.error(
          <ToastError
            data={"Insufficient USDT balance to complete the transaction."}
          />,
          ErrorStyling
        );
        // alert("Insufficient USDT balance to complete the transaction.");
        return;
      }

      // Get or create company's USDT associated token account (similar logic for the company)
      const companyUsdtTokenAccountAddress = await getAssociatedTokenAddress(
        usdtMintAddress,
        companyUsdtWallet
      );

      console.log(
        "companyUsdtTokenAccountAddress",
        companyUsdtTokenAccountAddress
      );

      const companyUsdtTokenAccountInfo = await connection.getAccountInfo(
        companyUsdtTokenAccountAddress
      );

      console.log("companyUsdtTokenAccountInfo", companyUsdtTokenAccountInfo);

      if (!companyUsdtTokenAccountInfo) {
        setPurchasing(false);
        toast.error(
          <ToastError
            data={
              "Company does not have a USDT token account. Please contact support."
            }
          />,
          ErrorStyling
        );
        // alert(
        //   "Company does not have a USDT token account. Please contact support."
        // );
        return;
      }

      // const accountSize = 165; // Example size for a token account; adjust based on your needs
      // const minimumBalance = await connection.getMinimumBalanceForRentExemption(
      //   accountSize
      // );
      // console.log(
      //   `Minimum balance required for rent exemption: ${
      //     minimumBalance / 1000000000
      //   } SOL`
      // );

      // Create transfer instruction to move USDT from user to company
      const transferInstruction = createTransferInstruction(
        userUsdtTokenAccountAddress,
        companyUsdtTokenAccountAddress,
        publicKey,
        usdtAmountInSmallestUnit
      );

      console.log("transferInstruction", transferInstruction);

      // const { blockhash, lastValidBlockHeight } =
      //   await connection.getLatestBlockhash();
      // const transaction = new Transaction().add(transferInstruction);
      // transaction.recentBlockhash = blockhash;
      // transaction.feePayer = publicKey;

      const transaction = new Transaction().add(transferInstruction);
      transaction.feePayer = publicKey;
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;

      console.log("transaction", transaction);

      // const signature = await sendTransaction(transaction, connection);
      // console.log("signature", signature);

      // await connection.confirmTransaction(
      //   { signature, blockhash, lastValidBlockHeight },
      //   "confirmed"
      // );

      // Pre-sign the transaction using the wallet
      // const signedTransaction = await signTransaction(transaction); // Try sending the pre-signed transaction
      const signedTransaction = await walletProvider.signTransaction(
        transaction
      );
      let signature;
      try {
        console.log("try");

        console.log("Attempting to send transaction...");

        // // Check for sufficient funds before sending
        // const balance = await connection.getBalance(publicKey);
        // console.log(`Current SOL balance: ${balance / 1000000000} SOL`);
        // if (balance < minimumBalance) {
        //   throw new Error(
        //     `Insufficient funds for transaction. Required: ${
        //       minimumBalance / 1000000000
        //     } SOL, Available: ${balance / 1000000000} SOL`
        //   );
        // }

        signature = await connection.sendRawTransaction(
          signedTransaction.serialize()
        );
        console.log("try", signature);
        await connection.confirmTransaction(
          { signature, blockhash, lastValidBlockHeight },
          "confirmed"
        );
        console.log("try complete");
      } catch (error) {
        console.log("catch");
        if (
          error.message.includes("TransactionExpiredBlockheightExceededError")
        ) {
          // Fetch new blockhash and update the transaction
          const {
            blockhash: newBlockhash,
            lastValidBlockHeight: newLastValidBlockHeight,
          } = await connection.getLatestBlockhash();
          transaction.recentBlockhash = newBlockhash;

          // Resend the same signed transaction with updated blockhash
          signature = await connection.sendRawTransaction(
            signedTransaction.serialize()
          );
          console.log(
            "catch TransactionExpiredBlockheightExceededError",
            signature
          );
          await connection.confirmTransaction(
            {
              signature: signature,
              blockhash: newBlockhash,
              lastValidBlockHeight: newLastValidBlockHeight,
            },
            "confirmed"
          );
          console.log("catch if complete");
        } else {
          console.log("catch else complete");
          throw error; // handle other errors
        }
      }

      setTransactionStatus("Transaction confirmed!");
      toast.success(
        <ToastSuccess data={"USDT Transaction confirmed!"} />,
        SuccessStyling
      );

      // Send confirmation to backend for VYUG token distribution
      // const response = await protectedApiPost("presale/sendPresaleToken", {
      const response = await protectedApiPost("presale/sendToken", {
        usdtAmount: parseFloat(usdtAmount),
        userWallet: publicKey.toString(),
        transactionHash: signature,
        referralCode: referralCode || "",
      });
      console.log("API hit", response);
      if (response?.success || response?.sucess) {
        setTransactionStatus("VYUG tokens sent successfully!");
        setPurchasing(false);
        setUserTxnHash(response?.transactionSignature || response?.signature);
        toast.success(
          <ToastSuccess data={"VYUG tokens received successfully!"} />,
          SuccessStyling
        );
        let urlToNav = "";
        if (pathname === "/crypto-presale") {
          urlToNav = "/presale/transaction-complete";
        } else if (pathname === "/presale") {
          urlToNav = "/presale/transaction-complete";
        } else {
          urlToNav = "/presale/transaction-complete";
        }
        console.log(urlToNav);
        navigate(urlToNav, {
          state: response?.transactionSignature || response?.signature,
        });
        console.log("navigation complete");
      } else {
        setTransactionStatus("Failed to send VYUG tokens.");
        setPurchasing(false);
        toast.error(
          <ToastError data={"Failed to send VYUG tokens."} />,
          ErrorStyling
        );
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      setTransactionStatus(`Transaction failed: ${error.message}`);
      setPurchasing(false);
      if (error.message.includes("502")) {
        toast.error(
          <ToastError
            data={`Transaction failed. Please try again later Or try with another wallet`}
          />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={`Transaction failed: ${error.message}`} />,
          ErrorStyling
        );
      }
    }
  };

  // ----------------------------------------->  Blockchain code end  <------------------------------------

  const handleChange = (e) => {
    const REG_EX = /^\d*\.?\d*$/;
    const isValid = REG_EX.test(e.target.value);

    if (isValid && e.target.id === "usdt") {
      setUsdt(e.target.value);
      if (price !== 0) {
        setVyug(e.target.value / price);
      } else {
        setVyug(0);
      }
    } else if (isValid && e.target.id === "vyug") {
      setVyug(e.target.value);
      setUsdt(e.target.value * price);
    } else if (e.target.id === "referralCode") {
      setReferralCode(e.target.value);
    }
  };

  const handleConnect = (e) => {
    e.preventDefault();
    if (invalidReferral && referralCode !== "") {
      return;
    }
    open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (invalidReferral && referralCode !== "") {
      return;
    }

    if (
      (!usdt && !vyug) ||
      (parseFloat(usdt) === 0 && parseFloat(vyug) === 0)
    ) {
      toast.error(<ToastError data={"Please enter amount"} />, ErrorStyling);
      return;
    }

    if (!authToken && !user) {
      toast.error(<ToastError data={"Please Login First"} />, ErrorStyling);
      navigate("/auth/login");
      return;
    } else if (authToken && user) {
      handlePurchase();
      // toast.success(
      //   <ToastSuccess data={"Function execution complete"} />,
      //   SuccessStyling
      // );
    }
  };

  const handleDeselectWallet = async (e) => {
    e.preventDefault();
    if (invalidReferral && referralCode !== "") {
      return;
    }
    try {
      // Disconnect the current wallet
      await disconnect();
      open();
      console.log("Disconnected");
    } catch (error) {
      console.error("Error disconnecting the wallet:", error);
    }
  };

  return (
    <>
      <div className="bg-[#00000050] rounded-[0.5rem] sm:rounded-[1rem] px-3 sm:px-5 py-4 sm:py-6 mx-auto lg:mx-0">
        <div className="flex flex-col justify-start items-stretch mb-4">
          <h2 className="header font-transyl text-[#fff] text-center text-base">
            BUY Now before the price increase
          </h2>
        </div>
        <div className="bg-[#00000050] p-4 rounded-[0.5rem] flex flex-col justify-start items-stretch gap-2">
          {/* Timer */}
          <div className="flex justify-between items-center gap-1.5">
            {/* Days */}
            <div
              style={{
                background: "linear-gradient(180deg, #049A99 0%, #159255 100%)",
              }}
              className="p-0.5 rounded-[50%]"
            >
              <div className="bg-[#071B18] flex flex-col justify-center items-center w-[3.25rem] h-[3.25rem] rounded-[50%]">
                <p className="description text-[#fff] font-bold text-[18px]">
                  {timeLeftToBuy.days === 0
                    ? "00"
                    : timeLeftToBuy.days < 10
                    ? `0${timeLeftToBuy.days}`
                    : timeLeftToBuy.days}
                </p>
                <p className="description text-[#fff] text-[10px]">Days</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center flex-1">
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
              <div className="border-[1px] border-dashed border-[#fff] flex-1"></div>
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
            </div>

            {/* Hour */}
            <div
              style={{
                background: "linear-gradient(180deg, #049A99 0%, #159255 100%)",
              }}
              className="p-0.5 rounded-[50%]"
            >
              <div className="bg-[#071B18] flex flex-col justify-center items-center w-[3.25rem] h-[3.25rem] rounded-[50%]">
                <p className="description text-[#fff] font-bold text-[18px]">
                  {timeLeftToBuy.hours === 0
                    ? "00"
                    : timeLeftToBuy.hours < 10
                    ? `0${timeLeftToBuy.hours}`
                    : timeLeftToBuy.hours}
                </p>
                <p className="description text-[#fff] text-[10px]">Hour</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center flex-1">
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
              <div className="border-[1px] border-dashed border-[#fff] flex-1"></div>
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
            </div>

            {/* Min */}
            <div
              style={{
                background: "linear-gradient(180deg, #049A99 0%, #159255 100%)",
              }}
              className="p-0.5 rounded-[50%]"
            >
              <div className="bg-[#071B18] flex flex-col justify-center items-center w-[3.25rem] h-[3.25rem] rounded-[50%]">
                <p className="description text-[#fff] font-bold text-[18px]">
                  {timeLeftToBuy.minutes === 0
                    ? "00"
                    : timeLeftToBuy.minutes < 10
                    ? `0${timeLeftToBuy.minutes}`
                    : timeLeftToBuy.minutes}
                </p>
                <p className="description text-[#fff] text-[10px]">Min</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center flex-1">
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
              <div className="border-[1px] border-dashed border-[#fff] flex-1"></div>
              <div
                className="w-[4px] h-[4px] rounded-[50%]"
                style={{
                  background:
                    "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                }}
              ></div>
            </div>

            {/* Sec */}
            <div
              style={{
                background: "linear-gradient(180deg, #049A99 0%, #159255 100%)",
              }}
              className="p-0.5 rounded-[50%]"
            >
              <div className="bg-[#071B18] flex flex-col justify-center items-center w-[3.25rem] h-[3.25rem] rounded-[50%]">
                <p className="description text-[#fff] font-bold text-[18px]">
                  {timeLeftToBuy.seconds === 0
                    ? "00"
                    : timeLeftToBuy.seconds < 10
                    ? `0${timeLeftToBuy.seconds}`
                    : timeLeftToBuy.seconds}
                </p>
                <p className="description text-[#fff] text-[10px]">Sec</p>
              </div>
            </div>
          </div>

          {/* Phase */}
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            <p className="header text-xs sm:text-sm md:text-base text-[#fff] text-center">
              Phase {phase}/3
            </p>
            <div className="flex-1 relative h-[6px] flex rounded-[1rem]">
              <div
                className="bg-[#109165] h-full rounded-[2rem] absolute z-[3]"
                style={{
                  width:
                    phase === 1
                      ? "33%"
                      : phase === 2
                      ? "67.33%"
                      : phase === 3 && "102%",
                }}
              ></div>
              <div
                className="bg-[#000000] h-full w-[35%] rounded-[2rem] absolute z-[2]"
                style={{
                  width:
                    phase === 1
                      ? "35%"
                      : phase === 2
                      ? "67.33%"
                      : phase === 3 && "0%",
                  transform: `translateX(${
                    phase === 1 ? "90%" : phase === 2 && "50%"
                  })`,
                }}
              ></div>
              <div className="bg-[#00000030] h-full w-[35%] rounded-[2rem] absolute z-[1] translate-x-[182%]"></div>
            </div>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            <p className="description text-[#fff] text-xs text-center">
              Presale Price: ${price}
            </p>
            <p className="description text-[#fff] text-xs text-center">
              Listing Price: $0.088
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 presale-form">
          <div>
            <label
              htmlFor="usdt"
              className="description text-[#fff] text-xs md:text-sm ps-5"
            >
              You Pay
            </label>
            <div className="flex justify-between items-center gap-3 bg-[#00000050] border-[1px] border-solid border-[#159255] rounded-[5rem]">
              <div className="flex justify-center items-center rounded-[50%] p-1.5 pt-2 w-[2.5rem] h-[2.5rem] border-[1px] border-solid border-[#159255] bg-[#00000050]">
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.6451 13.3411C15.4973 13.3525 14.734 13.3998 13.0314 13.3998C11.6772 13.3998 10.7157 13.3577 10.3783 13.3411C5.14485 13.1025 1.23851 12.1584 1.23851 11.028C1.23851 9.89767 5.14485 8.95485 10.3783 8.71245V12.4008C10.7206 12.4263 11.7006 12.4863 13.0548 12.4863C14.6799 12.4863 15.4936 12.4161 15.6401 12.4021V8.715C20.8625 8.95613 24.7603 9.90023 24.7603 11.028C24.7603 12.1558 20.8638 13.0999 15.6401 13.3398L15.6451 13.3411ZM15.6451 8.33354V5.03304H22.9333V0H3.09011V5.03304H10.3771V8.33226C4.45419 8.61422 0 9.83006 0 11.287C0 12.744 4.45419 13.9586 10.3771 14.2418V24.8182H15.6438V14.238C21.5532 13.956 26 12.7414 26 11.2857C26 9.83006 21.5569 8.61549 15.6438 8.33226L15.6451 8.33354Z"
                    fill="white"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="usdt"
                onBlur={handleValidation}
                className="flex-1 bg-[#00000000] outline-none border-none text-[#fff] pe-4"
                value={usdt}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              htmlFor="vyug"
              className="description text-[#fff] text-xs md:text-sm ps-5"
            >
              You Receive
            </label>
            <div className="flex justify-between items-center gap-3 bg-[#00000050] border-[1px] border-solid border-[#159255] rounded-[5rem]">
              <div className="flex justify-center items-center rounded-[50%] p-2 pt-2.5 w-[2.5rem] h-[2.5rem] border-[1px] border-solid border-[#159255] bg-[#00000050]">
                <svg
                  width="32"
                  height="35"
                  viewBox="0 0 32 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4627 0.0546875C13.298 0.0546875 11.2423 0.524968 9.39351 1.36868L9.89956 2.82053C11.6454 2.00125 13.517 1.58419 15.4635 1.58419C17.6047 1.58419 19.7248 2.11031 21.6007 3.10846C21.6086 3.11195 21.6173 3.11718 21.6252 3.12154L22.2289 1.7107C20.2056 0.653224 17.9048 0.0555609 15.4635 0.0555609L15.4627 0.0546875ZM11.4334 27.1634C6.17222 25.4594 2.35675 20.5132 2.35675 14.6918C2.35675 13.0655 2.6473 11.4897 3.2249 9.99426L2.33581 8.21697C1.36995 10.1688 0.828125 12.3675 0.828125 14.6918C0.828125 21.6378 5.66704 27.454 12.1576 28.9529L11.4334 27.1634ZM28.8905 8.85913L27.9988 10.8598C28.3731 12.0865 28.5694 13.377 28.5694 14.6918C28.5694 20.3195 25.0035 25.1296 20.0136 26.9828L19.0652 28.8805C25.4066 27.276 30.0981 21.5314 30.0981 14.6927C30.0981 12.6196 29.667 10.6469 28.8896 8.86001L28.8905 8.85913Z"
                    fill="url(#paint0_linear_142_9438)"
                  />
                  <path
                    d="M12.2591 29.0387L12.1492 29.0134C8.96626 28.2788 6.07827 26.4648 4.01741 23.9058C1.92602 21.3083 0.773438 18.0373 0.773438 14.6956C0.773438 12.4114 1.28298 10.2249 2.28723 8.19457L2.33958 8.089L3.29323 9.99543L3.28364 10.0199C2.7104 11.504 2.41985 13.0771 2.41985 14.6956C2.41985 20.3721 6.05122 25.3611 11.4564 27.1114L11.4826 27.1201L12.2591 29.0396V29.0387ZM2.34046 8.35337C1.37896 10.3366 0.891226 12.4698 0.891226 14.6956C0.891226 21.4863 5.4806 27.3007 12.0654 28.8729L11.3944 27.2143C5.95525 25.4405 2.30294 20.4131 2.30294 14.6956C2.30294 13.071 2.59261 11.4926 3.16497 10.0015L2.34046 8.35337ZM18.9608 28.9724L19.9764 26.9395L19.9982 26.9316C25.0928 25.04 28.5156 20.1226 28.5156 14.6956C28.5156 13.3991 28.3245 12.1165 27.9476 10.881L27.9415 10.8601L27.9502 10.84L28.8969 8.7172L28.9501 8.83936C29.7546 10.6891 30.1629 12.6592 30.1629 14.6956C30.1629 21.4331 25.6076 27.2902 19.0856 28.941L18.9617 28.9724H18.9608ZM20.061 27.0337L19.1807 28.7953C25.584 27.1157 30.0451 21.3362 30.0451 14.6965C30.0451 12.722 29.6577 10.8095 28.8952 9.01036L28.0671 10.8688C28.4432 12.1086 28.6343 13.3964 28.6343 14.6965C28.6343 20.1645 25.1905 25.1194 20.0619 27.0346L20.061 27.0337ZM21.6595 3.20559L21.5888 3.16981C19.712 2.17167 17.5988 1.64729 15.4682 1.64729C13.533 1.64729 11.6693 2.06086 9.92951 2.87753L9.87018 2.90545L9.32486 1.34191L9.37372 1.31923C11.2924 0.44411 13.3427 0 15.4673 0C17.8649 0 20.15 0.55928 22.2598 1.66213L22.3077 1.68743L21.6577 3.20559H21.6595ZM15.4682 1.5295C17.6058 1.5295 19.726 2.05301 21.6001 3.0433L22.1577 1.74152C20.0785 0.663978 17.8274 0.117791 15.4682 0.117791C13.3776 0.117791 11.3604 0.550553 9.47144 1.40386L9.93823 2.74316C11.6763 1.93783 13.5364 1.52863 15.4682 1.52863V1.5295Z"
                    fill="url(#paint1_linear_142_9438)"
                  />
                  <path
                    d="M15.6434 18.2689V19.788L7.10156 0.429688C7.1321 0.4515 7.6303 0.810972 8.12501 0.810972L15.6434 18.2689Z"
                    fill="url(#paint2_linear_142_9438)"
                  />
                  <path
                    d="M24.2287 0.429688L15.6572 19.8098L15.6484 19.7897V18.2707L23.4216 0.685331C23.4216 0.685331 23.6345 0.685332 24.2287 0.430561V0.429688Z"
                    fill="url(#paint3_linear_142_9438)"
                  />
                  <path
                    d="M31.4102 0.429688L15.6449 34.5813L0 0.429688H7.10219L15.6449 19.7993L24.2251 0.429688H31.4102Z"
                    fill="url(#paint4_linear_142_9438)"
                  />
                  <path
                    d="M30.26 1.07031L15.642 33.6924L1.24219 1.07031H6.50688L15.649 21.2976L24.9342 1.07031H30.26Z"
                    fill="url(#paint5_linear_142_9438)"
                  />
                  <path
                    d="M15.6404 33.7379L15.623 33.6978L1.21094 1.04775H6.51839L6.52362 1.05909L15.6483 21.2471L24.9204 1.04688H30.2889L30.2767 1.0748L15.6404 33.737V33.7379ZM1.27114 1.08701L15.6413 33.6419L30.2296 1.08701H24.9466L15.6492 21.3422L15.6317 21.303L6.49483 1.08701H1.27289H1.27114Z"
                    fill="#272626"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_142_9438"
                      x1="0.827252"
                      y1="14.5034"
                      x2="30.0981"
                      y2="14.5034"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#85868B" />
                      <stop offset="0.34" stop-color="#C1C0C1" />
                      <stop offset="0.69" stop-color="#5D5E65" />
                      <stop offset="1" stop-color="#312F33" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_142_9438"
                      x1="15.4682"
                      y1="-0.000872505"
                      x2="15.4682"
                      y2="29.0387"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#85868B" />
                      <stop offset="0.34" stop-color="#C1C0C1" />
                      <stop offset="0.69" stop-color="#5D5E65" />
                      <stop offset="1" stop-color="#312F33" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_142_9438"
                      x1="7.90339"
                      y1="1.3432"
                      x2="15.7673"
                      y2="19.0376"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C7C5C7" />
                      <stop offset="0.01" stop-color="#BDBCBE" />
                      <stop offset="0.02" stop-color="#8D8D90" />
                      <stop offset="0.03" stop-color="#7C7D80" />
                      <stop offset="0.04" stop-color="#707275" />
                      <stop offset="0.05" stop-color="#696B6E" />
                      <stop offset="0.08" stop-color="#686A6D" />
                      <stop offset="0.09" stop-color="#65676A" />
                      <stop offset="0.1" stop-color="#5C5E61" />
                      <stop offset="0.11" stop-color="#393B3F" />
                      <stop offset="0.12" stop-color="#0F1115" />
                      <stop offset="0.31" stop-color="#0F1115" />
                      <stop offset="0.35" stop-color="#101216" />
                      <stop offset="0.36" stop-color="#656669" />
                      <stop offset="0.37" stop-color="white" />
                      <stop offset="0.45" stop-color="white" />
                      <stop offset="0.49" stop-color="#13191F" />
                      <stop offset="0.55" stop-color="#141A20" />
                      <stop offset="0.57" stop-color="#1B2026" />
                      <stop offset="0.59" stop-color="#272B30" />
                      <stop offset="0.6" stop-color="#3A3C41" />
                      <stop offset="0.62" stop-color="#383A3F" />
                      <stop offset="0.63" stop-color="#35373B" />
                      <stop offset="0.66" stop-color="#36383C" />
                      <stop offset="0.67" stop-color="#444449" />
                      <stop offset="0.77" stop-color="#424247" />
                      <stop offset="0.81" stop-color="#3B3C42" />
                      <stop offset="0.83" stop-color="#2F3338" />
                      <stop offset="0.84" stop-color="#272C32" />
                      <stop offset="0.88" stop-color="#252A30" />
                      <stop offset="0.89" stop-color="#202329" />
                      <stop offset="0.9" stop-color="#1D1F25" />
                      <stop offset="0.93" stop-color="#1E2026" />
                      <stop offset="0.95" stop-color="#25272D" />
                      <stop offset="0.96" stop-color="#313338" />
                      <stop offset="0.97" stop-color="#525357" />
                      <stop offset="1" stop-color="#525357" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_142_9438"
                      x1="23.6057"
                      y1="0.787414"
                      x2="15.3378"
                      y2="20.0951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C7C5C7" />
                      <stop offset="0.01" stop-color="#BDBCBE" />
                      <stop offset="0.02" stop-color="#8D8D90" />
                      <stop offset="0.03" stop-color="#7C7D80" />
                      <stop offset="0.04" stop-color="#707275" />
                      <stop offset="0.05" stop-color="#696B6E" />
                      <stop offset="0.08" stop-color="#686A6D" />
                      <stop offset="0.09" stop-color="#65676A" />
                      <stop offset="0.1" stop-color="#5C5E61" />
                      <stop offset="0.11" stop-color="#393B3F" />
                      <stop offset="0.12" stop-color="#0F1115" />
                      <stop offset="0.31" stop-color="#0F1115" />
                      <stop offset="0.35" stop-color="#101216" />
                      <stop offset="0.36" stop-color="#656669" />
                      <stop offset="0.37" stop-color="white" />
                      <stop offset="0.45" stop-color="white" />
                      <stop offset="0.49" stop-color="#13191F" />
                      <stop offset="0.55" stop-color="#141A20" />
                      <stop offset="0.57" stop-color="#1B2026" />
                      <stop offset="0.59" stop-color="#272B30" />
                      <stop offset="0.6" stop-color="#3A3C41" />
                      <stop offset="0.62" stop-color="#383A3F" />
                      <stop offset="0.63" stop-color="#35373B" />
                      <stop offset="0.66" stop-color="#36383C" />
                      <stop offset="0.67" stop-color="#444449" />
                      <stop offset="0.77" stop-color="#424247" />
                      <stop offset="0.81" stop-color="#3B3C42" />
                      <stop offset="0.83" stop-color="#2F3338" />
                      <stop offset="0.84" stop-color="#272C32" />
                      <stop offset="0.88" stop-color="#252A30" />
                      <stop offset="0.89" stop-color="#202329" />
                      <stop offset="0.9" stop-color="#1D1F25" />
                      <stop offset="0.93" stop-color="#1E2026" />
                      <stop offset="0.95" stop-color="#25272D" />
                      <stop offset="0.96" stop-color="#313338" />
                      <stop offset="0.97" stop-color="#525357" />
                      <stop offset="1" stop-color="#525357" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_142_9438"
                      x1="15.7051"
                      y1="1.04742"
                      x2="15.7051"
                      y2="33.9452"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#85868B" />
                      <stop offset="0.34" stop-color="#C1C0C1" />
                      <stop offset="0.69" stop-color="#5D5E65" />
                      <stop offset="1" stop-color="#312F33" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_142_9438"
                      x1="15.7511"
                      y1="1.07031"
                      x2="15.7511"
                      y2="31.2764"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#85868B" />
                      <stop offset="0.34" stop-color="#C1C0C1" />
                      <stop offset="0.69" stop-color="#5D5E65" />
                      <stop offset="1" stop-color="#312F33" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                id="vyug"
                onBlur={handleValidation}
                className="flex-1 bg-[#00000000] outline-none border-none text-[#fff] pe-4"
                value={vyug}
                onChange={handleChange}
              />
            </div>
            {/* <p
              className="description text-sm flex justify-end cursor-pointer text-[#fff] mt-1"
              onClick={() => setReferralInput(!referralInput)}
            >
              have a Referral?
            </p> */}
          </div>
          <div className="mt-3">
            <label
              htmlFor="referralCode"
              className="description text-[#fff] text-xs md:text-sm ps-5"
            >
              Referral Code
            </label>
            <div className="flex flex-row-reverse justify-between items-center gap-3 bg-[#00000050] border-[1px] border-solid border-[#159255] rounded-[5rem]">
              <button className="flex justify-center items-center rounded-[50%] p-2 w-[2.5rem] h-[2.5rem] bg-[#00000050] border-[1px] border-solid border-[#159255]">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8676 28.0031H2.4381C2.41717 27.9889 2.39834 27.9668 2.37532 27.9611C1.02852 27.6285 0.296875 26.692 0.296875 25.2919C0.296875 19.1339 0.296875 12.9765 0.296875 6.81917C0.296875 5.20399 1.36679 4.11794 2.95492 4.11723C4.1992 4.11652 5.44418 4.11723 6.68846 4.11723C6.78052 4.11723 6.87259 4.11723 6.98139 4.11723C6.98139 3.83522 6.98069 3.5881 6.98139 3.34026C6.98976 1.81268 8.07293 0.708116 9.57457 0.705979C11.7855 0.70313 13.9958 0.708116 16.2068 0.70313C16.9796 0.701706 17.6268 0.978025 18.1715 1.53636C19.7311 3.13587 21.2962 4.72969 22.8599 6.32493C23.4158 6.89253 23.6976 7.56765 23.6969 8.37809C23.6913 12.8832 23.6948 17.3876 23.6934 21.8928C23.6934 23.4966 22.6249 24.5883 21.057 24.5897C19.8036 24.5912 18.5503 24.5897 17.2969 24.5897C17.2056 24.5897 17.1135 24.5897 17.0068 24.5897C17.0068 24.9202 17.0124 25.2129 17.0061 25.5049C16.9817 26.5574 16.3274 27.4847 15.3573 27.8436C15.1962 27.9034 15.0309 27.9497 14.8676 28.0024V28.0031ZM9.48878 5.82286H9.20631C7.1174 5.82286 5.02918 5.82286 2.94027 5.82286C2.28884 5.82286 1.9687 6.15259 1.9687 6.82416C1.9687 12.9815 1.9687 19.1389 1.9687 25.2962C1.9687 25.9671 2.28884 26.2961 2.94236 26.2961C6.74565 26.2961 10.5489 26.2961 14.3522 26.2961C15.026 26.2961 15.3384 25.9749 15.3384 25.282C15.3384 20.8836 15.3384 16.4861 15.3384 12.0877V11.7936C14.249 11.7936 13.1965 11.7936 12.1447 11.7936C10.5573 11.7922 9.49088 10.7054 9.48948 9.08812C9.48878 8.01347 9.48948 6.93882 9.48948 5.82215L9.48878 5.82286ZM8.66019 4.11723C8.91965 4.11723 9.16098 4.12578 9.4023 4.11581C10.2644 4.07878 10.966 4.40281 11.57 5.02951C13.0598 6.57348 14.5594 8.10818 16.0743 9.62651C16.7159 10.2696 17.0186 11.0124 17.0144 11.9318C16.9991 15.4762 17.0082 19.0206 17.0082 22.5651V22.8855C18.3766 22.8855 19.7067 22.8855 21.0374 22.8855C21.7098 22.8855 22.0223 22.5636 22.0223 21.8707C22.0223 17.4738 22.0223 13.0762 22.0223 8.67934C22.0223 8.58533 22.0223 8.49204 22.0223 8.38379C20.9168 8.38379 19.8476 8.38593 18.7783 8.38379C17.26 8.38023 16.1782 7.27994 16.1733 5.73526C16.1705 4.82014 16.1733 3.90501 16.1733 2.99059C16.1733 2.80614 16.1733 2.62241 16.1733 2.41303H15.8685C14.8851 2.41303 13.9024 2.41303 12.9189 2.41303C11.7876 2.41303 10.6563 2.41089 9.52575 2.41445C9.0717 2.41588 8.70762 2.71285 8.66647 3.14371C8.63648 3.45777 8.66089 3.77753 8.66089 4.11937L8.66019 4.11723ZM20.7333 6.67175C19.7708 5.68826 18.8048 4.70192 17.8486 3.72412C17.8486 4.43272 17.834 5.17622 17.8549 5.919C17.8661 6.30784 18.2036 6.65395 18.5851 6.66535C19.3126 6.68742 20.0408 6.67175 20.7333 6.67175ZM11.169 7.12184C11.169 7.8575 11.146 8.61809 11.178 9.37583C11.1955 9.7839 11.5777 10.0787 11.9962 10.0866C12.3784 10.0944 12.7613 10.0887 13.1442 10.0887C13.4602 10.0887 13.7768 10.0887 14.0767 10.0887C13.0996 9.09168 12.1329 8.10534 11.169 7.12184Z"
                    fill="white"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="referralCode"
                className="flex-1 bg-[#00000000] outline-none border-none text-[#fff] ps-4"
                value={referralCode}
                onBlur={handleValidation}
                onChange={handleChange}
              />
            </div>
            {invalidReferral && (
              <span className="description text-[6px] md:text-xs text-[red] font-semibold ps-5">
                *Please Enter Valid Referral Code
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-[90%] mx-auto bg-[#00000050] border-[1px] border-solid border-[#159255] p-4 rounded-[5rem] text-[#fff] text-sm md:text-base uppercase font-bold mt-3 flex justify-center items-center"
            onClick={handleConnect}
            disabled={invalidReferral}
          >
            <span>
              {address ? (
                <span className="flex justify-between items-center gap-3">
                  <img
                    src={walletProvider?.wallet?.icon}
                    alt={walletProvider?.wallet?.name}
                    className="max-w-[1.5rem]"
                  />
                  <span className="max-w-[8rem] sm:max-w-[14rem] overflow-hidden">
                    {address}
                  </span>
                </span>
              ) : (
                "Connect Wallet"
              )}
            </span>
          </button>
          {address && (
            <button
              type="submit"
              className="w-[90%] mx-auto bg-[#00000050] border-[1px] border-solid border-[#159255] p-4 rounded-[5rem] text-[#fff] text-sm md:text-base uppercase font-bold mt-3 flex justify-center items-center"
              onClick={handleSubmit}
              disabled={purchasing || invalidReferral}
            >
              {purchasing ? (
                <CircularProgress sx={{ color: "#fff" }} size={"1.5rem"} />
              ) : (
                "Buy VYUG Token"
              )}
            </button>
          )}
          {address && (
            <button
              onClick={handleDeselectWallet}
              className="description text-[#fff] text-xs md:text-sm text-center block w-fit mx-auto mt-4"
              disabled={invalidReferral}
            >
              Change Wallet
            </button>
          )}
          <Link
            to={"/presale/how-to-buy"}
            className="description text-[#fff] text-xs md:text-sm text-center block w-fit mx-auto mt-4"
          >
            How to Buy?
          </Link>
        </form>
      </div>
    </>
  );
}

function PreSaleTxn({
  handleOpenWaitlist,
  price,
  nextPrice,
  phase,
  listingPrice,
}) {
  // Function to detect if the user is on mobile
  const isMobile = useMemo(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
    return /iPhone|iPad|iPod|Android/i.test(userAgent);
  }, []);

  //-----------------------------------------------------------> Blockchain code starts

  // const network = "devnet"; //testing
  const network = "mainnet-beta";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Define all available wallets
  const allWallets = useMemo(
    () => [
      // new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      // new SafePalWalletAdapter(),
      // new TorusWalletAdapter(),
      // new TrustWalletAdapter(),
      // new CoinbaseWalletAdapter(),
      // new WalletConnectWalletAdapter(),
      // new Coin98WalletAdapter(),
      // new CloverWalletAdapter(),
    ],
    []
  );

  // Filter wallets based on mobile or desktop
  const wallets = useMemo(() => {
    if (isMobile) {
      // On mobile, only show Phantom, Solflare, and Espresso Cash (using TrustWalletAdapter as a placeholder for Espresso Cash)
      return [
        // new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
      ];
    } else {
      // On desktop, show all wallets
      return allWallets;
    }
  }, [isMobile, allWallets]);

  //-----------------------------------------------------------> Blockchain code ends

  // localStorage.removeItem("walletName");
  // localStorage.removeItem("SolanaMobileWalletAdapterDefaultAuthorizationCache");//

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <PreSaleTxnForm
            handleOpenWaitlist={handleOpenWaitlist}
            price={price}
            nextPrice={nextPrice}
            phase={phase}
            listingPrice={listingPrice}
          />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default PreSaleTxn;
