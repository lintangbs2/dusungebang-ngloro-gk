"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { ObjectLocation, UMKMCard } from "@/type/type";
import ReactPaginate from "react-paginate";
import Maps from "../ui/Map";
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { events } from "@/data/events";

function EventList() {
  const [showMap, setShowMap] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [places, setPlaces] = useState<ObjectLocation[]>([]);
  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentUMKMs = events.slice(itemOffset, endOffset);
  const currentItems: ObjectLocation[] = currentUMKMs.map((event) => ({
    id: event.id,
    name: event.name,
    latitude: event.latitude,
    longitude: event.longitude,
    hrefLink: `/events/${event.name}`,
    thumbnail: event.thumbnail,
    summary: event.description,
    address: event.address,
    startDate: event.startDate,
  }));

  const pageCount = Math.ceil(events.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % events.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setPlaces(
      events.map((event) => ({
        id: event.id,
        name: event.name,
        latitude: event.latitude,
        longitude: event.longitude,
        hrefLink: `/events/${event.name.replace(/\s+/g, "-")}`,
        thumbnail: event.thumbnail,
        summary: event.description,
        address: event.address,
      }))
    );
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {!showMap && <Navbar />}

      <div
        className={`${
          showMap ? `block` : `hidden`
        } w-full h-full relative pt-2`}
      >
        <div className="flex flex-row justify-between items-center mb-4 px-4 ">
          <div className="text-lg">
            <span className="font-bold !text-[#F3C725] ">{events.length}</span>
            <span className="font-bold"> Results</span>
          </div>

          {/* map button */}
          <div
            className="flex items-center gap-x-2 mt-2 p-3 rounded-xl  bg-[#F0EFEB] cursor-pointer hover:bg-[#E8E6E2] transition-all duration-300
            lg:hidden"
            onClick={() => {
              setShowMap(false);
            }}
          >
            <RxHamburgerMenu size={24} />
            <span className="font-bold"> List</span>
          </div>
        </div>
        <div className="w-full h-[90vh]">
          <Maps
            places={currentItems}
            largeScreen={false}
            centerLatitude={-8.039333447637466}
            centerLongitude={110.49658308527756}
          />
        </div>
      </div>

      <div
        className={`pt-20 lg:pt-32 container-list  pr-6 ${
          showMap ? `hidden` : `block`
        }`}
      >
        <h1 className="!text-[#272726] font-semibold leading-[1.2]">Events</h1>
        <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] "></div>

        <div className="mt-4  ">
          <div className=" mt-4 flex flex-row justify-between items-center">
            <div className="text-lg">
              <span className="font-bold !text-[#F3C725] ">
                {events.length}
              </span>
              <span className="font-bold"> Results</span>
            </div>

            {/* map button */}
            <div
              className="flex items-center gap-x-2 mt-2 p-3 rounded-xl  bg-[#F0EFEB] cursor-pointer hover:bg-[#E8E6E2] transition-all duration-300
            lg:hidden"
              onClick={() => {
                setShowMap(true);
              }}
            >
              <LiaMapMarkedAltSolid size={24} />
              <span className="font-bold"> Map</span>
            </div>
          </div>
        </div>

        {/* list events & map (jika lg screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="col-span-2">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {currentItems.map((event, index) => (
                <EventCardComponent key={index} event={event} />
              ))}
            </div>

            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
              breakClassName={"break-me"}
              activeClassName={"active"}
              containerClassName={"pagination"}
            />
          </div>
          <div className="hidden lg:block h-[95%]  w-full rounded-xl">
            <Maps
              places={currentItems}
              largeScreen={true}
              centerLatitude={-8.039333447637466}
              centerLongitude={110.49658308527756}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EventCardComponent({ event }: { event: ObjectLocation }) {
  const shortMonth = event.startDate!.toLocaleString("en-US", {
    month: "short",
  });
  return (
    <a
      className="group grid grid-cols-2 sm:grid-cols-1 gap-3 "
      href={`/events/${event.name}`}
    >
      {/* event image */}
      <div
        className="relative w-40 h-34 sm:w-44 sm:h-34 md:w-52 md:h-44 xl:w-72 xl:h-60
      group-hover:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden"
      >
        <Image
          src={event.thumbnail!}
          alt={event.name}
          fill
          className="rounded-lg object-cover group-hover:scale-110 transform ease-in-out duration-400 transition-transform"
        />

        <div className="absolute bottom-1 left-1 flex flex-row gap-1 items-start justify-between bg-white shadow-md rounded-xl p-2">
          <span className="text-[8px] md:text-[16px] font-bold">From</span>
          <div className="flex flex-col">
            <span className=" font-bold md:text-3xl">
              {event.startDate!.getDate()}{" "}
            </span>
            <span className="text-sm font-bold md:text-xl">{shortMonth} </span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="!text-[#272726] font-bold text-lg">{event.name}</h4>
        <span className="text-sm !text-[#686867]">{event.address}</span>
      </div>
    </a>
  );
}

export default EventList;
