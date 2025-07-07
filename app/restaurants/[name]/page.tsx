"use client";
import Navbar from "@/app/ui/Navbar";
import { cuisineString, restaurantsData } from "@/data/restaurants";
import { ObjectLocation, Restaurant } from "@/type/type";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Map, Marker, NavigationControl, Popup } from "@vis.gl/react-maplibre";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheck,
  FaLocationDot,
  FaMapLocationDot,
} from "react-icons/fa6";
import { allLocations } from "@/data/allLocation";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import Footer from "@/app/ui/Footer";
import { MdOpenInFull } from "react-icons/md";
import ReactImageGallery from "react-image-gallery";
import { IoIosClose } from "react-icons/io";
import "react-image-gallery/styles/css/image-gallery.css";

function RestaurantDetail() {
  const { name }: { name: string } = useParams();
  const [isOpenDescription, setIsOpenDescription] = useState(true);
  const [isOpenMap, setIsOpenMap] = useState(true);
  const [isOpenContact, setIsOpenContact] = useState(true);
  const [isOpenHours, setIsOpenHours] = useState(true);

  const toggleOpenDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const toggleOpenMap = () => {
    setIsOpenMap(!isOpenMap);
  };

  const toggleOpenContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  const toggleOpenHours = () => {
    setIsOpenHours(!isOpenHours);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [imageModalIndex, setImageModalIndex] = React.useState(0);
  const [imagesModal, setImagesModal] = React.useState<
    { original: string; thumbnail: string }[]
  >([]);
  const modalRef = React.useRef<ReactImageGallery>(null);

  const [viewState, setViewState] = React.useState({
    longitude: 100,
    latitude: -40,
    zoom: 15,
  });

  // Replace spaces with %20 for URL compatibility
  const removedName = name.replace(/%20/g, " ");
  const [popupData, setPopupData] = React.useState<ObjectLocation | undefined>(
    undefined
  );

  let data: Restaurant | undefined = restaurantsData.find(
    (item) => item.name === removedName
  );

  useEffect(() => {
    setViewState({
      longitude: data?.longitude || 100,
      latitude: data?.latitude || -40,
      zoom: 15,
    });

    if (data?.images) {
      setImagesModal(
        data.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      );
    }
  }, [data]);

  return (
    <div className="relative w-screen min-h-screen ">
      {/* image gallery modal */}
      <div
        className={` fixed z-12 pt-24 left-0 top-0 w-full h-full  bg-[rgba(0,0,0,0.9)] 
        ${isOpen ? `block` : `hidden`} `}
      >
        {/* // close button */}
        <ReactImageGallery items={imagesModal} ref={modalRef} />;
        <div
          className="absolute top-[5vh] right-[4vw] z-14 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>

      <Navbar />
      <div className="pt-24 container pr-6">
        <h1 className="!text-[#272726] font-bold">{data?.name}</h1>
        <span className="!text-[#F3C725] font-bold">Rumah Makan</span>{" "}
        <span className="!text-[#686867]">{data?.kelurahan}</span>
        <div className="md:grid md:grid-cols-4 md:gap-4 ">
          <div className="md:col-span-3 ">
            <div className="relative h-[202px] md:h-[500px] lg:h-[670px] flex-shrink-0 cursor-pointer mt-6">
              <Image
                src={data?.thumbnail!}
                alt={data?.name!}
                fill
                className="rounded-lg object-cover"
                onClick={() => {
                  setIsOpen(true);
                  setImageModalIndex(0);
                }}
              />

              <div
                className="absolute bottom-2  right-1 flex flex-row gap-2 items-center
           rounded-2xl bg-black opacity-70 p-3 pointer-events-none"
              >
                <MdOpenInFull color="white" size={20} />
                <p className="!text-white">Media Library</p>
              </div>
            </div>
            <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] mt-12 "></div>
            <div
              className="flex flex-row justify-between items-center cursor-pointer w-full py-2  font-medium text-left"
              onClick={toggleOpenDescription}
            >
              <h2 className="!text-[#272726] font-bold mt-6">Informasi</h2>
              <span>
                {isOpenDescription ? (
                  <FaAngleUp color="#dbd9d2" />
                ) : (
                  <FaAngleDown color="#dbd9d2" />
                )}
              </span>
            </div>
            {!isOpenDescription && (
              <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] "></div>
            )}
            {isOpenDescription && (
              <>
                <h3 className="!text-[#272726] font-bold mt-2">Deskripsi</h3>
                <p className="!text-[#686867] mt-2 text-lg pt-4">
                  {data?.description}
                </p>

                <h3 className="!text-[#272726] font-bold mt-6">
                  Fasilitas Restoran
                </h3>
                {data?.fasilitas && (
                  <div className="flex flex-row gap-2 mt-2">
                    {data.fasilitas.map((fasilitas, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#F0EFEB] rounded-3xl  
          items-center justify-center flex flex-row gap-2"
                      >
                        <FaCheck />
                        <span className="!text-[#272726]">{fasilitas}</span>
                      </div>
                    ))}
                  </div>
                )}
                <h3 className="!text-[#272726] font-bold mt-6">Masakan</h3>
                {data?.masakan && (
                  <div className="flex flex-row gap-2 mt-2">
                    {data.masakan.map((masakan, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#F0EFEB] rounded-3xl  
          items-center justify-center flex flex-row gap-2"
                      >
                        <FaCheck />
                        <span className="!text-[#272726]">
                          {cuisineString(masakan)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] "></div>
              </>
            )}
            <div
              className="flex flex-row justify-between items-center cursor-pointer w-full py-2  font-medium text-left"
              onClick={toggleOpenMap}
            >
              <h3 className="!text-[#272726] font-bold mt-6">
                Lihat lingkungan sekitar
              </h3>
              <span>
                {isOpenMap ? (
                  <FaAngleUp color="#dbd9d2" />
                ) : (
                  <FaAngleDown color="#dbd9d2" />
                )}
              </span>
            </div>
            {!isOpenMap && (
              <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] "></div>
            )}
            {isOpenMap && data && (
              <>
                <div className="w-[90vw] md:w-[75vw] lg:w-[50vw] h-[40vh] md:h-[50vh] lg:h-[60vh] relative pt-4">
                  <Map
                    {...viewState}
                    style={{ width: "100%", height: "100%", marginTop: "8px" }}
                    onMove={(evt) => setViewState(evt.viewState)}
                    mapStyle="https://tiles.openfreemap.org/styles/liberty"
                  >
                    <>
                      {popupData ? (
                        <Popup
                          longitude={popupData.longitude}
                          latitude={popupData.latitude}
                          anchor="bottom"
                          style={{ borderRadius: "12px", zIndex: 100 }}
                          closeButton={false}
                        >
                          <a
                            className="flex flex-row justify-center items-center gap-2 cursor-pointer
                                    py-1"
                          >
                            {/* restaurant image */}
                            <div className="relative w-24 h-24 md:w-38 md:h-24 ">
                              <Image
                                src={popupData.thumbnail!}
                                alt={popupData.name}
                                fill
                                className="rounded-lg object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="!text-[#272726] font-bold">
                                {popupData.name}
                              </h4>
                              <span className="text-sm !text-[#686867] mt-3">
                                {popupData.address}
                              </span>
                            </div>
                          </a>
                        </Popup>
                      ) : (
                        <></>
                      )}
                      <NavigationControl position="bottom-right" />
                      <div
                        onMouseEnter={() => {
                          if (window.innerWidth >= 768) {
                            setPopupData({
                              id: 0,
                              name: data?.name!,
                              latitude: data?.latitude!,
                              longitude: data?.longitude!,
                              summary: data?.description!,
                              thumbnail: data?.thumbnail!,
                              hrefLink: `/umkm/${data?.name}`,
                              address: data?.kontak?.alamat || "",
                            });
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth >= 768) {
                            setPopupData(undefined);
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation(); // prevent propagation to the map
                          if (window.innerWidth < 768) {
                            setPopupData({
                              id: 0,
                              name: data?.name!,
                              latitude: data?.latitude!,
                              longitude: data?.longitude!,
                              summary: data?.description!,
                              thumbnail: data?.thumbnail!,
                              hrefLink: `/umkm/${data?.name}`,
                              address: data?.kontak?.alamat || "",
                            });
                          }
                        }}
                      >
                        <Marker
                          key={`${data!.name}-0`}
                          longitude={data?.longitude!}
                          latitude={data?.latitude!}
                          anchor="center"
                          scale={1.4}
                        >
                          <FaLocationDot size={22} color="#3EA600" />
                        </Marker>
                      </div>

                      {allLocations.map((location, index) => {
                        if (location.name === data?.name) {
                          return null;
                        }
                        return (
                          <div
                            key={index}
                            onMouseEnter={() => {
                              if (window.innerWidth >= 768) {
                                setPopupData(location);
                              }
                            }}
                            onMouseLeave={() => {
                              if (window.innerWidth >= 768) {
                                setPopupData(undefined);
                              }
                            }}
                            onClick={(e) => {
                              e.stopPropagation(); // prevent propagation to the map
                              if (window.innerWidth < 768) {
                                setPopupData(location);
                              }
                            }}
                          >
                            <Marker
                              key={`${location!.name}-${location.id}`}
                              longitude={location?.longitude!}
                              latitude={location?.latitude!}
                              anchor="center"
                              scale={1.4}
                            >
                              <FaLocationDot size={22} color="#F3C725" />
                            </Marker>
                          </div>
                        );
                      })}
                    </>
                  </Map>
                </div>
                <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] "></div>
              </>
            )}
            <div
              className="flex flex-row justify-between items-center cursor-pointer w-full py-2  font-medium text-left"
              onClick={toggleOpenContact}
            >
              <h3 className="!text-[#272726] font-bold mt-6">Kontak</h3>
              <span>
                {isOpenContact ? (
                  <FaAngleUp color="#dbd9d2" />
                ) : (
                  <FaAngleDown color="#dbd9d2" />
                )}
              </span>
            </div>
            {!isOpenContact && (
              <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] "></div>
            )}
            {isOpenContact && (
              <>
                <div className="flex flex-col items-start justify-start gap-1 pt-4">
                  <p className="!text-[#686867]">
                    {data?.kontak?.namaPemilik}
                    <br />
                    {data?.kontak?.alamat}
                    <br />
                    {data?.kontak?.noTelp
                      ? `Telepon ${data?.kontak?.noTelp}`
                      : ``}
                    <br />
                    {data?.kontak?.email ? `Email ${data?.kontak?.email}` : ""}
                  </p>
                </div>
                <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] "></div>
              </>
            )}
            <div
              className="flex flex-row justify-between items-center cursor-pointer w-full py-2  font-medium text-left"
              onClick={toggleOpenHours}
            >
              <h3 className="!text-[#272726] font-bold mt-6">Jam Buka</h3>
              <span>
                {isOpenHours ? (
                  <FaAngleUp color="#dbd9d2" />
                ) : (
                  <FaAngleDown color="#dbd9d2" />
                )}
              </span>
            </div>
            {!isOpenHours && (
              <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] "></div>
            )}
            {isOpenHours && (
              <div className="flex flex-col item-start pt-4">
                {data?.openingHours &&
                  data.openingHours.map((jam, index) => (
                    <span
                      key={index}
                      className=" text-lg mt-2  !text-[#272726]"
                    >
                      {jam}
                    </span>
                  ))}
              </div>
            )}
          </div>
          {/* bagian kotak alamat dan jam buka */}
          <div className="hidden md:flex md:flex-col md:item-start md:gap-4 md:mt-6">
            <div className="sticky top-[20vh] gap-6 flex flex-col ">
              <div
                className="p-6 rounded-lg bg-[#F0EFEB]
              flex flex-col items-start "
              >
                <span className="!text-[#686867]">
                  {data?.kontak?.namaUsaha}
                </span>
                {data?.kontak?.namaPemilik && (
                  <span className="!text-[#686867]">
                    {data?.kontak?.namaPemilik}
                  </span>
                )}
                <span className="!text-[#686867]">{data?.kontak?.alamat}</span>
                <span className="!text-[#686867]">{data?.kontak?.noTelp}</span>
              </div>

              <div
                className="p-6 rounded-lg bg-[#F0EFEB]
              flex flex-col items-start "
              >
                <span className="!text-[#686867]">
                  {data?.kontak?.namaUsaha}
                </span>
                {data?.kontak?.namaPemilik && (
                  <span className="!text-[#686867]">
                    {data?.kontak?.namaPemilik}
                  </span>
                )}
                <span className="!text-[#686867]">{data?.kontak?.alamat}</span>
                <span className="!text-[#686867]">{data?.kontak?.noTelp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantDetail;
