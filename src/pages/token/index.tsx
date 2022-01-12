import React from "react";
import Pagination from "../../components/Pagination";

const Token = () => {
  return (
    <div className="text-left flex flex-col">
      <h1 className="text-3xl font-semibold self-start mb-4">
        What is ERC20 token ?
      </h1>
      <p className="self-start text-lg ">
        The ERC-20 (Ethereum Request for Comments 20) token standard allows for
        fungible tokens on the{" "}
        <a className="text-rose-500 underline" href="https://ethereum.org/en/">
          {" "}
          Ethereum
        </a>{" "}
        blockchain. The standard, proposed by{" "}
        <a
          className="text-rose-500 underline"
          href="https://twitter.com/feindura"
        >
          {" "}
          Fabian Vogelstellar
        </a>{" "}
        in November 2015, implements an API for tokens within smart contracts.
        The standard provides functions including the transfer of tokens from
        one account to another, getting the current token balance of an account
        and getting the total supply of the token available on the network.
        Smart contracts that correctly implement ERC-20 processes are called
        ERC-20 Token Contracts, and help keep track of the created tokens on
        Ethereum. Numerous cryptocurrencies have launched as ERC-20 tokens and
        have been distributed through initial coin offerings. Fees to send
        ERC-20 tokens must be paid with Ether.
      </p>
      <p className="text-lg mt-4">
        To put it simply, just like{" "}
        <a className="text-rose-400 underline">bitcoin</a>,{" "}
        <a className="text-rose-400 underline">litecoin</a> and any other
        cryptocurrency, ERC20 tokens are blockchain-based assets that have value
        and can be sent and received. The difference is that instead of running
        on their own blockchain, these tokens are issued on the Ethereum
        network. This means they’re hosted by Ethereum addresses and are sent
        using Ethereum transactions.
      </p>
      <h1 className="text-xl font-semibold tracking-wide mt-4">
        Popular ERC20 token list
      </h1>
      <p className="pl-4 pt-2">
        <ul className="list-disc ">
          <li> Chainlink (LINK)</li>
          <li>Tether (USDT) </li>
          <li>Wrapped Bitcion(WBTC) </li>
          <li>OmiseGO (OMG) </li>
          <li>0x (ZRX) </li>
          <li>Populous (PPT) </li>
          <li>Maker (MKR) </li>
          <li>Augur (REP) </li>
          <li>Golem (GNT) </li>
        </ul>
        <span className="font-medium text-rose-500">Important</span>: Some coins
        are launched as an ERC20 token, before being migrated over to their own
        blockchain. This means that the token will have to be swapped for a coin
        on the new blockchain once the migration is complete
      </p>
      <Pagination />
    </div>
  );
};

export default Token;
