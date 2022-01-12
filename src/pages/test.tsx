import React from "react";

import { ethers, ContractFactory } from "ethers";
import TokenABI from "../../artifacts/contracts/ERC20.sol/ERC20.json";
const tokenAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
import { useTheme } from "next-themes";

const Test = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    console.log(theme);
    let changetheme = theme == "light" ? "dark" : "light";
    setTheme(changetheme);
  };
  const openWallet = () => {
    window.ethereum.enable();
    console.log(window.ethereum);
  };

  const [name, setName] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [totalsupply, setTotalSupply] = React.useState("");
  const [owner, setOwner] = React.useState("");

  enum tokenFunction {
    NAME,
    SYMBOL,
    totalSupply,
    owner,
  }

  const fnToken = async (option: tokenFunction) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const token = new ethers.Contract(tokenAddress, TokenABI.abi, provider);

    try {
      switch (option) {
        case tokenFunction.NAME: {
          const tx = await token.NAME();
          console.log("name");
          setName(tx);
          break;
        }
        case tokenFunction.SYMBOL: {
          const tx = await token.SYMBOL();
          console.log("symbol");
          setSymbol(tx);
          break;
        }
        case tokenFunction.owner: {
          const tx = await token.owner();
          setOwner(tx);
          console.log("owner");
          break;
        }
        case tokenFunction.totalSupply: {
          const tx = await token.totalSupply();
          setTotalSupply(parseInt(tx._hex, 16).toString());
          console.log("totalSupply");
          break;
        }
        default:
          console.log("default");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deployContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ContractFactory(
      TokenABI.abi,
      TokenABI.bytecode,
      signer
    );

    const tx = await contract.deploy();
    console.log(tx.address);
    console.log(tx);
  };

  return <div className="text-center">Hello</div>;
};

export default Test;
