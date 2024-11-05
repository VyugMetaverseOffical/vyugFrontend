import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useState } from "react";

function WalletBtnMobile() {
  const { connect, disconnect, connected, wallet, select, publicKey } =
    useWallet();
  const [selectedWalletMobile, setSelectedWalletMobile] = useState(null);
  const [isConnectingMobile, setIsConnectingMobile] = useState(false);

  const walletOptions = [
    { name: "Phantom", adapter: new PhantomWalletAdapter() },
    { name: "Solflare", adapter: new SolflareWalletAdapter() },
  ];

  const handleWalletSelectMobile = async (walletName) => {
    try {
      setIsConnecting(true);
      setSelectedWallet(walletName);
      select(walletName); // Selects wallet without immediately connecting
      await connect(); // Connects to the selected wallet
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  // Handle wallet disconnect
  const handleDisconnectMobile = async () => {
    if (connected) {
      await disconnect(); // Disconnect the wallet
      setSelectedWallet(null); // Reset selected wallet
    }
  };

  return <h1>Hi</h1>;
}
