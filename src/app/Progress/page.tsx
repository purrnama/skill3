/**
 * This code was generated by Builder.io.
 */
import React from "react";
import VerificationForm from "./VerificationForm";
import Table from "./Table";
import Pagination from "./Pagination";

const data = [
  ["4030.40", "18-06-2017 12:38:42", "ETH/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "ETH/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "BTC/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "ETH/USDT", "4030.40"],
  ["4030.40", "18-06-2017 12:38:42", "ETH/BTC", "4030.40"],
];

const Main: React.FC = () => (
  <div className="pr-20  max-md:pr-5">
    <div className="flex gap-5 max-md:flex-col">
      <main className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
        <header className="flex flex-col mt-28 ml-10 w-full max-md:mt-10 max-md:max-w-full">
          <h1 className="self-center text-2xl mt-[-50px] font-medium text-black max-md:max-w-full">
            Blockchain certificate Universal Verifier
          </h1>
          <VerificationForm />
        </header>
        <Table rows={data} />
        <Pagination />
      </main>
    </div>
  </div>
);

export default Main;
