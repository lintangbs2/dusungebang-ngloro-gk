import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import VideoHero from "@/app/ui/VideoHero";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const culinaryItems = [
  {
    image: "/img/bakmijawa-gunungkidul.jpg",
    alt: "bakmi jawa gunungkidul",
    title: "Bakmi Jawa",
    description: `Bakmi Jawa adalah hidangan khas yang berasal dari Gunungkidul,
                  Yogyakarta. Dimasak dengan bumbu tradisional Jawa dan
                  menggunakan tungku tanah liat (anglo) serta api arang, bakmi
                  ini menghadirkan cita rasa otentik yang sulit dilupakan.
                  Keunikan dari Bakmi Jawa terletak pada proses
                  memasaknya—setiap porsi dimasak secara terpisah di wajan
                  kecil, memastikan setiap sajian memiliki rasa yang konsisten
                  dan khas. Biasanya disajikan dalam bentuk bakmi rebus, Bakmi
                  Jawa juga memiliki variasi goreng yang tak kalah lezat.
                  Sentuhan khas lainnya adalah suwiran ayam kampung dan telur
                  bebek yang menambah kekayaan rasa dalam semangkuk bakmi
                  hangat.`,
  },
  {
    image: "/img/lempeng-thiwul.jpeg",
    alt: "lempeng thiwul",
    title: "Lempeng Thiwul",
    description: `Dulunya, thiwul merupakan makanan pokok masyarakat Gunungkidul
              saat beras sulit dijangkau. Kini, melalui tangan kreatif pelaku
              UMKM lokal seperti di Gerai Yu Tum, Thiwul telah bertransformasi
              menjadi sajian yang lebih modern namun tetap mempertahankan
              keaslian cita rasa. Diolah menggunakan tungku tanah liat dan bahan
              bakar kayu, thiwul disajikan dengan taburan kelapa parut, bahkan
              tersedia dalam variasi unik seperti Thiwul Srintil, Thiwul Coblong
              (isi gula merah), hingga Thiwul Tumpeng. Salah satu bentuk sajian
              thiwul yang menarik adalah Lempeng Thiwul—hasil olahan thiwul yang
              dipadatkan dan dibakar hingga beraroma khas, cocok dijadikan
              oleh-oleh atau camilan di waktu santai. Proses pembuatannya
              sederhana namun sarat tradisi: tepung gaplek diayak, dibasahi,
              ditambahkan gula, lalu dikukus dan diproses menjadi lempengan yang
              tahan lama. Selain lezat, Lempeng Thiwul juga menyimpan manfaat
              kesehatan. Berasal dari singkong, ia kaya akan karbohidrat
              kompleks, serat tinggi, serta memiliki indeks glikemik rendah,
              menjadikannya pilihan bijak bagi pola makan sehat.`,
  },
  {
    image: "/img/lemper-benguk.jpg",
    alt: "lemper benguk",
    title: "Lemper Benguk",
    description: `Lemper biasanya dikenal sebagai jajanan tradisional berbahan dasar
              ketan. Namun, Lemper Benguk dari Kalurahan Jetis, Kapanewon
              Saptosari, Gunungkidul hadir dengan keunikan tersendiri. Alih-alih
              menggunakan beras ketan, lemper ini dibuat dari koro benguk,
              sejenis kacang-kacangan lokal yang tumbuh subur di wilayah Jetis.
              Teksturnya yang lebih padat dan rasa gurih alami dari kacang koro
              memberikan sensasi baru yang berbeda dari lemper biasa. Di bagian
              tengahnya, lemper ini diisi dengan abon sapi atau ayam,
              menciptakan kombinasi rasa yang khas dan menggugah selera. Proses
              pembuatannya cukup panjang, mulai dari memanen koro benguk tua,
              merendam dan mengukus biji-bijinya, hingga mengolahnya menjadi
              adonan lemper. Meski tampilannya tetap dibungkus daun pisang
              seperti lemper pada umumnya, bahan dasar koro benguk inilah yang
              membuatnya istimewa dan belum ditemukan di daerah lain.`,
  },
  {
    image: "/img/thiwul-manis.jpg",
    alt: "thiwul manis",
    title: "Tiwul Manis",
    description: `Tiwul manis adalah kuliner tradisional khas Gunungkidul yang
              terbuat dari tepung gaplek—singkong yang dikeringkan lalu ditumbuk
              halus. Setelah dikukus bersama taburan gula merah, tiwul disajikan
              dengan parutan kelapa yang diberi sedikit garam, menciptakan cita
              rasa manis-gurih yang khas dan menggugah selera. Dahulu, tiwul
              dikenal sebagai makanan pokok pengganti nasi saat masa sulit,
              terutama pada masa penjajahan dan musim paceklik. Kini, tiwul
              manis justru menjadi ikon kuliner lokal yang dicari karena
              keunikan rasa dan nilai sejarahnya. Selain lezat dan
              mengenyangkan, tiwul juga dipercaya lebih ramah di perut dan
              menjadi alternatif sehat bagi yang ingin mengurangi konsumsi nasi
              putih. Di Kecamatan Saptosari, sajian tiwul manis tidak hanya
              menjadi bagian dari tradisi kuliner, tetapi juga simbol kearifan
              lokal yang terus dilestarikan. Jika Anda berkunjung ke
              Gunungkidul, jangan lewatkan kesempatan untuk mencicipi tiwul
              manis khas Jetis yang otentik dan penuh makna.`,
  },
  {
    image: "/img/sego-gendong.webp",
    alt: "sego gendong",
    title: "Sego Gendong",
    description: `Sego gendong adalah nasi bungkus khas pasar tradisional yang
              dibalut dengan daun jati, menghadirkan aroma yang menggugah
              selera. Seporsi sego gendong berisi nasi hangat yang dipadukan
              dengan sayur brongkos, mihun goreng, telur rebus (gelundung), tahu
              bacem, sambal goreng tempe, dan lauk pendamping lainnya yang
              sederhana namun kaya rasa. Mbah Genuk, warga Padukuhan Karang,
              Kalurahan Jetis, telah meracik dan menjual sego gendong ini selama
              hampir tiga dekade. Awalnya dijual di pasar tradisional, kini
              dagangannya menjadi kuliner favorit yang ditunggu-tunggu warga,
              bahkan hingga dini hari. Setiap malam Legi dan Pon, mulai pukul
              23.00 WIB hingga 04.00 WIB, halaman rumah Mbah Genuk dipadati
              pelanggan setia yang rela antre demi mencicipi kelezatan sego
              gendong racikannya. Dengan cita rasa otentik, bahan-bahan alami,
              dan harga yang ramah di kantong, sego gendong Mbah Genuk tak hanya
              mengenyangkan, tetapi juga menyimpan kenangan dan kehangatan khas
              dapur rumahan. Tak heran, kuliner ini terus diburu, bahkan kerap
              viral di media sosial karena keunikan dan kelezatannya.`,
  },
];

function Culinary({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div className="relative h-full w-full">
          <Image
            src={"/img/indonesian-food.jpg"}
            fill
            alt="Video Hero"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Culinary
          </h1>
        </div>
      </div>
      <div className="mt-4 px-2 py-2 container ">
        <p className="text-xl tracking-wide">
          Manjakan diri Anda dengan menikmati kuliner khas di warung tradisional
          Saptosari, mencicipi hidangan di tempat makan baru yang kekinian
          dengan nuansa pedesaan, bersantap di resto lokal yang mulai dikenal
          hingga luar daerah, atau menikmati makanan sederhana sambil memandangi
          indahnya perbukitan Saptosari Gunungkidul.
        </p>

        {culinaryItems.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 justify-center mt-8 items-center "
            >
              <div
                className={` w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] flex-shrink-0 cursor-pointer
        relative  mr-auto ${index % 2 === 0 ? "md:order-last md:ml-auto" : ""}
        `}
              >
                <Image
                  src={item.image}
                  alt={`${item.alt}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col  ">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-base !text-[#686867] break-words pr-3">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/restaurants"
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

export default Culinary;
