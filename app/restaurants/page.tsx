"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { restaurantsData } from "@/data/restaurants";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { ObjectLocation, Restaurant } from "@/type/type";
import ReactPaginate from "react-paginate";
import Maps from "../ui/Map";
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

function Restaurants() {
  const [showMap, setShowMap] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [places, setPlaces] = useState<ObjectLocation[]>([]);
  const itemsPerPage = 15;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = restaurantsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(restaurantsData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % restaurantsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setPlaces(
      restaurantsData.map((restaurant) => ({
        id: restaurant.id,
        name: restaurant.name,
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
        hrefLink: `/restaurants/${restaurant.name.replace(/\s+/g, "-")}`,
        thumbnail: restaurant.thumbnail,
        summary: restaurant.description,
        address: restaurant.address,
      }))
    );
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {!showMap && <Navbar />}

      <div
        className={`${
          showMap ? `block` : `hidden`
        } w-full h-full relative pt-2`}
      >
        <div className="flex flex-row justify-between items-center mb-4 px-4 ">
          <div>
            <span className="font-bold !text-[#F3C725] ">
              {restaurantsData.length}
            </span>
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
        className={`pt-20 lg:pt-32 container-list pr-6 ${
          showMap ? `hidden` : `block`
        }`}
      >
        <h1 className="!text-[#272726] font-semibold leading-[1.2]">Restaurants</h1>

        <div className="mt-4  ">
          <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] "></div>

          <div className=" mt-4 flex flex-row justify-between items-center">
            <div>
              <span className="font-bold !text-[#F3C725] ">
                {restaurantsData.length}
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

        {/* list restaurants & map (jika lg screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="col-span-2">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {currentItems.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} />
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

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <a
      className="grid grid-cols-2 sm:grid-cols-1 gap-3"
      href={`/restaurants/${restaurant.name}`}
    >
      {/* restaurant image */}
      <div className="relative w-40 h-34 sm:w-52 sm:h-38 md:w-62 md:h-48">
        <Image
          src={restaurant.thumbnail}
          alt={restaurant.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <h4 className="!text-[#272726] font-bold">{restaurant.name}</h4>
        <span className="text-sm !text-[#686867]">{restaurant.address}</span>
      </div>
    </a>
  );
}

export default Restaurants;
