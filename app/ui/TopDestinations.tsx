"use client";
import { destinations } from "@/data/destinations";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function TopDestinations() {
  return (
    <div className="flex flex-col gap-y-4 pl-1 pr-6 pt-4 container mt-10">
      <div className="flex flex-col items">
        <h2 className="pb-1 hyphens-auto ">Top Destinations</h2>
        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/destinations"
        >
          <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
            Learn more
          </span>
          <FaArrowRight
            color="#F3C725"
            className="group-hover:animate-seemore-next"
          />
        </a>
      </div>

      <div className="flex gap-x-2 items-center overflow-x-scroll  hide-scrollbar flex-shrink-0">
        {destinations.map((destination, index) => (
          <a
            key={index}
            href={`/destinations/${destination.name}`}
            className="group relative w-[170px] h-[170px] lg:w-[347px] lg:h-[347px] flex-shrink-0 cursor-pointer
            hover:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden"
          >
            <Image
              src={destination.thumbnail}
              alt={destination.name}
              fill
              className={`rounded-lg object-cover group-hover:scale-110 transform ease-in-out
               duration-400 transition-transform`}
            />
            <h3 className="font-bold text-white absolute bottom-2 left-2 ">
              {destination.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;
