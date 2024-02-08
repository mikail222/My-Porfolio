import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import irehv from "../assets/CEO.jpg";
import darun_nur from "../assets/12801228_1014040375351303_8463380366859156510_n.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimony = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const client = [
    {
      img: darun_nur,
      name: "Ibrahim Jimoh",
      testimony:
        "He is a diligent and  well reserve personality with outstanding corporation instinct ",
    },
    {
      img: irehv,
      name: "Abdulrahman  Bello",
      testimony:
        "Mikail is a well manner and  profesional in his dealing,calm and attentive ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    centerPadding: "610px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[100%] lg:h-[100vh] mt-[5%] flex  flex-col justify-center items-center">
      <p className="my-[5rem] lg:my-[5%] text-[1.5rem]">Valueable Testimony</p>
      <div className="lg:w-[65%] h-[50%] flex flex-col lg:flex-row  md:flex-row justify-center items-center gap-[5px]">
        {/* <Slider {...settings}> */}
        {client.map(({ img, name, testimony }, i) => (
          <div
            className="flex flex-row justify-around items-center  lg:w-[65%] h-[100%] gap-[5%]"
            key={i}
          >
            <div className="flex flex-col justify-center items-center relative top-[-55px]">
              <img
                src={img}
                alt=""
                className="lg:w-[150px] lg:h-[150px]  w-[100px] h-[100px] relative top-[50px] lg:top-[80px] rounded-[100px] object-cover border-[5px] border-[#0a192f]"
                // data-aos="zoom-in"
              />
              <div className=" bg-[#0a192f] clientPicture"></div>
            </div>
            <div className="lg:w-[55%] w-[85%] h-[65%]">
              <p
                className="text-[1.5rem] font-bold font-[Oswald] leading-10"
                // data-aos="zoom-in"
              >
                {name}
              </p>
              <p
                className="lg:text-[1rem] "
                // data-aos="zoom-in"
              >
                {testimony}{" "}
              </p>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Testimony;
