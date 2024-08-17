/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Pagination: React.FC = () => (
  <nav className="flex flex-col w-full max-md:max-w-full">
    <div className="flex w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
    <ul className="flex flex-wrap gap-10 justify-between items-center px-6 py-3 w-full max-md:px-5 max-md:max-w-full">
      <li className="self-stretch my-auto text-sm leading-none text-slate-500">
        Showing <span className="font-medium">1</span> to{" "}
        <span className="font-medium">10</span> of{" "}
        <span className="font-medium">97</span> results
      </li>
      <div className="flex self-stretch my-auto min-w-[240px] w-[378px] items-center">
        <button
          className="flex flex-col justify-center items-center px-2.5 bg-white rounded-md border border-solid border-zinc-200 h-[38px] w-[38px]"
          aria-label="Previous page"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b299aba1353ca26f9a8e0a5723a073c9f53377c8b21428d2b72ec22dd1e0739e?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
            alt=""
            className="object-contain w-5 aspect-square"
          />
        </button>
        <button
          className="px-4 py-2.5 text-sm font-medium leading-none text-center text-indigo-800 whitespace-nowrap bg-violet-100 border border-indigo-700 border-solid"
          aria-current="page"
        >
          1
        </button>
        <button className="px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          2
        </button>
        <button className="px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          3
        </button>
        <button className="px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          ...
        </button>
        <button className="px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          8
        </button>
        <button className="px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          9
        </button>
        <button className="z-10 px-4 py-2.5 text-sm font-medium leading-none text-center whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-500">
          10
        </button>
        <button
          className="flex flex-col justify-center items-center px-2.5 bg-white rounded-none border border-solid border-zinc-200 h-[38px] w-[38px]"
          aria-label="Next page"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443b8da8728f6860b431f9cf5a2df97cca707c60044b928a54a06c5d0d29463?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
            alt=""
            className="object-contain w-5 aspect-square"
          />
        </button>
      </div>
    </ul>
  </nav>
);

export default Pagination;
