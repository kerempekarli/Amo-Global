import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Iraq from "../assets/Rectangle 95.png";
export default function Contact() {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  // }, []);
  return (
    <div className="">
      <Header></Header>
      <div className="bg-kahve">
        <div className="text-5xl pt-20 pb-5 font-semibold px-20 text-white">
          AMO GLOBAL
        </div>
        <div className=" text-2xl lg:text-4xl px-20 pb-20  lg:text-justify text-white">
          Lojistikte profesyonel çözümler, başarıya giden yolda bizimle
          ilerleyin.
        </div>
      </div>{" "}
      {/* section2 */}
      <div className="text-center max-w-5xl mx-auto lg:p-7 xl:shadow-lg mt-10 lg:-mt-7 bg-white z-10">
        <div className="mb-12">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.4366 30.2732L33.9233 35.2199C34.647 37.7162 35.6653 40.1175 36.9566 42.3732C38.3006 44.6133 39.9174 46.678 41.7699 48.5199L48.9099 46.3199C52.9099 45.0866 57.2766 46.3532 59.9366 49.5199L64.0033 54.3599C65.6498 56.3029 66.4752 58.8105 66.3047 61.3516C66.1342 63.8927 64.9812 66.2676 63.0899 67.9732C56.4566 74.0266 46.2433 76.0732 38.5966 70.0666C31.8761 64.7749 26.1898 58.2885 21.8233 50.9332C17.4471 43.6125 14.5185 35.5191 13.1966 27.0932C11.7299 17.6132 18.6699 10.0266 27.3233 7.43989C32.4833 5.89323 37.9899 8.54656 39.8833 13.4932L42.1166 19.3266C43.5833 23.1666 42.5299 27.4999 39.4366 30.2732Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="text-4xl lg:text-5xl px-10  max-w-5xl mb-12 mx-auto">
          Bizimle iletişime geçin
        </div>
        <div className=" text-2xl lg:text-3xl px-10  max-w-5xl mb-12 mx-auto text-left">
          "Bize ulaşın, sorularınızı yanıtlayalım ve ihtiyaçlarınıza en uygun
          lojistik çözümleri sunalım."
        </div>
        <div className=" text-3xl sm:text-4xl max-w-5xl mb-12 text-[#02015F] mx-auto">
          +90 530 348 84 44
        </div>
      </div>
      {/* SECTİON 3 */}
      <div>
        {/* CONTAİNER */}
        <div className="flex mt-20 sm:pl-12  flex-wrap xl:space-x-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.6817914844921!2d28.954017869658873!3d41.00934451021063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab987c3f4a98b%3A0x13369231b95243b6!2zS2FyZGXFn2xlciDEsMWfIEhhbsSx!5e0!3m2!1str!2str!4v1684147654335!5m2!1str!2str"
              className="box-border lg:w-[500px] xl:ml-52 xl:w-[600px] lg:h-[450px] w-screen sm:w-[400px] md:w-[600px] h-[400px]"
              title="a"
            ></iframe>
          </div>
          <div className="text-2xl xl:text-3xl font-normal pl-5  mt-10 xl:mt-2 space-y-7">
            <div className="text-4xl font-medium">Merkez</div>
            <div>
              Mesih Paşa Mah. Ordu Cad. No 105 <br></br>Kardeşler İş Hanı Kat 4
              Daire No 23
            </div>
            <div>İstanbul/Fatih</div>
            <div>Phone/Fax</div>
            <div>+90 530 348 44 44</div>
          </div>
        </div>
        {/* CONTAİNER 2 */}
        <div className="flex mt-20 sm:pl-12  flex-wrap xl:space-x-10">
          <div>
            <img
              src={Iraq}
              alt="Irak"
              className="box-border xl:ml-52 lg:w-[500px] xl:w-[600px] w-[600px] "
            ></img>
          </div>
          <div className="text-2xl xl:text-3xl pl-5 mt-10 xl:mt-2 space-y-7">
            <div className="text-4xl font-medium ">Irak Şubemiz</div>
            <div>Yeni Dolar Pazarı No 4</div>
            <div>Süleymaniye/Iraq</div>
            <div>Phone/Fax</div>
            <div>+964 770 157 33 86</div>
          </div>
        </div>

        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
