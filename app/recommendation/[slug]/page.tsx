import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import VideoHero from "@/app/ui/VideoHero";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const pageNav = {
  hiking: [
    {
      title: "Description",
    },
  ],
};

function Recommendation({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <VideoHero params={{ slug: slug }} />
      <div className="mt-4 px-2 py-2 container ">
        <p className="text-xl">
          Ascend a peak, hike through alpine meadows, explore a forest? You
          decide! Thanks to over 65 000 kilometres of waymarked trails,
          virtually every corner of Switzerland is waiting to be discovered. The
          paths are well marked and as varied as the scenery – in fact, they
          quickly become an end in themselves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div
            className=" w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] flex-shrink-0 cursor-pointer
        relative  mr-auto
        "
          >
            <Image
              src={"/img/hiking-gunungkidul-tenda.webp"}
              alt="Pemandangan"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col  ">
            <h2 className="font-bold">All hikes</h2>
            <p className="text-base !text-[#686867] break-words pr-3">
              Whether high altitude trails, river walks or family trails: In
              Switzerland you can find hiking trails of all kinds and for every
              level. See here all the hikes and the information about them.
            </p>
          </div>
        </div>

        <a className="group cursor-pointer flex items-center mt-1 gap-x-2">
          <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
            Learn more
          </span>
          <FaArrowRight
            color="#F3C725"
            className="group-hover:animate-seemore-next"
          />
        </a>

        <div className="mt-4">
          <h2 className="font-bold text-[#272726]">Information on hiking</h2>
          <p className="text-xl mt-2 break-words pr-3 !text-[#686867] ">
            How are hiking trails marked in Switzerland? How do I plan a hike?
            The answers are here – with lots more useful information on hiking.
          </p>
          <p className="!text-[#686867] mt-2 pr-3">
            Switzerland boasts the longest, densest, most varied and best
            waymarked network of hiking trails – a record-breaker in so many
            ways. Some 65 000 kilometres of waymarked trails at all levels of
            challenge from straightforward to alpine.
          </p>
        </div>

        <div className="mt-4">
          <h2>Trails and signs</h2>

          <div className="">
            <h3>Hiking trails</h3>

            <p className="!text-[#686867] pr-3">
              <b className="text-black">Hiking trails</b> are often wide, but
              may also be narrow and uneven. Steps are provided to assist with
              steep sections and safety rails are present to prevent falls.
              Apart from the ordinary need for care and attention, there are no
              special requirements for users. Appropriate clothing, including
              solid, slip-resistant shoes and topographic maps are recommended.
            </p>

            <p className="!text-[#686867] pr-3">
              <b className="text-black">Signs:</b>
              yellow signposts, diamond-shaped blazes and direction arrows
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Recommendation;
