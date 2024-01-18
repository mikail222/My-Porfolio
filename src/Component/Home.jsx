import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/mikail.png";
import imgs from "../assets/react.svg";
import image2 from "../assets/Screenshot from 2022-10-11 16-56-30.png";
import image3 from "../assets/Screenshot from 2022-10-11 17-02-13.png";
import image4 from "../assets/Screenshot from 2022-10-11 17-27-10.png";
import image5 from "../assets/Screenshot from 2022-10-11 17-35-57.png";
import image6 from "../assets/favpng_redux-react-javascript-angular-cascading-style-sheets.png";
import image7 from "../assets/kindpng_678384.png";
import image8 from "../assets/tailwind-css-seeklogo.com.svg";
import image9 from "../assets/kindpng_4640184.png";
import image10 from "../assets/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbd2275a7.4033632815484343651412.png";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Email,
  FacebookOutlined,
  GitHub,
  LinkedIn,
  Twitter,
  ViewAgenda,
} from "@mui/icons-material";

const Home = () => {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript(ES6+)",
    "React",
    "Redux",
    "Tailwind",
    "Figma",
    "TypeScript",
  ];

  return (
    <div className="Homepage flex flex-col lg:flex-row  ">
      <aside className="hidden lg:flex lg:flex-col justify-center items-center  media mt-[13rem] lg:w-[10%]">
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
        <p className="boder"></p>
      </aside>
      <aside className="Home_Aside">
        <div id="Home" className="p mt-[50px] mx-[10px]">
          <i>Hi, I'm</i>
          <p className="lg:text-[3.5rem] mt-[1rem]">Abdul-raheem Mikail</p>
          <p className="lg:text-[3.5rem] lg:mt-[1rem] "> K.</p>
          <p className="  text-[1.5rem] lg:text-[1.9rem] mt-6 ">
            I create overwhelming Front-End best Users Experience
          </p>
        </div>
        <div className="w-[100%] flex flex-col  lg:justify-evenly mt-[4rem] font-thin">
          <div className=" Engr w-[90%] ml-4 ">
            <p className="text-[1.3rem] mb-6">
              Hi,it's my pleasure hosting you on my page.For diligent and mind
              blowing interest in{" "}
              <strong>
                <em> Web & Application Development,</em>
              </strong>{" "}
              i'm a good option you can consider,i have over 3 years of
              experience working with Teams to build technologies and mentoring
              other ambitious Developers to get the career foundation firmly
              erected to the advance standard that will compete in the
              technological advancement of this century
            </p>
            <a href="mailto:abdulraheemmukaila6@gmail.com">
              <button className="getInt border-[1px] p-[3%] text-[1.3rem] outline-[transparent] hover:text-[#321f56] hover:bg-[#f0c4f9] rounded-[5px] lg:w-[40%]">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
        <section
          className="w-[98vw] flex flex-col lg:flex-row lg:w-[100%]  justify-center items-center mt-[5rem] lg:mt-[10rem] px-[1rem]"
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
            <div className="lg:w-[100%] lg:text-[1.2rem]">
              <strong className="text-[1.4rem]">
                <i> Mikail Abdulraheem</i>
              </strong>
              <p>
                is the name, i'm a Front-end engineer i base in NIGERIA am a
                passionate,flexible Enthusiastical lover of programmatic problem
                solving in colaboration with some awesome Technological tools
                that facilitate outstanding and Excellent user experience.
              </p>
              <br />
              <br />
              <p>
                i've over 3 years experience working around Web and Application
                development,i possess a high level of Team spirit and
                colaboration optimun instinct of critical thinking and deep
                sense of programmatical intelligence gathering.
                <br />
                <br />
                <p>
                  Also amist many <em>dispodence ailment</em> many Developers is
                  suffering from is{" "}
                  <strong>
                    emotional fatigue or emotional imbalance,however
                  </strong>{" "}
                  i discover this earlier in my career and grow my maturity
                  around creating a reuseable function with multiple parameters
                  that regulate it,all it need to call it is a suitable Argument{" "}
                  <img
                    className="w-[2rem]"
                    src="https://www.freeiconspng.com/thumbs/emoji-png/heart-emoji-png-2.png"
                    alt="emoji"
                  />
                </p>
              </p>
              <br />
              <p className="text-[1.3rem] ">
                Few of My Technological tools are:
              </p>
              <div className="flex  flex-col lg:flex-row gap-6 mt-10">
                <div className="flex  flex-col gap-2">
                  {skill.splice(0, 4).map((s) => (
                    <ul key={s} className="flex flex-wrap gap-[1rem]">
                      <img
                        className="w-[2rem] h-[1rem] bg-[none]  mt-[0.25rem]"
                        src="https://iconarchive.com/download/i42585/oxygen-icons.org/oxygen/Actions-arrow-right-double.ico"
                        alt="picture"
                      />{" "}
                      <p>{s}</p>{" "}
                    </ul>
                  ))}
                </div>
                <div className="flex npx update-browserslist-db@latest flex-col gap-2">
                  {skill.map((s) => (
                    <ul key={s} className="flex flex-wrap gap-[1rem]">
                      <img
                        className="w-[2rem] mt-[0.25rem] h-[1rem]"
                        src="https://iconarchive.com/download/i42585/oxygen-icons.org/oxygen/Actions-arrow-right-double.ico"
                        alt="picture"
                      />{" "}
                      <p>{s}</p>{" "}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mikailPicture">
            <p>-</p>
            <img src={img} alt="author" />
          </div>
        </section>
        <section
          id="services"
          className="w-[100vw] px-[10px] lg:w-[100%]  lg:mt-[10rem]  lg:px-0"
        >
          <div className="flex lg:flex-row w-[95%] lg:w-[100%]">
            <p className="lg:text-[2rem] text-[#f0c4f9] flex flex-wrap">
              Services{" "}
            </p>
            <p className="line"></p>
          </div>
          <p className="w-[98%] lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam ut maxime quam illum molestias ipsum, dolor,
            maiores rerum repellat fugit eius deleniti. Dolore doloribus
            possimus tenetur, illum voluptas commodi.
          </p>
        </section>
        <section
          id="portfolio"
          className="portfolio  w-[100vw] lg:w-[100%] mt-[10rem]"
        >
          <div className="flex lg:flex-row w-[95%] lg:w-[100%]">
            <p className="lg:text-[2rem] text-[#f0c4f9] flex flex-wrap">
              Portfolio{" "}
            </p>
            <p className="line"></p>
          </div>

          <div className="div  lg:mt-[2rem] ">
            <div className="lg:z-[1] lg:relative lg:left-[2rem] flex flex-col justify-start items-start">
              <p>Featured Project</p>
              <p className="title ">Weather Tips</p>
              <p className="you lg:mr-[-45]">
                <strong> Weather Tips</strong>: is an Educative App, design and
                program to supply security relating weather event like:
                Tornado,flood and other
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
              className="weather  w-[95%] lg:w-[50%]"
              alt="weather"
            />
          </div>
          <div className="div mt-[7rem] ">
            <img
              src={image3}
              className="hidden lg:flex w-[90%] lg:w-[50%]"
              alt="gitSearch"
            />
            <div className="lg:z-[1] lg:relative lg:right-[2rem] flex flex-col justify-end items-end">
              <p>Featured Project</p>
              <p className="title">Git Search</p>
              <p className="you">
                <strong>Git Search</strong>: make available to users the comfort
                of locating a particular Github user at a very stressfree
                maximun rate
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
              className="lg:hidden w-[95%] lg:w-[50%]"
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

            <img src={image4} className="w-[95%] lg:w-[55%]" alt="product" />
          </div>
          <div className="div  mt-[7rem] ">
            <img
              src={image5}
              className="hidden lg:flex w-[90%] lg:w-[50%]"
              alt="youtube"
            />
            <div className="mt-[1rem] lg:z-[1] lg:relative lg:right-[2rem] flex flex-col justify-end  items-end">
              <p>Featured project</p>
              <p className="title">Youtube Cloned</p>
              <p className="you">
                <strong> Youtube cloned</strong>: is a project that copy the
                features of Youtube in providing quality and standardized
                Movies,TV show and others
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
        </section>
        <section className="w-[95vw] lg:w-[100%]  mt-[5rem] lg:mt-[15rem]">
          <p
            id="store"
            className=" lg:w-auto lg:tracking-[3px] lg:text-[2.5rem] text-[#f0c4f9] text-center"
          >
            Projects in view, cracking the Glass of Store{" "}
          </p>
          <div className="w-[100vw] md:w-[100%] md:pl-[5%] lg:w-[100%] projects mt-[2rem]">
            <div className="project">
              <GitHub />
              <p>
                M&K: is a guarantee and an expert platform for sale and
                distribution of quality Items of different kind
              </p>
            </div>
            <p className="project"></p>
            <p className="project"></p>
            <p className="project"></p>
            <p className="project"></p>
            <p className="project"></p>
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
            Remixed and built by Abdulsamii Ajala,adopted by Abdulraheem Mikail
            k.
          </p>
        </section>
      </aside>
      <aside className="md:hidden lg:flex emailside">
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
      </aside>
    </div>
  );
};

export default Home;
