import React from "react";
import airFreight from "../../assets/air-freight 1 (2).png";
import truck from "../../assets/truck 1 (1).png";
import van from "../../assets/van 1 (2).png";
import courier from "../../assets/courier 1 (2).png";
import ship from "../../assets/ship 1 (2).png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="my-20 max-w-[1200px] px-5 xl:px-0 xl:mx-auto">
      {/* ROW1 */}
      <div className="flex xl:flex-row flex-col items-center xl:space-y-0 space-y-5 xl:justify-between">
        <div className=" max-w-3xl text-3xl text-center ">
          Lojistikte mükemmeliyet, memnuniyeti garanti ediyoruz.
        </div>
        <button className="bg-orange w-48 px-3 py-4 xl:px-[24px] xl:py-[25px] text-2xl text-white">
          <Link to={"/contact"}>Teklif Al </Link>
        </button>
      </div>

      {/* CARDS */}
      <div className="mt-20 max-w-[1200px] justify-center mx-auto flex flex-wrap">
        <div className="space-y-3 mt-10 mx-10 max-w-[306px]">
          <img className="mx-auto" alt="Uçak Fotoğrafı" src={airFreight}></img>
          <div className="text-3xl mx-auto">Hava Taşımacılığı</div>
          <div>
            <p className="text-xl">
              Yüksek hızlı uçaklar ve geniş hava ağı sayesinde hava
              taşımacılığı, uzun mesafelerin kısa sürede kat edilmesini
              sağlayarak zaman tasarrufu sağlar.
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-10 mx-10 max-w-[306px]">
          <img className="mx-auto" alt="Tır Fotoğrafı" src={truck}></img>
          <div className="text-3xl mx-auto">Kara Taşımacılığı</div>
          <div>
            <p className="text-xl">
              Kara taşımacılığı, geniş bir taşıma ağına sahip olması ve esneklik
              sağlamasıyla çeşitli ürünlerin, malzemelerin ve insanların hızlı
              ve verimli bir şekilde taşınmasını sağlar.
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-10 mx-10 max-w-[306px]">
          <img className="mx-auto" alt="Gemi Fotoğrafı" src={ship}></img>
          <div className="text-3xl mx-auto">Deniz Taşımacılığı</div>
          <div>
            <p className="text-xl">
              Deniz taşımacılığı, büyük hacimli ve ağır yüklerin ekonomik bir
              şekilde taşınmasını sağlar. Geniş deniz ağları, dünya çapında
              ticareti destekleyerek farklı bölgeler arasındaki bağlantıyı
              güçlendirir.
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-10 mx-10 max-w-[306px]">
          <img className="mx-auto" alt="Kurye Fotoğrafı" src={courier}></img>
          <div className="text-3xl mx-auto">Kurye Taşımacılığı</div>
          <div>
            <p className="text-xl">
              Kurye taşımacılığı, acil teslimat ihtiyacı olan müşterilere hızlı
              ve güvenilir bir çözüm sunar. Uzman kurye ekipleri ve optimize
              edilmiş lojistik ağları sayesinde paketlerin hedef noktaya
              zamanında ve güvenli bir şekilde ulaşması sağlanır.
            </p>
          </div>
        </div>
        <div className="space-y-3 mt-10 mx-10 max-w-[306px]">
          <img className="mx-auto" alt="Van Fotoğrafı" src={van}></img>
          <div className="text-3xl mx-auto">Minivan Taşımacılığı</div>
          <div>
            <p className="text-xl">
              Minivanlar, esnek ve kompakt yapısıyla çeşitli kargo
              gönderilerinin hızlı ve güvenli bir şekilde taşınmasını sağlar.
              Özellikle şehir içi dağıtım ve küçük ölçekli e-ticaret işletmeleri
              için pratik bir çözüm sunar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
