import React, { useState } from "react";
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { ethers } from "ethers";

const MetaMaskConnect = () => {
  const [data, setData] = useState({
    address: "",
    balance: null,
  });

  const btnHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("Install MetaMask extension!!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setData({
          ...data,
          balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    setData({
      ...data,
      address: account,
    });

    getBalance(account);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <Typography variant="h5" gutterBottom>
          MetaMask Connection
        </Typography>
        <Card>
          <CardHeader title="Address" subheader={data.address} />
          <CardContent>
            <Typography variant="body1">
              <strong>Balance: </strong>
              {data.balance}
            </Typography>
            <Button onClick={btnHandler} variant="contained" color="primary">
              Connect to Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MetaMaskConnect;
