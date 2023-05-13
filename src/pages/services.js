import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
// import Services from "../components/ourServices";
import Hero from "../components/home/Hero";
import OtherServices from "../components/services/OtherServices";
import depo from "../assets/image 10 (2).png";
import tahta from "../assets/image 11.png";
import containerGemisi from "../assets/containerGemisi.png";
import paket from "../assets/image 12.png";
import work from "../assets/image 13.png";
import containerPlace from "../assets/image 14.png";
import ucakResmi from "../assets/image 15.png";
import vanResmi from "../assets/image 16.png";
import kuryeResmi from "../assets/image 17.png";
import crewResmi from "../assets/image 18.png";
import gemiResmi from "../assets/container-ship-arriving-commercial-port 4.png";
import { Link } from "react-router-dom";
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      {/* SECTİONS */}
      <div className="mt-20">
        {/* cart 1 */}
        <div className="flex flex-wrap-reverse xl:pl-3 space-y-reverse space-y-10 xl:space-y-0 xl:flex-nowrap items-center xl:space-x-32 max-w-[1560px] ml-auto">
          <div className="xl:max-w-[588px] xl:px-0 px-10 text-center xl:text-left mx-auto xl:mx-0 space-y-5">
            <div className="text-5xl text-center xl:text-left xl:mx-0">
              Hava Taşımacılığı
            </div>
            <div className="text-2xl text-left ">
              <p>
                Hava kargosu, ticari veya yüksek değerli malzemelerin, eşyaların
                ve ürünlerin hava taşımacılığı yoluyla taşınması işlemidir. Hava
                kargosu, hızlı, güvenli ve zaman duyarlılığı olan teslimatlar
                için tercih edilen bir lojistik seçeneğidir.
              </p>
            </div>
            <button className="bg-orange  text-white px-4 py-3">
              <Link to={"/air-transport"}>Detaya Git</Link>
            </button>
          </div>
          <div className="xl:mx-0 mx-auto">
            <img alt="Uçak Resmi" src={ucakResmi}></img>
          </div>
        </div>
        {/* cart 2 */}
        <div className="flex mt-20 flex-wrap space-y-10  xl:flex-nowrap items-center xl:space-x-32 max-w-[1560px] mr-auto">
          <div className="xl:mx-0 mx-auto">
            <img alt="Uçak Resmi" src={vanResmi}></img>
          </div>
          <div className="xl:max-w-[588px] xl:px-0 px-10 mx-auto xl:mx-0 text-center xl:text-left space-y-5">
            <div className="text-5xl xl:mx-0 mx-auto">Kara Taşımacılığı</div>
            <div className="text-2xl text-left xl:pr-3">
              <p>
                Kara taşımacılığı, esneklik, geniş coğrafi kapsama, uygun
                maliyetler ve kapıdan kapıya teslimat gibi avantajlar sunar.
                Aynı zamanda karayolu ağının yaygınlığı ve erişilebilirliği,
                kara kargosunun hızlı ve etkili bir taşımacılık yöntemi olmasını
                sağlar.
              </p>
            </div>
            <button className="bg-orange  text-white px-4 py-3">
              <Link to={"/land-transport"}>Detaya Git</Link>
            </button>
          </div>
        </div>
        {/* cart 3 */}
        <div className="flex mt-20 xl:pl-3 space-y-reverse space-y-10 flex-wrap-reverse xl:flex-nowrap items-center xl:space-x-32 max-w-[1560px] ml-auto">
          <div className="xl:max-w-[588px] xl:px-0 px-10 mx-auto xl:mx-0 text-center xl:text-left space-y-5">
            <div className="text-5xl xl:mx-0 mx-auto">Deniz Taşımacılığı</div>
            <div className="text-2xl text-left">
              <p>
                Deniz taşımacılığının avantajları arasında taşıma kapasitesi,
                düşük maliyetler, geniş coğrafi kapsama, enerji verimliliği ve
                çevre dostu bir seçenek olması yer alır. Deniz taşımacılığı,
                büyük hacimli yüklerin ekonomik ve güvenli bir şekilde
                taşınmasını sağlar.
              </p>
            </div>
            <button className="bg-orange  text-white px-4 py-3">
              <Link to={"/sea-transport"}>Detaya Git</Link>
            </button>
          </div>
          <div className="xl:mx-0 mx-auto">
            <img alt="Uçak Resmi" src={gemiResmi}></img>
          </div>
        </div>
      </div>

      {/* DİĞER */}
      <div className="max-w-[1200px] mx-auto xl:space-x-10 space-y-10 xl:space-y-0 flex xl:flex-nowrap flex-wrap mt-20 ">
        <div className="space-y-2 mx-auto mx:mx-0">
          <img alt="Kurye Resmi" src={kuryeResmi}></img>
          <div className="text-2xl ml-2 font-semibold">Kurye Taşımacılığı</div>
          <button className="text-2xl ml-2 text-orange underline font-semibold underline-offset-4">
            <Link to={"/contact"}> Teklif Al</Link>
          </button>
        </div>
        <div className="space-y-2 mx-auto xl:mx-0">
          <img alt="Kurye Resmi" src={crewResmi}></img>
          <div className="text-2xl ml-2 font-semibold">
            Minivan Taşımacılığı
          </div>
          <button className="text-2xl ml-2 text-orange underline font-semibold underline-offset-4">
            <Link to={"/contact"}> Teklif Al</Link>
          </button>
        </div>
      </div>
      {/* WHAT WE DO */}
      <div className="max-w-[1200px]  mx-auto">
        <div className="w-full border-2 my-40 border-dashed"></div>
        <div className="text-5xl text-center font-semibold">
          Diğer Hizmetlerimiz
        </div>
      </div>
      <OtherServices className="xl:hidden"></OtherServices>
      <div className="hidden xl:flex max-w-[1200px] flex-wrap justify-between mx-auto">
        <div className="my-6">
          <img alt="depo fotoğrafı" src={depo}></img>
          <div className="text-2xl my-2">DEPOLAMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={tahta}></img>
          <div className="text-2xl my-2">SATIN ALMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={containerGemisi}></img>
          <div className="text-2xl my-2">PARSİYEL</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={paket}></img>
          <div className="text-2xl my-2">PAKETLEME</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={work}></img>
          <div className="text-2xl my-2">PAZARLAMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={containerPlace}></img>
          <div className="text-2xl my-2">ULUSLARARASI PAZARLAMA</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
