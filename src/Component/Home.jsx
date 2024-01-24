import React from "react";
import img from "../assets/mikail.png";
import imgs from "../assets/react.svg";
import image2 from "../assets/Screenshot from 2022-10-11 16-56-30.png";
import figma from "../assets/figma_5968705.png";
import firebase from "../assets/firebase_google_icon.png";
import MongoDb from "../assets/mongodb_original_logo_icon_146424.png";
import Github from "../assets/github_1051326.png";

import image3 from "../assets/Screenshot from 2022-10-11 17-02-13.png";
import image4 from "../assets/Screenshot from 2022-10-11 17-27-10.png";
import image5 from "../assets/Screenshot from 2022-10-11 17-35-57.png";
import image6 from "../assets/favpng_redux-react-javascript-angular-cascading-style-sheets.png";
import image7 from "../assets/kindpng_678384.png";
import image8 from "../assets/tailwind-css-seeklogo.com.svg";
import image9 from "../assets/kindpng_4640184.png";
import image10 from "../assets/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbd2275a7.4033632815484343651412.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Email,
  FacebookOutlined,
  GitHub,
  Google,
  LinkedIn,
  Twitter,
  ViewAgenda,
} from "@mui/icons-material";
import Slider from "react-slick";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skill = [
    { name: "HTML", imge: image10 },
    { name: "CSS", imge: image9 },
    { name: "JavaScript", imge: image7 },
    { name: "React", imge: imgs },
    { name: "Redux", imge: image6 },
    { name: "Tailwind", imge: image8 },
    { name: "Figma", imge: figma },
    { name: "Firebase", imge: firebase },
    { name: "MongoDb", imge: MongoDb },
    { name: "Github", imge: Github },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    className: "center",
    centerPadding: "610px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div>
      {/* <div className="w-[100%] my-[10%] flex flex-col justify-center items-center">
        <div className="w-[95%] bg-white">
          <Slider {...settings}>
            {skill.map(({ name }, i) => (
              <div key={i} className=" flex flex-col">
                 <img
                      src={imge}
                      alt=""
                      className="w-[100%] h-[65vh] bg-[orange] object-cover"
                    /> 
                <h2 className="lg:text-[2.5rem]  leading-10">{name}</h2>
                <h4 className="text-[gray]  text-[1.5rem]"></h4>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      <div className="w-[100%] h-[100vh] bgProfile">
        <div className="overlay w-[100%] h-[100%] flex flex-col justify-center items-center">
          {" "}
          <div
            id="Home"
            className="p mx-[10px] flex  flex-col justify-center items-center"
          >
            <p data-aos="slide-left">Hi, I'm</p>
            <p data-aos="slide-right" className="lg:text-[5.5rem] my-[1rem]">
              Abdul-raheem Mikail
            </p>
            <p
              data-aos="slide-left"
              className=" text-center text-[1.5rem] lg:text-[1.9rem] mt-6 "
            >
              I create overwhelming Front-End best Users Experience
            </p>
          </div>{" "}
          <aside className="Media my-[5%] lg:flex lg:flex-row justify-center items-center lg:w-[10%] gap-[10%] w-[50%] h-[2rem]">
            <a
              data-aos="fade-up-left"
              href="http://web.facebook.com/?_rdc=1&_rdr"
              target="_blank"
            >
              <FacebookOutlined className="socialMedias" />
            </a>
            <a
              data-aos="fade-down-left"
              href="https://twitter.com/MUKAILAABDULRA7"
              target="_blank"
            >
              <Twitter className="socialMedias" />
            </a>
            <a
              data-aos="fade-up-left"
              href="mailto:abdulraheemmukaila6@gmail.com"
              target="_blank"
            >
              <Email className="socialMedias" />
            </a>
            <a
              data-aos="fade-down-left"
              href="https://www.linkedin.com/feed/?trk=onboarding-landing"
              target="_blank"
            >
              <LinkedIn className="socialMedias" />
            </a>

            <a
              data-aos="fade-up-left"
              href="https://github.com/mikail222"
              target="_blank"
            >
              <GitHub className="socialMedias" />
            </a>
          </aside>
        </div>
      </div>
      <div className=" Homepage flex flex-col lg:flex-col  ">
        <aside className="Home_Aside">
          <div className="w-[100%] flex flex-col  lg:justify-center items-center font-thin">
            <div className="lg:px-[5%] Engr w-[95%] ml-4 flex flex-col  lg:justify-center items-center">
              <p className=" text-left lg:text-[1.3rem] mb-[6%] lg:text-center">
                Hello there! Thank you for having me on your page. It sounds
                like you have a great interest in web and application
                development. If you are looking for someone who is diligent and
                mind-blowing in this field, then I might be a good option for
                you. With over 3 years of experience working with teams to build
                technologies and mentoring other ambitious developers, I can
                help you get your career foundation firmly erected to the
                advance standard that will compete in the technological
                advancement of this century.
              </p>
              <a
                href="mailto:abdulraheemmukaila6@gmail.com"
                className="w-[100%] flex flex-col justify-center items-center"
              >
                <button className="getInt border-[1px] p-[3%] text-[1.3rem] outline-[transparent] hover:text-[#0a192f] hover:bg-[#ccd6f6] rounded-[5px] lg:w-[50%]">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
          <section
            className="w-[98vw] flex flex-col lg:flex-row lg:w-[100%]  justify-center items-center mt-[5rem] lg:mt-[5%]  px-[10%]"
            id="About"
          >
            {" "}
            <div>
              <div className="flex flex-row justify-start items-center">
                <p className=" my-4 text-[1.5rem] lg:text-[2rem] text-[#f0c4f9] flex flex-wrap">
                  About me{" "}
                </p>
                <p className="line"></p>
              </div>
              <div className="lg:w-[80%] lg:text-[1.2rem]">
                <p>
                  Hi there! My name is Mikail Abdulraheem. I work as a front-end
                  engineer and I am based in Nigeria. I am passionate and
                  flexible in my problem-solving approach, and I love working
                  with technological tools to create outstanding user
                  experiences. It's always a pleasure to work with like-minded
                  individuals who share the same enthusiasm for programming and
                  technology.
                </p>
                <br />
                <br />
                <p>
                  i've over 3 years experience working around Web and
                  Application development,i possess a high level of Team spirit
                  and colaboration with optimum instinct of critical thinking
                  and deep sense of programmatical intelligence gathering.
                </p>
                <br />
                <p className="text-[1.3rem] "></p>
              </div>
            </div>
            <div className="mikailPicture">
              <p>-</p>
              <img src={img} alt="author" />
            </div>
          </section>

          <section className="lg:px-[10%]  w-[100vw] px-[10px] lg:w-[100%]">
            <div id="services" className="flex lg:flex-row w-[95%] lg:w-[100%]">
              <p className="lg:text-[2rem] text-[#f0c4f9] flex flex-wrap">
                Skills{" "}
              </p>
              <p className="line"></p>
            </div>
            <p className="lg:text-[2.5rem] my-[5%]">
              {" "}
              Few of My Technological tools are:
            </p>
            <div className="skills">
              {skill.map(({ imge, name }, i) => (
                <div key={i} className="skill">
                  <img
                    src={imge}
                    alt=""
                    className=" object-contain w-[60px] h-[60px]"
                  />
                  <h6 className="leading-10">{name}</h6>
                  <h6 className="text-[gray]  text-[1.5rem]"></h6>
                </div>
              ))}
            </div>
          </section>
          <section className="portfolio  w-[100%] lg:w-[100%] mt-[10rem]">
            <div
              id="portfolio"
              className="lg:px-[10%] flex lg:flex-row w-[95%] lg:w-[100%]"
            >
              <p className="lg:text-[2rem] text-[#f0c4f9] flex flex-wrap">
                Portfolio{" "}
              </p>
              <p className="line"></p>
            </div>
            <p className="lg:text-[2.5rem] text-left  my-[5%]">
              Check my creative Projects
            </p>{" "}
            <div className="projectBg w-[100%] h-[100%] ">
              <div className="overlay w-[100%] h-[100%] flex flex-col justify-center items-center px-[5%] lg:p-[10%]">
                <div className="div  lg:mt-[2rem] ">
                  <div className="lg:z-[1] lg:relative lg:left-[2rem] flex flex-col justify-start items-start">
                    <p>Featured Project</p>
                    <p className="title ">Weather Tips</p>
                    <p className="you lg:mr-[-45]">
                      <strong> Weather Tips</strong>: is an Educative App,
                      design and program to supply security relating weather
                      event like: Tornado,flood and other
                    </p>
                    <p
                      className="flex  flex-row gap-4  lg:gap-8 
               mt-6  lg:text-[1.2rem]"
                    >
                      <p>JavaScript</p>
                      <p>Tailwind</p>
                      <p>React</p>
                      <p>css</p>
                    </p>
                  </div>

                  <img
                    src={image2}
                    className="weather  w-[95%] lg:w-[50%]  rounded-[10px]"
                    alt="weather"
                  />
                </div>
                <div className="div mt-[7rem] ">
                  <img
                    src={image3}
                    className="hidden rounded-[10px]  lg:flex w-[90%] lg:w-[50%]"
                    alt="gitSearch"
                  />
                  <div className="lg:z-[1] lg:relative lg:right-[2rem] flex flex-col justify-end items-end">
                    <p>Featured Project</p>
                    <p className="title">Git Search</p>
                    <p className="you">
                      <strong>Git Search</strong>: make available to users the
                      comfort of locating a particular Github user at a very
                      stressfree maximun rate
                    </p>
                    <p className="flex  flex-row gap-[1rem] lg:gap-6 mt-6  text-[1.2rem]">
                      <p>JavaScript</p>
                      <p>Tailwind</p>
                      <p>React</p>
                      <p>css</p>
                    </p>
                  </div>
                  <img
                    src={image3}
                    className="rounded-[10px] lg:hidden w-[95%] lg:w-[50%]"
                    alt="gitSearch"
                  />
                </div>
                <div className="mt-[7rem] div">
                  <div className="lg:z-[1] lg:relative lg:left-[2rem] flex flex-col justify-start items-start">
                    <p>Featured Project</p>
                    <p className="title">M&K Venture</p>
                    <p className="you">
                      <strong>
                        M&K: is a guarantee and an expert platform for sale and
                        distribution of quality Items of different kind
                      </strong>
                    </p>
                    <p
                      className="flex  flex-row gap-[1rem] lg:gap-8
                mt-6  lg:text-[1.2rem]"
                    >
                      <p>TypeScript</p>
                      <p>Tailwind</p>
                      <p>React</p>
                      <p>css</p>
                    </p>
                  </div>

                  <img
                    src={image4}
                    className="w-[95%] rounded-[10px] lg:w-[55%]"
                    alt="product"
                  />
                </div>
                <div className="div  mt-[7rem] ">
                  <img
                    src={image5}
                    className="hidden rounded-[10px] lg:flex w-[90%] lg:w-[50%]"
                    alt="youtube"
                  />
                  <div className="mt-[1rem] lg:z-[1] lg:relative lg:right-[2rem] flex flex-col justify-end  items-end">
                    <p>Featured project</p>
                    <p className="title">Youtube Cloned</p>
                    <p className="you">
                      <strong> Youtube cloned</strong>: is a project that copy
                      the features of Youtube in providing quality and
                      standardized Movies,TV show and others
                    </p>
                    <p
                      className=" flex  flex-row gap-[0.5rem] lg:gap-4 
                mt-6 lg:text-[1.2rem]"
                    >
                      <p>JavaScript</p>
                      <p>Tailwind</p>
                      <p>React</p>
                      <p>Redux</p>
                      <p>TMDB</p>
                    </p>
                  </div>
                  <img
                    src={image5}
                    className="lg:hidden w-[95%] lg:w-[50%]"
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="lg:px-[10%] w-[95vw] lg:w-[100%]  mt-[5rem] lg:mt-[15rem]">
            <p
              id="store"
              className=" lg:w-auto lg:tracking-[3px] lg:text-[2.5rem] text-[#f0c4f9] text-center"
            >
              Projects in view, cracking the Glass of Store{" "}
            </p>
            <div className="w-[100vw] md:w-[100%] md:pl-[5%] lg:w-[100%] projects mt-[2rem] lg:ml-[0px]">
              <img src={image2} alt="" className="project" />
              <img src={image3} alt="" className="project" />{" "}
              <img src={image4} alt="" className="project" />{" "}
              <img src={image5} alt="" className="project" />
            </div>
          </section>
          <section id="contact" className="w-[95vw] lg:w-[100%]">
            <div className=" mt-[5rem] gap-[1.5rem] lg:mt-[13rem] flex flex-col justify-center items-center">
              <p className="w-[90%] text-center">
                Would you like a touch of vouch and a zeal of confidence
              </p>
              <p className="text-[2.3rem] text-[#f0c4f9] mt-[1.3rem]">
                Get In Touch
              </p>
              <p className="w-[90%] lg:w-auto  lg:leading-[1.7rem] lg:m-[3rem] text-center  lg:text-[1.4rem] ">
                i'm easily accessible and open to new opportunities,all you need
                is just click the button bellow or the socio-media icons at the
                left side of the page,perhaps you can also click on the email
                address at right side of the page.
              </p>
              <a href="mailto:abdulraheemmukaila6@gmail.com" target="_blank">
                <button className=" text-[#f0c4f9]  text-[1.2rem]">
                  Say Hello!
                </button>
              </a>
            </div>
            <div className="w-[100vw] mt-[15%] lg:hidden flex flex-row justify-center  items-center gap-4">
              <a href="http://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                <FacebookOutlined className="socialMedias" />
              </a>

              <a href="https://twitter.com/MUKAILAABDULRA7" target="_blank">
                <Twitter className="socialMedias" />
              </a>
              <a href="mailto:abdulraheemmukaila6@gmail.com" target="_blank">
                <Email className="socialMedias" />
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=onboarding-landing"
                target="_blank"
              >
                <LinkedIn className="socialMedias" />
              </a>

              <a href="https://github.com/mikail222" target="_blank">
                <GitHub className="socialMedias" />
              </a>
            </div>
            <p className="copywrite text-center  mt-[5rem] lg:mt-[15rem]  col-[gray] mb-[3rem]">
              Remixed and built by Abdulsamii Ajala,adopted by Abdulraheem
              Mikail k.
            </p>
          </section>
        </aside>
        {/* <aside className="md:hidden lg:flex emailside">
          <div className="frameworks">
            <img className="react" src={imgs} alt="react" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            <img src={image9} alt="" />
            <img src={image10} alt="" />
          </div>
          <a
            className="aTransform flex flex-col justify-center items-center "
            href="mailto:abdulraheemmukaila6@gmail.com"
            target="_blank"
          >
            <p className="transformText mt-[8rem]">
              <em>abdulraheemmukaila6@gmail.com</em>
            </p>
            <p className="pillar mt-[7.25rem] "></p>
          </a>
        </aside> */}
      </div>
    </div>
  );
};

export default Home;
