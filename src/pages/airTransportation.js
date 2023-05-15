import React, { useEffect } from "react";
import planePhoto from "../assets/image 15 (1).png";
import Header from "../components/header";
import Footer from "../components/Footer";
import depo from "../assets/image 10 (2).png";
import tahta from "../assets/image 11.png";
import containerGemisi from "../assets/containerGemisi.png";
import paket from "../assets/image 12.png";
import work from "../assets/image 13.png";
import containerPlace from "../assets/image 14.png";

export default function AirTransportation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="relative">
        <img
          alt="Uçak Resmi"
          className="xl:brightness-75"
          src={planePhoto}
        ></img>
        <div className="absolute xl:block hidden bottom-36 max-w-xl space-y-4 left-96 text-white">
          <div className="text-5xl font-medium">
            {" "}
            Daha yükseğe çıkın, hızlı ve güvenilir hava taşımacılığıyla zamanı
            yakalayın!
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] xl:leading-relaxed text-xl mx-auto px-5 lg:px-10  space-y-5 mt-5 xl:mt-20">
        <div>
          Hava kargosu, hava taşımacılığı yoluyla yapılan kargo taşımacılığıdır.
          Bu yöntem, hızlı ve etkili bir şekilde malzemelerin, ürünlerin ve
          eşyaların uluslararası veya ulusal düzeyde taşınmasını sağlar.
        </div>
        <div>
          Hava kargosu, birçok avantaj sunar. İlk olarak, hava taşımacılığı
          yüksek hızlı uçakların kullanılması sayesinde hızlı teslimat sağlar.
          Uçaklar, uzun mesafeleri kısa sürede aşar ve bu da kargo sevkiyatının
          hızlanmasını mümkün kılar. Özellikle acil teslimat gerektiren tıbbi
          malzemeler, yedek parçalar veya hassas elektronik eşyalar gibi ürünler
          için hava kargosu ideal bir seçenektir.
        </div>
        <div>
          İkinci olarak, hava kargosu yüksek güvenlik sağlar. Havaalanları ve
          hava taşımacılığı şirketleri, sıkı güvenlik protokolleri ve
          kontrolleri uygular. Bu da kargonun güvenli bir şekilde taşınmasını ve
          hırsızlık veya zarar riskinin azaltılmasını sağlar.
        </div>
        <div>
          Üçüncü olarak, hava kargosu dünya genelinde kapsama sahiptir. Hava
          taşımacılığı ağı, dünyanın farklı bölgelerini birbirine bağlar ve
          küresel ticaretin ve işbirliğinin güçlendirilmesine yardımcı olur.
          Havaalanları, geniş bir uçuş ağına sahip olduğu için hava kargosu,
          ürünlerin hızlı ve etkili bir şekilde dünya genelindeki pazarlara
          ulaşmasını sağlar.
        </div>
        <div>
          Bununla birlikte, hava kargosunun bazı sınırlamaları da vardır. Yüksek
          maliyetler, büyük hacimli veya ağır yüklerin taşınmasında
          sınırlamalar, kısıtlı depolama alanı gibi faktörler, hava kargosunun
          dezavantajları arasında yer alır. Ayrıca, hava taşımacılığına bağımlı
          olmak, hava trafiği, havaalanı sınırlamaları veya hava durumu gibi
          faktörler nedeniyle zaman zaman gecikmelere yol açabilir.
        </div>
        <div>
          Sonuç olarak, hava kargosu hızlı, güvenli ve küresel bir lojistik
          çözümüdür. İleri teknolojilerin ve gelişmelerin desteğiyle, hava
          kargosu sektörü daha da gelişmekte ve taşıma süreçlerini daha verimli
          hale getirmektedir. Ticaret, e-ticaret ve küresel işbirliği gibi
          alanlarda hava kargosunun önemi giderek artmaktadır.
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
          <div className="text-3xl font-semibold pl-2  my-2">DEPOLAMA</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={tahta}></img>
          <div className="text-3xl font-semibold pl-2  my-2">SATIN ALMA</div>
        </div>
        <div className=" mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={containerGemisi}></img>
          <div className="text-3xl font-semibold pl-2  my-2">PARSİYEL</div>
        </div>
        <div className=" mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={paket}></img>
          <div className="text-3xl font-semibold pl-2  my-2">PAKETLEME</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={work}></img>
          <div className="text-3xl font-semibold pl-2  my-2">PAZARLAMA</div>
        </div>
        <div className="mx-auto xl:mx-0 my-6">
          <img alt="depo fotoğrafı" src={containerPlace}></img>
          <div className="text-3xl font-semibold pl-2  my-2">
            ULUSLARARASI PAZARLAMA
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
