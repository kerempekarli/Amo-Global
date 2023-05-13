import React, { useEffect } from "react";
import truckPhoto from "../assets/image 16 (2).png";
import Header from "../components/header";
import Footer from "../components/Footer";
import depo from "../assets/image 10 (2).png";
import tahta from "../assets/image 11.png";
import containerGemisi from "../assets/containerGemisi.png";
import paket from "../assets/image 12.png";
import work from "../assets/image 13.png";
import containerPlace from "../assets/image 14.png";

export default function LandTransportation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="relative">
        <img alt="Uçak Resmi" className="from-slate-950" src={truckPhoto}></img>
        <div className="absolute bottom-36 xl:block hidden max-w-lg space-y-4 left-96 text-white">
          <div className="text-5xl font-semibold">KARA TAŞIMACILIĞI</div>
          <div className="text-2xl">
            Kara taşımacılığı, karayolu ağlarını kullanarak malzemelerin,
            ürünlerin ve insanların taşınmasını sağlayan bir lojistik
            yöntemidir.
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] xl:leading-relaxed text-xl mx-auto px-5 lg:px-10  space-y-5 mt-20">
        <div>
          Kara kargosu, karayolu taşımacılığıyla gerçekleştirilen kargo
          taşımacılığıdır. Bu yöntem, karayollarının ağına dayanarak
          malzemelerin, ürünlerin ve eşyaların taşınmasını sağlar.
        </div>
        <div>
          Kara kargosu, birçok avantaja sahiptir. İlk olarak, karayolu ağının
          yaygın olması ve ulaşılabilir olması sebebiyle kara kargosu geniş bir
          kapsama alanına sahiptir. Bu da ürünlerin hızlı ve etkili bir şekilde
          farklı bölgelere ulaştırılmasını mümkün kılar.
        </div>
        <div>
          İkinci olarak, karayolu taşımacılığı esneklik sağlar. Kamyonlar ve
          taşıma araçları, çeşitli boyutlarda ve kapasitelerde mevcuttur. Bu da
          farklı türdeki kargoların taşınmasını kolaylaştırır. Özellikle
          parsiyel taşımacılık, yani bir aracın birden fazla gönderiyle dolu
          olması durumunda maliyetleri düşürerek ekonomik bir seçenek sunar.
        </div>
        <div>
          Kara kargosunun bir diğer avantajı da zaman yönetimidir. Karayolu
          taşımacılığı, daha kısa mesafelerde daha hızlı teslimat sağlar.
          Ayrıca, karayolu taşımacılığı, kapıdan kapıya teslimat imkanı sunarak
          lojistik süreçleri daha da kolaylaştırır.
        </div>
        <div>
          Ancak kara kargosunun bazı sınırlamaları da vardır. Trafik yoğunluğu,
          yol şartları, sınırlı kapasite, uzun mesafelerde zaman kaybı gibi
          faktörler, kara taşımacılığının dezavantajları arasında yer alır.
          Ayrıca, çevresel etkileri de göz önünde bulundurmak önemlidir, çünkü
          karayolu taşımacılığı karbon emisyonlarına katkıda bulunabilir.
        </div>
        <div>
          Sonuç olarak, kara kargosu, malzemelerin ve ürünlerin etkili bir
          şekilde taşınmasını sağlayan önemli bir lojistik yöntemidir. Geniş
          kapsama alanı, esneklik, zaman yönetimi ve kapıdan kapıya teslimat
          gibi avantajlarıyla iş dünyası için vazgeçilmez bir seçenektir. Ancak,
          trafik ve çevresel faktörler dikkate alınmalı ve karayolu
          taşımacılığının sınırlamaları göz önünde bulundurulmalıdır.
        </div>
      </div>
      {/* WHAT WE DO */}
      <div className="max-w-[1200px]  xl:mx-auto">
        <div className="w-full border-2 my-20 border-dashed"></div>
        <div className="text-3xl ml-[15%] xl:mx-0 font-semibold">
          Diğer Hizmetlerimiz
        </div>
      </div>

      <div className="max-w-[1200px] flex flex-wrap xl:justify-between mx-auto">
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={depo}></img>
          <div className="text-2xl font-semibold my-2">DEPOLAMA</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={tahta}></img>
          <div className="text-2xl font-semibold my-2">SATIN ALMA</div>
        </div>
        <div className=" mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={containerGemisi}></img>
          <div className="text-2xl font-semibold my-2">PARSİYEL</div>
        </div>
        <div className=" mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={paket}></img>
          <div className="text-2xl font-semibold my-2">PAKETLEME</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={work}></img>
          <div className="text-2xl font-semibold my-2">PAZARLAMA</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={containerPlace}></img>
          <div className="text-2xl font-semibold my-2">
            ULUSLARARASI PAZARLAMA
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
