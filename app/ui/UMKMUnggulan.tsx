import Image from "next/image";
import React from "react";

function UMKMUnggulan() {
  return (
    <div
      className="mt-13  px-24 pt-10 pb-40 flex flex-col gap-14
  bg-black
  "
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="!text-white">UMKM Unggulan</h2>
        <div></div>
      </div>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
        <div className="relative w-[240px] h-[240px] md:w-[90%] md:h-[100%] ">
          <Image
            src="/img/mojo2.webp"
            alt="batik mojo"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="!text-white">Batik Mojo</h3>
          <p className="!text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            feugiat dictum leo, et feugiat dui laoreet a. Nulla mattis metus ut
            mi consequat porttitor. Praesent justo elit, porttitor at massa nec,
            mollis pharetra nulla. Sed accumsan, ipsum a pulvinar finibus, purus
            nibh dictum arcu, quis feugiat lacus dolor et urna. Mauris auctor
            ornare mauris. Pellentesque ut euismod nisi. Etiam venenatis vel est
            at euismod. Aenean sem lectus, placerat sit amet neque id, fermentum
            ultrices turpis. Mauris euismod, ligula eu egestas molestie, ipsum
            urna lobortis lacus, et auctor odio neque non lectus. Nulla
            tincidunt nisl purus. Pellentesque pulvinar maximus sapien, id
            facilisis odio interdum ut. Praesent ut quam et nisl commodo luctus
            sit amet non leo.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
        <div className="relative w-[240px] h-[240px] md:w-[90%] md:h-[100%] md:order-last md:ml-auto ">
          <Image
            src="/img/jajanan-pasar.jpg"
            alt="Jajanan Pasar"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="!text-white">Dr Snack</h3>
          <p className="!text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            feugiat dictum leo, et feugiat dui laoreet a. Nulla mattis metus ut
            mi consequat porttitor. Praesent justo elit, porttitor at massa nec,
            mollis pharetra nulla. Sed accumsan, ipsum a pulvinar finibus, purus
            nibh dictum arcu, quis feugiat lacus dolor et urna. Mauris auctor
            ornare mauris. Pellentesque ut euismod nisi. Etiam venenatis vel est
            at euismod. Aenean sem lectus, placerat sit amet neque id, fermentum
            ultrices turpis. Mauris euismod, ligula eu egestas molestie, ipsum
            urna lobortis lacus, et auctor odio neque non lectus. Nulla
            tincidunt nisl purus. Pellentesque pulvinar maximus sapien, id
            facilisis odio interdum ut. Praesent ut quam et nisl commodo luctus
            sit amet non leo.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
        <div className="relative w-[240px] h-[240px] md:w-[90%] md:h-[100%] ">
          <Image
            src="/img/sasha-snack.jpg"
            alt="batik mojo"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="!text-white">Sasha Snack</h3>
          <p className="!text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            feugiat dictum leo, et feugiat dui laoreet a. Nulla mattis metus ut
            mi consequat porttitor. Praesent justo elit, porttitor at massa nec,
            mollis pharetra nulla. Sed accumsan, ipsum a pulvinar finibus, purus
            nibh dictum arcu, quis feugiat lacus dolor et urna. Mauris auctor
            ornare mauris. Pellentesque ut euismod nisi. Etiam venenatis vel est
            at euismod. Aenean sem lectus, placerat sit amet neque id, fermentum
            ultrices turpis. Mauris euismod, ligula eu egestas molestie, ipsum
            urna lobortis lacus, et auctor odio neque non lectus. Nulla
            tincidunt nisl purus. Pellentesque pulvinar maximus sapien, id
            facilisis odio interdum ut. Praesent ut quam et nisl commodo luctus
            sit amet non leo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UMKMUnggulan;
