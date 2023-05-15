import React from "react";
import { Link } from "react-router-dom";
import buying from "../../assets/prosüdür.png";
import depolama from "../../assets/alım.png";
import proje from "../../assets/proje.png";
import pazarlama from "../../assets/pazarlama.png";
import liman from "../../assets/liman.png";
import paketleme from "../../assets/paketleme.png";
import tablet1 from "../../assets/Tablet1 (2).png";
import tablet2 from "../../assets/Tablet2.png";
import tablet3 from "../../assets/Tablet3.png";
import tablet4 from "../../assets/Tablet4.png";
import tablet5 from "../../assets/Tablet5.png";
import tablet6 from "../../assets/Tablet6.png";
export default function ServicesSlider() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-[1px] border-dashed mx-auto max-w-[1200px] my-5 bg-black"></div>

      {/* Hizmetlerimiz Slider */}

      <div className="hidden xl:flex xl:ml-[50px] items-center xl:flex-row flex-col xl:space-y-0 space-y-6 xl:space-x-5 my-20">
        <div className="max-w-[341px] mr-5 space-y-5 text-center">
          <div className="text-5xl">Hizmetlerimiz</div>
          <div className="text-2xl">
            <p>Sınırları aşan lojistik hizmetleri ile büyük adımlar atın</p>
          </div>
          <div className="text-orange text-3xl underline font-semibold underline-offset-8">
            <Link to={"/about"}>Hakkımızda</Link>
            <span className="text-4xl">+</span>
          </div>
          <div className="hidden justify-center space-x-32 pt-5">
            <svg
              width="43"
              height="36"
              viewBox="0 0 43 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43 18C43 18.4641 42.8156 18.9092 42.4874 19.2374C42.1592 19.5656 41.7141 19.75 41.25 19.75H6.97404L19.7381 32.5119C19.9007 32.6745 20.0297 32.8675 20.1177 33.0799C20.2057 33.2924 20.2509 33.5201 20.2509 33.75C20.2509 33.9799 20.2057 34.2076 20.1177 34.4201C20.0297 34.6325 19.9007 34.8255 19.7381 34.9881C19.5755 35.1507 19.3825 35.2797 19.17 35.3677C18.9576 35.4557 18.7299 35.501 18.5 35.501C18.27 35.501 18.0423 35.4557 17.8299 35.3677C17.6175 35.2797 17.4244 35.1507 17.2618 34.9881L1.51185 19.2381C1.34914 19.0756 1.22006 18.8826 1.13199 18.6701C1.04393 18.4577 0.998596 18.23 0.998596 18C0.998596 17.77 1.04393 17.5423 1.13199 17.3299C1.22006 17.1174 1.34914 16.9244 1.51185 16.7619L17.2618 1.01187C17.5902 0.6835 18.0356 0.499023 18.5 0.499023C18.9644 0.499023 19.4097 0.6835 19.7381 1.01187C20.0665 1.34024 20.2509 1.78561 20.2509 2.25C20.2509 2.71438 20.0665 3.15975 19.7381 3.48812L6.97404 16.25H41.25C41.7141 16.25 42.1592 16.4344 42.4874 16.7626C42.8156 17.0907 43 17.5359 43 18Z"
                fill="#FC9203"
              />
            </svg>

            <svg
              width="43"
              height="36"
              viewBox="0 0 43 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.4881 19.2381L25.7381 34.9881C25.4098 35.3165 24.9644 35.501 24.5 35.501C24.0356 35.501 23.5902 35.3165 23.2619 34.9881C22.9335 34.6598 22.749 34.2144 22.749 33.75C22.749 33.2856 22.9335 32.8402 23.2619 32.5119L36.0259 19.75H1.75C1.28587 19.75 0.840752 19.5656 0.512563 19.2374C0.184375 18.9092 0 18.4641 0 18C0 17.5359 0.184375 17.0907 0.512563 16.7626C0.840752 16.4344 1.28587 16.25 1.75 16.25H36.0259L23.2619 3.48812C22.9335 3.15975 22.749 2.71438 22.749 2.25C22.749 1.78561 22.9335 1.34024 23.2619 1.01187C23.5902 0.6835 24.0356 0.499023 24.5 0.499023C24.9644 0.499023 25.4098 0.6835 25.7381 1.01187L41.4881 16.7619C41.6508 16.9244 41.7799 17.1174 41.868 17.3299C41.956 17.5423 42.0014 17.77 42.0014 18C42.0014 18.23 41.956 18.4577 41.868 18.6701C41.7799 18.8826 41.6508 19.0756 41.4881 19.2381Z"
                fill="#FC9203"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap space-x-6 xl:space-x-2 space-y-4 xl:space-y-0 justify-center xl:justify-start">
          <div className="ml-6 xl:ml-0 xl:my-0 mt-4 ">
            <img alt="depolama" src={depolama}></img>
            <div className="text-2xl font-semibold">Depolama</div>
          </div>
          <div>
            <img alt="Satın Alma" src={buying}></img>
            <div className="text-2xl font-semibold">Satın Alma</div>
          </div>
          <div>
            <img alt="Parsiyer" src={liman}></img>
            <div className="text-2xl font-semibold">Parsiyer</div>
          </div>
          <div>
            <img alt="Paketleme" src={paketleme}></img>
            <div className="text-2xl font-semibold">Paketleme</div>
          </div>
          <div>
            <img alt="Pazarlama" src={pazarlama}></img>
            <div className="text-2xl font-semibold">Pazarlama</div>
          </div>
          <div className="">
            <img alt="Parsiyel" src={proje}></img>
            <div className="text-2xl font-semibold">Parsiyel</div>
          </div>
        </div>
      </div>
      <div className="text-5xl font-medium my-10 block xl:hidden">
        Hizmetlerimiz
      </div>
      <div className=" flex flex-wrap justify-center xl:hidden">
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">
            Uluslararası Pazarlama
          </div>
          <img alt="Proje fotoğrafı" src={tablet1}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Pazarlama</div>
          <img alt="Proje fotoğrafı" src={tablet2}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Paketleme</div>
          <img alt="Proje fotoğrafı" src={tablet3}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Parsiyel</div>
          <img alt="Proje fotoğrafı" src={tablet4}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Satın Alma</div>{" "}
          <img alt="Proje fotoğrafı" src={tablet5}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Depolama</div>
          <img alt="Proje fotoğrafı" src={tablet6}></img>
        </div>
      </div>
    </div>
  );
}
