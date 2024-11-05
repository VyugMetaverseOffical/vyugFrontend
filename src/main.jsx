import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "eabf77141da26dd5fc43d90fffecee1a";

// 2. Create a metadata object - optional
const metadata = {
  name: "Vyug Presale",
  description:
    "Explore Vyug, The World's first largest Hyper-Realistic Metaverse and Virtual Reality. Experience next-gen digital experiences of Vyug Metaverse Platform.",
  url: "https://www.vyugmetaverse.com/", // origin must match your domain & subdomain
  icons: ["https://www.vyugmetaverse.com/favicon.ico"],
};

const userAgent =
  typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

let walletIds;
if (isMobile) {
  walletIds = [
    // "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    // "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709", // OKX Wallet
    "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150", // SafePal Wallet
    // "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f", // ByBit Wallet
    // "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d", // Crypto.com Defi Wallet
    "e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4", // Exodus
    // "84b43e8ddfcd18e5fcb5d21e7277733f9cccef76f7d92c836d0e481db0c70c04", // Blockchain.com
    // "18450873727504ae9315a084fa7624b5297d2fe5880f0982979c17345a138277", // Kraken Wallet
    "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0", // Backpack
    // "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26", // Math wallet
    "47bb07617af518642f3413a201ec5859faa63acb1dd175ca95085d35d38afb83", // Keyring Pro
    // "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01", // Coin98 Super wallet
    // "797c615e2c556b610c048eb35535f212c0dd58de5d03e763120e90a7d1350a77", // iToken Wallet
    // "b823fb0d7228ef8e3c0bc9607df9ed79dae2ab3a2811d33f22ade4f573c18232", // Slavi Wallet
    // "8631ca765defdf51cd72444ec0284b866c835a947ed082d41c0c756a3b2eb1c2", // GridLock Wallet
    // "c3b76dabb8b8161b2848a4c313b559a2cd719b43732c3e0da00f345e571241e5", // T+ wallet
    "cb7d4e00e9c6ba5ca1ef3b3464ce1ccf0468f7526fbda116106302525f929807", // Unity wallet
    // "a2eb8a1c403a4440b2f578e9deb185b8e22cf4ec2a2a58441032b84b13aaab87", // The Pulse wallet
    "1a5f2435e8e31c4034f1d142e85d9f7d3be2a09ddf710e5ef1ad4e36c719d3c0", // iOPay wallet
    // "a0e04f1086aac204d4ebdd5f985c12ed226cd0006323fd8143715f9324da58d1", // Safe Moon
    // "482779b01ffd93b70c1f62e7905658ca1a6b02799f498b07cce423f7841aed75", // Zypto
    // "e9a73053c7d8cf7f8eb732e3da6a8dfd3cc211ea4dc00e0274b9dec6e3316605", // Tasty crypto
    // "078d94b4c8706e12fe379e85242ce963380acfd678518e2d8ea73ee532d9bacc", // Daffy One
  ];
} else if (!isMobile) {
  walletIds = [
    // "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
    "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709", // OKX Wallet
    "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150", // SafePal Wallet
    "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f", // ByBit Wallet
    // "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d", // Crypto.com Defi Wallet
    "e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4", // Exodus
    // "84b43e8ddfcd18e5fcb5d21e7277733f9cccef76f7d92c836d0e481db0c70c04", // Blockchain.com
    "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6", // Magic Eden ---------------------- Injected
    // "18450873727504ae9315a084fa7624b5297d2fe5880f0982979c17345a138277", // Kraken Wallet
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa", // Coinbase Wallet ----------------- Injected
    "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0", // Backpack
    "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393", //Phantom -------------------------- Injected
    "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79", // Solflare ------------------------ Injected
    // "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26", // Math wallet
    // "47bb07617af518642f3413a201ec5859faa63acb1dd175ca95085d35d38afb83", // Keyring Pro
    // "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041", //Frontier ------------------------- Injected
    "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01", // Coin98 Super wallet
    "163d2cf19babf05eb8962e9748f9ebe613ed52ebf9c8107c9a0f104bfcf161b3", // Brave wallet -------------------- Injected
    "797c615e2c556b610c048eb35535f212c0dd58de5d03e763120e90a7d1350a77", // iToken Wallet
    "b823fb0d7228ef8e3c0bc9607df9ed79dae2ab3a2811d33f22ade4f573c18232", // Slavi Wallet
    "f896cbca30cd6dc414712d3d6fcc2f8f7d35d5bd30e3b1fc5d60cf6c8926f98f", // XDefi Wallet -------------------- Injected
    // "8631ca765defdf51cd72444ec0284b866c835a947ed082d41c0c756a3b2eb1c2", // GridLock Wallet
    // "c3b76dabb8b8161b2848a4c313b559a2cd719b43732c3e0da00f345e571241e5", // T+ wallet
    // "cb7d4e00e9c6ba5ca1ef3b3464ce1ccf0468f7526fbda116106302525f929807", // Unity wallet
    // "a2eb8a1c403a4440b2f578e9deb185b8e22cf4ec2a2a58441032b84b13aaab87", // The Pulse wallet
    // "1a5f2435e8e31c4034f1d142e85d9f7d3be2a09ddf710e5ef1ad4e36c719d3c0", // iOPay wallet
    // "a0e04f1086aac204d4ebdd5f985c12ed226cd0006323fd8143715f9324da58d1", // Safe Moon
    // "482779b01ffd93b70c1f62e7905658ca1a6b02799f498b07cce423f7841aed75", // Zypto
    // "e9a73053c7d8cf7f8eb732e3da6a8dfd3cc211ea4dc00e0274b9dec6e3316605", // Tasty crypto
    // "078d94b4c8706e12fe379e85242ce963380acfd678518e2d8ea73ee532d9bacc", // Daffy One
    "9a4cddbdbc19005be790f37cc9176dd24eae51aa2a49fa3edeb3b6a8b089b7be", // Nightly ------------------------- Injected
  ];
}

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana ],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false, // default to true
    socials: false,
    emailShowWallets: true,
  },
  featuredWalletIds: walletIds,
  allWallets: "HIDE",
  enableWalletConnect: true,
  debug: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </StyledEngineProvider>
  </BrowserRouter>
);
