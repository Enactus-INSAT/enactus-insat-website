import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectsCard";
import { useSwiper } from "swiper/react";
import Ardhcom from "../Assets/images/Ardhcom.png"
import Cowcheck from "../Assets/images/Cowcheck.png"
import Phosphact from "../Assets/images/phosphact.png"
import Zigo from "../Assets/images/Zigo.png"
import RectArdhcom from "../Assets/images/Rectangleardhcom.png"
import RectCowcheck from "../Assets/images/Rectanglrcowcheck.png"
import RectPhosphact from "../Assets/images/RectanglePhosphact.png"
import RectZigo from "../Assets/images/RectangleZigo.png"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/Projects.css";
import ArrowRight from "../Assets/icons/projectArrow-right.svg";
import ArrowLeft from "../Assets/icons/projectArrow-left.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const data = [
  {
    title: "Ardh'Com",
    descriptionfr: "Le secteur agricole en Tunisie rencontre des problèmes graves en raison de l'accès limité à l'information et aux nouvelles technologies pour les agriculteurs, ce qui a entraîné la détérioration de ressources précieuses et une perte financière importante.\n\n"+
        "ArdhCom est une solution efficace, innovante et permanente à ce problème. C'est une plateforme en ligne qui garantit un accès illimité à une vaste et complète base de données pour les agriculteurs. Il comprend principalement un blog, un forum, un marché et un espace pour les prestataires de service : Le blog couvre les formulaires administratifs, les nouvelles agricoles et les données climatiques.\n" +
        "Le forum est principalement destiné à organiser des interactions entre les agriculteurs . Le marché garantit l'accès aux technologies de dernière pointe aux visiteurs. \n" +
        "L’espace des prestataires de services, quant à lui, englobe de différents types de services hautement utiles aux agriculteurs .\n\n" +
        "Grâce à ces fonctionnalités innovantes, ArdhCom optimise les ressources agricoles et la productivité, réduisant les coûts de production. Il vise également à intégrer les jeunes dans l'agriculture en fusionnant la technologie avec les pratiques agricoles.\n",
    descriptionen:"The agricultural sector in tunisia has been facing drastic problems due to a huge lack of access to information as well as new age technologies for farmers, which has resulted in the \n" +
        "deterioration of valuable resources and huge financial loss. \n" +
        "ArdhCom is an effective, innovative and permanent solution to this problem. It is an online platform that guarantees unlimited \n" +
        "access to a huge and comprehensive database for farmers improving profitability and ensuring efficiency. It contains primarily a blog, a forum, a marketplace and  a space for agricultural service providers. As for the blog, it covers administrative \n" +
        "forms, agricultural news and climatic data. The forum on the other hand is mainly for arranging interactions between farmers where they can share their experiences and benefit from each other's expertise,  \n" +
        "The marketplace offers easy access to diverse products and up-to-date agricultural technologies., The space for agricultural service providers englobes a large category of agricultural services, highly needed by farmers.\n" +
        "Thanks to its innovative features,ArdhCom optimizes agricultural resources and productivity, reducing production costs. It also aims to integrate young people into agriculture by merging technology and agriculture.\n",
    imagePath: Ardhcom,
    rectangle:RectArdhcom,
    detailBackgroundColor: "rgba(126, 38, 38, 0.26)",
  },
  {
    title: "CowCheck",
    descriptionfr: "Pendant les dernières années, la Tunisie a rencontré des problèmes majeurs de pénurie de lait. Ceci est dû à l’incapacité des éleveurs à la prévention de la bonne période pour traire leurs vaches.\n\n" +
        "Pour remédier à ce problème, nous avons inventé CowCheck, un collier électronique équipé de capteurs intelligents permettant de collecter des informations qui vont servir à détecter la période de chaleur chez les vaches qui est la période optimale pour les traire.\n" +
        "\n" +
        "CowCheck permet de promouvoir une agriculture durable et écologique. \n" +
        "Nous assurons la création de plusieurs offres d'emplois, l’amélioration des conditions des éleveurs des vaches via les nouvelles technologies ainsi que l'amélioration de la productivité.\n",
    descriptionen:"During the last few years, Tunisia has encountered a major milk scarcity. This is primarily  due to the farmer's lack of knowledge and skills. A thorough analysis of this issue resulted in the invention of  CowCheck: an electronic collar equipped with smart sensors that collect information to detect cows’  heat period through specific algorithms. Our project promotes sustainable and eco-friendly agriculture by reducing mass breeding that negatively impacts energy consumption. \n" +
        "This project thus allowed us to provide several job opportunities, improve farmers’ profitability thanks to new technologies, and finally improve productivity.\n",
    imagePath: Cowcheck,
    rectangle:RectCowcheck,
    detailBackgroundColor: "rgba(49, 49, 49, 0.59)",
  },
  {
    title: "ZigoFiltre",
    descriptionfr: "En tunisie, de fortes inondations touchent 19 gouvernements sur 24  et sont responsables de plus de 40% de la pollution marine, ainsi que des dégâts qui se montent en dizaines de millions de dinars. " +
        "Pour faire face à ce fléau, nous avons opté pour la solution de l'aménagement des égouts.\n\n " +
        "Zigofiltre, un dispositif métallique à grillage élaboré pour la détention des déchets macroscopiques entraînés par les flux pluviaux.  \n " +
        "La startup a évolué pour devenir une entreprise indépendante nommé : Wayout dont le premier produit est zigofiltre.\n\n" +
        "Zigofiltre a contribué à la diminution des dépôts qui débouchent les canaux d'égouts ce qui a permis aux municipalités de diminuer les dépenses dues à la désobstruction des conduites souterraines. L'entreprise à aussi assurer la réhabilitation d'une ferronnerie par la production en masse de ce nouveau dispositif de filtrage.\n",
    descriptionen:"In Tunisia, heavy floods affect 19 out of 24 governorates and are responsible for over 40% of marine pollution, as well as damages that amount to tens of millions of dinars.\n" +
        "To deal with this scourge, we opted for the sewer management solution.\n" +
        "In this context, we designed Zigofiltre, a metal mesh device designed to detain macroscopic waste carried by rainwater flows.\n" +
        "The startup grew into an independent company named Wayout, whose first product is Zigofiltre.\n" +
        "Zigofiltre has contributed to reducing deposits that discharge sewer channels, allowing municipalities to reduce expenses due to the unblocking of underground pipes. The company has also ensured the rehabilitation of a blacksmith shop through the mass production of this new filtering device.\n",
    imagePath: Zigo,
    rectangle:RectZigo,
    detailBackgroundColor: "rgba(134, 134, 134, 0.21)",
  },
  {
    title: "Phosph’Act",
    descriptionfr: "Le golfe de Gabès souffre depuis les années 70 d'une pollution marine excessive en raison du rejet continu de Phosphogypse, une substance toxique qui est le sous-produit de l'industrie des engrais. Ce problème ne touche pas uniquement la ville de Gabès mais s’est aussi étendu à sfax où le phosphogypse est accumulé en masse. \n\n" +
        "Pour résoudre ce problème imminent de manière efficace et rapide, nous avons créé Phosph'Act, une start-up qui vise à développer des produits de valeur à partir de phosphogypse. Notre premier produit est Turtle, une peinture acrylique écologique, sans risque pour le consommateur et 60% moins chère que la peinture présente sur le marché.\n" +
        "Nous participerons ainsi à réduire la quantité de phosphogypse accumulée dans cette région ainsi que le coût de la dégradation de l'environnement, restaurer la biodiversité marine et préserver la santé des habitants de la région.\n",
    descriptionen:"The gulf of Gabes has been suffering since the 70's from excessive marine pollution due to the continuous dumping of Phosphogypsum, a toxic substance that is the byproduct of the fertilizer industryThis problem affects not only the city of Gabès but has also spread to Sfax where phosphogypsum is accumulated in mass. This urgent matter had to be solved efficiently and rapidly, so accordingly, we created Phosph'Act, a startup that \n" +
        "aims to develop valuable products using phosphogypsum. Our first product is Turtle, an ecological acrylic paint that is 100% safe to use and 60% cheaper than marketed paint. We have thus come to reduce the \n" +
        "amount of phosphogypsum accumulated in that region as well as the cost of environmental degradation , restore marine biodiversity and preserve the health of the area's residents.\n",
    imagePath: Phosphact,
    rectangle:RectPhosphact,
    detailBackgroundColor: "rgba(44, 51, 15, 0.5)",
  },
];

export default function Projects(props) {
  const clientWindowWidth = document.documentElement.clientWidth;
  let slidesNbr = 3;
  if (clientWindowWidth < 1) {
    slidesNbr = 1;
  }
  const progressCircle = useRef(null);
  const [index, setIndex] = useState(0);
  const [Ref, setRef] = useState(0);

  const progressContent = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 4 }).map((_, index) => `Slide ${index + 1}`)
  );
  const swiper = useSwiper();

  const slideNext = () => {
    swiperRef.slideNext();
  };
  const slidePrev = () => {
    swiperRef.slidePrev();
  };

  useEffect(() => {}, [index]);
  const pagination = slides.map((_, i) => {
    return (
      <div
        className={`Projects_PaginationCercle ${
          i === index ? "Projects_PaginationCercleSelected" : ""
        }`}
        key={`Pagination ${i}`}
      ></div>
    );
  });

  const cards = slides.map((slideContent, index) => (
    <SwiperSlide key={slideContent} virtualIndex={index}>
      {({ isActive }) => (
        <ProjectsCard
          swiper={swiperRef}
          isActive={isActive}
          data={data[index]}
          language={props.language}
        ></ProjectsCard>
      )}
    </SwiperSlide>
  ));
  const setSwiperRefHandler = () => {
    if (!swiperRef?.activeIndex) {
      if (swiperRef?.activeIndex === 0) {
        return setIndex(0);
      }
      return setIndex(1);
    }
    setIndex(swiperRef.activeIndex);
  };
  const color={
    color:"#4D4D4D"
  }
  const bgcolor={
    backgroundColor:"#4D4D4D"
  }
  return (
    <>
      <div className="projects-section-heading-container" id={"projects"}>
        <div className="activities-section-heading">
          <div className="a-h-line" style={bgcolor}></div>
          <div className="section-heading" style={color}>{props.language==="fr" ? "NOS PROJETS" : "OUR PROJECTS"}</div>
          <div className="a-h-line" style={bgcolor}></div>
        </div>
      </div>
      <div className="Projects__Wrapper">
        <div className="Projects__Btn--Container">
          {" "}
          <img
              className="Projects__Btn Projects__BtnLeft"
              src={ArrowLeft}
              onClick={() => slidePrev()}
              alt=""
          />
          <img
              className="Projects__Btn Projects__BtnRight"
              src={ArrowRight}
              onClick={() => slideNext()}
              alt=""
          />
        </div>

        <div className="Projects__Main">
          <Swiper
            onSlideChange={setSwiperRefHandler}
            spaceBetween={30}
            centeredSlides={true}
            onSwiper={setSwiperRef}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="Projects__Swiper"
            speed={500}
            rewind={true}
          >
            {cards}
          </Swiper>
        </div>
        <div className="Projects_Pagination">{pagination}</div>
      </div>
    </>
  );
}
