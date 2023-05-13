import React from "react";
import airFreight from "../../assets/air-freight 1 (2).png";
import truck from "../../assets/truck 1 (1).png";
import van from "../../assets/van 1 (2).png";
import courier from "../../assets/courier 1 (2).png";
import ship from "../../assets/ship 1 (2).png";

import OurServices from "../ourServices";
export default function section1() {
  return (
    <div className=" mt-[80px]">
      <div className="max-w-[1200px] px-10 mx-auto">
        <div className="text-5xl">Biz Kimiz?</div>
        <div className="text-xl mt-5">
          Amo Global olarak dinamik ve yenilikçi bir lojistik şirketiyiz.
          Yılların verdiği deneyim ve uzmanlıkla, müşterilerimize üstün lojistik
          çözümleri sunmayı hedefliyoruz.
        </div>
        <div className="text-xl mt-5">
          Müşteri memnuniyetini her zaman önceliğimiz olarak benimsiyoruz.
          Müşterilerimizin ihtiyaçlarını anlamak, onlara en uygun ve verimli
          lojistik çözümlerini sunmak için çaba gösteriyoruz. Ekip olarak,
          titizlikle çalışıyor ve taahhütlerimizi zamanında ve güvenilir bir
          şekilde yerine getiriyoruz.
        </div>
        <div className="text-xl mt-5">
          Geniş bir lojistik ağına sahibiz ve güçlü iş ortaklıkları kurarak
          küresel ölçekte hizmet verebiliyoruz. Lojistik sektöründeki
          gelişmeleri yakından takip ediyor ve sürekli olarak kendimizi
          yeniliyoruz. Teknolojiyi etkin bir şekilde kullanarak
          operasyonlarımızı optimize ediyor ve müşterilerimize daha iyi hizmet
          sunmayı amaçlıyoruz.
        </div>
        <div className="text-xl mt-5">
          Ekip olarak, tutkulu, yetenekli ve deneyimli profesyonellerden
          oluşuyoruz. Lojistik alanındaki bilgi ve uzmanlığımızı müşterilerimize
          en iyi şekilde aktarmak için sürekli olarak kendimizi geliştiriyoruz.
          İşimizi titizlikle yapıyor, her aşamada kalite ve güvenlik
          standartlarını yüksek tutuyoruz.
        </div>
        <div className="text-xl mt-5">
          Sizlere sorunsuz bir lojistik deneyimi sunmak için buradayız.
          İşbirliği ve uzun vadeli ilişkiler kurarak, işlerinizi büyütmenize ve
          başarıya ulaşmanıza yardımcı olmak istiyoruz.
        </div>
        <div className="text-xl mt-5">
          Bize güvenin, lojistik ihtiyaçlarınızı biz karşılayalım!
        </div>
        <div className="border-2 border-dashed my-20"></div>
        <div className="text-5xl">Hizmetlerimiz</div>
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
      <div className="border-2 border-dashed my-20"></div>

      {/* SERVİCES */}
      <OurServices></OurServices>
    </div>
  );
}
