import React, { useEffect } from "react";
import shipPhoto from "../assets/container-ship-arriving-commercial-port 4 (1).png";
import Header from "../components/header";
import Footer from "../components/Footer";
import depo from "../assets/image 10 (2).png";
import tahta from "../assets/image 11.png";
import containerGemisi from "../assets/containerGemisi.png";
import paket from "../assets/image 12.png";
import work from "../assets/image 13.png";
import containerPlace from "../assets/image 14.png";

export default function SeaTransportation() {
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfayı yukarı kaydır
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="relative">
        <img alt="Uçak Resmi" className="" src={shipPhoto}></img>
        <div className="absolute bottom-36 xl:block hidden max-w-lg space-y-4 left-96 text-white">
          <div className="text-5xl font-semibold">
            Denizlerin gücüyle taşıyoruz, güvenli ve ekonomik taşımacılık
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] xl:leading-relaxed text-xl mx-auto px-5 lg:px-10  space-y-5 mt-5 xl:mt-20">
        <div>
          Deniz taşımacılığı, malzemelerin, eşyaların ve ürünlerin deniz yoluyla
          taşınması işlemidir. Deniz taşımacılığı, uluslararası ticarette önemli
          bir rol oynar ve büyük hacimli yüklerin taşınmasında tercih edilen bir
          lojistik çözümüdür.
        </div>
        <div>
          Deniz taşımacılığı, konteynerler veya gemi yükleri olarak adlandırılan
          farklı taşıma yöntemleriyle gerçekleştirilebilir. Konteyner
          taşımacılığı, malzemelerin standartize edilmiş konteynerlere
          yerleştirilerek gemilerle taşınmasını içerir. Bu yöntem, kolay yükleme
          ve boşaltma işlemleri, güvenli taşıma ve geniş coğrafi kapsama alanı
          sağlar. Konteynerler, çeşitli boyutlarda ve tiplerde olabilir ve
          farklı türdeki malzemelerin güvenli bir şekilde taşınmasını sağlar.
        </div>
        <div>
          Gemi yükleri ise özel yüklerin, ağır yüklerin veya projeye özgü
          ekipmanın gemilere yüklenerek taşınmasını sağlar. Bu yöntem, özellikle
          büyük ve ağır eşyaların taşınmasında kullanılır. Gemi yükleri, gemiye
          özel ekipmanlar ve yöntemler gerektirebilir.
        </div>
        <div>
          Deniz taşımacılığının avantajları arasında taşıma kapasitesi, düşük
          maliyetler, enerji verimliliği, geniş coğrafi kapsama, çevre dostu
          olması ve ekonomik bir seçenek olması yer alır. Deniz yolu, karayolu
          ve hava yoluna kıyasla daha fazla malzeme ve yük taşıma kapasitesine
          sahiptir. Ayrıca, deniz taşımacılığı daha az enerji tüketir ve karbon
          emisyonlarını azaltarak çevre üzerinde daha az etkiye sahiptir.
        </div>
        <div>
          Deniz taşımacılığı, uluslararası ticaretin büyüklüğü ve önemi göz
          önüne alındığında, dünya ekonomisindeki bağlantıları güçlendiren ve
          ticaret akışını destekleyen kritik bir lojistik çözümüdür. Ayrıca,
          tedarik zinciri yönetimi, stok yönetimi ve maliyet optimizasyonu gibi
          alanlarda da önemli bir rol oynar.
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
