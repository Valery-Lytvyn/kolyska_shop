import LazyImage from "../../components/lazyImage/LazyImage";
import picture1 from "../../assets/images/about_shop/20.webp";
import picture2 from "../../assets/images/about_shop/202.webp";
import picture3 from "../../assets/images/about_shop/365133f55b8.webp";
import picture4 from "../../assets/images/about_shop/cover.webp";
import { shopAddresses } from "../../constants/constants";
import PageTitle from "../../components/pageTitle/PageTitle";
import "./aboutPage.scss";
import MapContainer from "../../components/mapContainer/MapContainer";
import PageSubtitle from "../../components/pageSubtitle/PageSubtitle";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <PageSubtitle text="Шановні клієнти!" />
        <div className="about-page-chapter">
          <div className="about-page-image">
            <LazyImage src={picture3} alt="Kolyska shop" />
          </div>
          <p className="about-page-text">
            Ми, команда інтернет-магазину "Колиска", з радістю запрошуємо вас на
            особливу подію! Завдяки вашій підтримці протягом останніх 18 років
            ми стали одним з провідних магазинів товарів для дітей у
            Івано-Франківську. За цей час ми постійно розвивалися і розширювали
            свій асортимент, щоб задовольнити ваші потреби та очікування.
            Завітавши до нас, ви отримаєте унікальну можливість особисто
            побачити нашу широку продуктову лінійку та відчути якість кожного
            товару. Запрошуємо вас відвідати наші магазини, які знаходяться за
            адресами:
            <span className="address">
              вул. Любомира Гузара, 24a, 2ий поверх
            </span>
            , та
            <span className="address">вул. Павла Тичини, 7, 2ий поверх</span>.
          </p>
        </div>
        <div className="about-page-chapter">
          <div className="about-page-image">
            <LazyImage src={picture1} alt="Kolyska shop" />
          </div>
          <p className="about-page-text">
            Наші магазини створені з думкою про ваш комфорт та затишок. Ви
            зможете відчути приємну атмосферу, провести час серед яскравих
            дитячих товарів та отримати вичерпну консультацію від наших
            досвідчених продавців. Ми докладаємо всіх зусиль, щоб забезпечити
            вам незабутній шопінг та максимальне задоволення від покупки. В
            нашому магазині ви знайдете все необхідне для вашої дитини: надійні
            колиски, зручні дитячі ліжечка, стильні дитячі візочки, безпечний
            дитячий транспорт, м'яку дитячу постільну білизну та багато інших
            товарів. Наші продавці з великим задоволенням допоможуть вам зробити
            правильний вибір, розповідаючи про особливості кожного продукту та
            ділячись корисними порадами.
          </p>
        </div>

        <div className="about-page-chapter">
          <div className="about-page-image">
            <LazyImage src={picture4} alt="Kolyska shop" />
          </div>
          <p className="about-page-text">
            Ми також хочемо підкреслити, що в нашому магазині "Колиска" ви
            знайдете не лише високоякісні товари для дітей, але й дружній
            персонал, який завжди готовий надати вам індивідуальне
            обслуговування та професійну консультацію. Наші співробітники не
            лише допоможуть вам підібрати найкращі товари, але й поділяться
            цінними порадами щодо догляду за дитиною, безпеки та розвитку.
            Зокрема, наші продавці завжди допоможуть вам правильно підібрати
            колиску, яка забезпечить здоровий та комфортний сон вашого малюка.
            Вони також допоможуть обрати ідеальне дитяче ліжечко, що
            задовольнить ваші вимоги щодо безпеки та функціональності. Крім
            того, ви зможете переглянути широкий вибір дитячих візочків, які
            відповідають найвищим стандартам безпеки і забезпечать комфортну
            поїздку для вашої дитини.
          </p>
        </div>
        <div className="about-page-chapter">
          <div className="about-page-image">
            <LazyImage src={picture2} alt="Kolyska shop" />
          </div>
          <p className="about-page-text">
            У нашому магазині "Колиска" ви також знайдете широкий асортимент
            дитячих іграшок, які сприятимуть розвитку вашої дитини. Ми
            пропонуємо ігри, які сприяють розвитку моторики, творчості, мислення
            та координації рухів. Наші продавці з радістю порекомендують вам
            іграшки, які відповідають віковим особливостям вашої дитини та
            допоможуть їй вирости активною та розумною. Не забувайте, що
            відчуття, запахи та перша реакція вашої дитини на продукти важливі
            при виборі дитячої постільної білизни. У нашому магазині "Колиска"
            ми маємо широкий асортимент м'якої та безпечної постільної білизни,
            включаючи ортопедичні матраци та комфортні подушки. Ви зможете
            вибрати найкращі продукти, які стануть затишними та зручними для
            вашої дитини. Ми горді тим, що служимо сім'ям з 2005 року, і ми
            прагнемо продовжувати нашу місію, допомагаючи вам забезпечити
            комфорт і радість вашим малюкам. Тож запрошуємо вас завітати до
            магазину "Колиска" та відчути неперевершене задоволення від покупки
            товарів для вашої сім'ї. Ми працюємо з 10:00 до 17:00, і наша
            команда з нетерпінням чекає на ваш візит!
          </p>
          <p className="about-page-regards">
            З повагою, команда магазину "Колиска"
          </p>
          <PageTitle text="Адреси наших магазинів:" />
          <div className="about-shop-addresses">
            {shopAddresses.map(
              ({ mapLink, market, address, mark, backPicture }) => (
                <div className="shop-address" id="address" key={mapLink}>
                  <MapContainer mapLink={mapLink} />
                  <div className="address-description">
                    <div className="address-description--back-picture">
                      <LazyImage src={backPicture} alt="Kolyska shop" />
                    </div>
                    <h2 className="address-description-title">{market}</h2>
                    <p className="address-description-text">{address}</p>
                    <p className="address-description-text">{mark}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
