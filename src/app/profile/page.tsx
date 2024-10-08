"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProgressBar from "../component/ProgressBar";
import RadarChart from "../component/RadarChart";
import DataGridView from "../component/DataGridEvent";
import useWallet from "@/lib/useWallet";
import SparkleIcon from "../component/SparkleIcon";
import Typewriter from "../component/Typewriter";

const data = {
  labels: [
    "Cognitive Abilities",
    "Emotional Intelligence",
    "Adaptability",
    "Technical Ability",
    "Leadership Ability",
    "Social Abilities",
  ],
  datasets: [
    {
      label: "Skill Levels",
      data: [100, 59, 90, 81, 56, 55],
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "rgba(34, 202, 236, 1)",
      borderWidth: 2,
    },
  ],
};

const emptyData = {
  labels: [
    "Cognitive Abilities",
    "Emotional Intelligence",
    "Adaptability",
    "Technical Ability",
    "Leadership Ability",
    "Social Abilities",
  ],
  datasets: [
    {
      label: "Skill Levels",
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "rgba(34, 202, 236, 1)",
      borderWidth: 2,
    },
  ],
};

const initialRows = [
  { id: 1, no: 1, event: "Event 1", achievement: "Achievement 1" },
  { id: 2, no: 2, event: "Event 2", achievement: "Achievement 2" },
  { id: 3, no: 3, event: "Event 3", achievement: "Achievement 3" },
];

export default function Page() {
  const { wallet, isLoading, isError } = useWallet();
  const [rows, setRows] = useState(initialRows);

  // Function to handle data update (could be from user input)
  const updateData = (
    newData: { id: number; no: number; event: string; achievement: string }[],
  ) => {
    setRows(newData);
  };

  return (
    <div className="flex flex-col items-start h-screen p-4 space-y-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-row items-center  px-8 py-2 bg-white/50 rounded-lg w-full">
          <Image
            src="/User03C.png"
            width={100}
            height={100}
            className="rounded-full border-4 border-gray-300 my-4 h-24 w-24"
            alt="Profile photo"
          />
          <div className="ml-4 h-[150px] flex flex-col justify-center space-y-2">
            <h1 className="text-xl font-bold">{wallet && wallet.name}</h1>
            <p className="text-sm">{wallet && wallet.address}</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-4 p-8  bg-white/50 rounded-lg">
          <h1 className="text-2xl font-semibold">Major Skill</h1>
          <div>
            <ProgressBar
              percentage={wallet?.certificates.length != 0 ? 20 : 0}
              label="Front End"
            />
            <ProgressBar
              percentage={wallet?.certificates.length != 0 ? 50 : 0}
              label="Back End"
            />
            <ProgressBar
              percentage={wallet?.certificates.length != 0 ? 75 : 0}
              label="AI"
            />
            <ProgressBar
              percentage={wallet?.certificates.length != 0 ? 90 : 0}
              label="Data Analysis"
            />
          </div>
        </div>
        <div className="w-96 h-96 bg-white/50 rounded-lg">
          <RadarChart
            data={wallet?.certificates.length != 0 ? data : emptyData}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-4 bg-cyan-400/50 max-w-xl rounded-lg text-cyan-700">
        <SparkleIcon className="h-8 w-8" />
        {wallet?.certificates.length != 0 ? (
          <p className="text-lg font-light">
            You&apos;re making progress! According to your current skills,
            let&apos;s build on your frontend skills
          </p>
        ) : (
          <p className="text-lg font-light">
            Ready to make your mark? Head to the events page to find the right
            event for you.
          </p>
        )}
      </div>
      <div className="ml-[15px] mt-[-80px] flex flex-col justify-center">
        <p className="text-lg font-semibold">Recent Achievement</p>
      </div>

      <div className="mt-4 ml-3 w-3/4 h-[600px]">
        <DataGridView rows={rows} />
      </div>
    </div>
  );
}
