"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";
import React from "react";
import DisplayCards from "../ui/DisplayCards";
import { FaArrowRight } from "react-icons/fa";
import { UMKMCard } from "@/type/type";
import { dataUMKMUnggulan } from "@/data/umkm";

function UMKM() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div className="relative h-full w-full">
          <Image
            src={"/img/batik.jpg"}
            fill
            alt="umkm"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Usaha Mikro, Kecil, dan Menengah (UMKM)
          </h1>
        </div>
      </div>
      <div className="mt-4 pl-2 pr-6 py-2 container ">
        <p className="text-xl ">
          Di balik perbukitan karst dan semilir angin selatan Gunungkidul,
          tersembunyi kisah-kisah ketekunan dan kreativitas dari dua kelurahan
          yang sarat potensi: Jetis dan Ngloro, Kecamatan Saptosari. Halaman ini
          memamerkan ragam produk UMKM unggulan—hasil tangan-tangan terampil,
          rasa lokal yang autentik, serta semangat usaha yang tak pernah padam.
          Setiap produk yang ditampilkan bukan sekadar barang—ia adalah cerita.
          Cerita tentang bahan alami yang diolah dengan kearifan tradisional,
          tentang kerajinan yang lahir dari budaya, dan tentang harapan yang
          tumbuh bersama cita rasa dan mutu.
        </p>

        <DisplayCards cards={dataUMKMUnggulan} />

        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/umkms"
        >
          <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
            See more
          </span>
          <FaArrowRight
            color="#F3C725"
            className="group-hover:animate-seemore-next"
          />
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default UMKM;
