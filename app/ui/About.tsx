"use client";
import Image from "next/image";
import React from "react";
import OnlyNgloroBoundary from "./OnlyNgloroBoundary";

function About() {
  return (
    <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-2  px-2 py-4 container mt-10">
      <div className="text-left lg:text-left text-[#111111]">
        <h2 className="pb-4 font-bold ">
          Ngloro is unique, Ngloro is Unmatched
        </h2>
        <p className="lg:text-xl pb-2">
          <b>There is no other place like Ngloro</b>
        </p>

        <p className="lg:text-xl">
          Ngloro offers a rare fusion of{" "}
          <b>
            {" "}
            rich cultural heritage, stunning natural beauty, welcoming people,
            and a wide array of experiences
          </b>
        </p>
      </div>

      <div
        className="relative justify-self-center  overflow-hidden
      "
      >
        <OnlyNgloroBoundary />
      </div>
    </div>
  );
}

export default About;
