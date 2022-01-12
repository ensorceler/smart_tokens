import React from "react";
import { IoAlertCircle } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
const TokenCreate = () => {
  return (
    <div className="flex flex-col items-start ">
      <h1 className="text-3xl font-semibold">
        Create and deploy your smart contract
      </h1>
      <p className="text-base">
        you can create your smart contract and deploy it to a testnet, fill up
        the information
      </p>

      <div className="flex h-fit flex-row mt-4 items-center gap-2 bg-red-300 w-full py-2 px-2 rounded-lg">
        <button>
          <FiAlertCircle fontSize={22} />
        </button>
        <h1 className="text-lg font-base">
          Please Install a wallet such as Metamask before continuing further
        </h1>
      </div>

      <div className="flex flex-row gap-5 ">
        <div
          aria-label="token_info"
          className="mt-4 w-80 flex flex-col items-start gap-2 pl-4 pr-4 pt-4 border shadow-xl"
        >
          <h1 className="text-lg font-medium text-rose-500">
            {" "}
            Token Information
          </h1>
          <div className="flex flex-col items-start w-full">
            <label>Token Name * </label>
            <input
              type="text"
              className="px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full  "
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label>Token Symbol *</label>
            <input
              type="text"
              className="px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full   "
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label>Token Decimals *</label>
            <input
              disabled
              type="text"
              value={18}
              className="bg-slate-200 px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full   "
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label>Token Initial Supply *</label>
            <input
              type="number"
              className="px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full   "
            />
          </div>

          <div className="flex flex-col items-start w-full mb-8">
            <label>Total Supply *</label>
            <input
              type="number"
              className="px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full   "
            />
          </div>
        </div>

        <div
          aria-label="token_network"
          className="mt-4 w-80 flex flex-col items-start gap-2 pl-4 pr-4 pt-4 border shadow-xl"
        >
          <h1 className="font-medium text-lg text-rose-500">Token Network </h1>

          <div className="flex flex-col items-start w-full mb-8">
            <label>Total Supply *</label>
            <select className="px-2 py-1 border-2 rounded-md focus:outline-none focus:border-rose-300 focus:border-2 w-full   ">
              <option>Ropsten Test Net</option>
              <option>Rinkeby Test Net</option>
              <option>Goerli Test Net</option>
              <option>Kovan Test Net</option>
            </select>
          </div>
        </div>
      </div>

      <div className="shadow-xl mt-4 w-full flex flex-col  border pb-4 gap-2">
        <h1 className="font-medium text-lg mt-2 m-0 text-rose-500">
          Transaction
        </h1>
        <div className="self-start pl-6 text-lg ">
          Commision Fees:{" "}
          <span className="bg-fuchsia-300 px-2 py-1 rounded-md">variable</span>
        </div>
        <div className="self-start pl-6 text-lg ">
          Gas Fees:{" "}
          <span className="bg-violet-300 px-2 py-1 rounded-md">variable</span>
        </div>

        <button className="px-4 py-2 bg-rose-400 text-white active:scale-90 w-20 ml-6 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TokenCreate;
