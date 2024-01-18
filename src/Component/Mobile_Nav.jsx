import { CancelOutlined, MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mobile_Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {!show ? (
        <div className="lg:hidden  flex flex-row justify-between items-center w-[100%] h-[12vh] px-[15px] bg-[#0a192f] fixed z-[2] overflow-hidden ">
          <div className="devLogo">
            <Link className="flex flex-wrap  items-center" to="/">
              <p
                className=" italic text-[1.5rem] lg:text-[2rem] border-[1px] p-1 lg
              :p-2  drop-shadow-md	"
              >
                Mιƙαιʅ
              </p>
            </Link>
          </div>
          <MenuOutlined onClick={() => setShow(true)} />
        </div>
      ) : (
        <div className="lg:hidden z-[2] overflow-hidden">
          <div className="fixed flex flex-row justify-between items-center w-[100vw] h-[12vh] px-[15px] bg-[#0a192f]  overflow-hidden z-[3]">
            <div className="devLogo">
              <Link className="flex flex-wrap  items-center" to="/">
                <p className=" italic text-[1.5rem] lg:text-[2rem] border-[1px] p-1 lg:p-2  drop-shadow-lg	">
                  Mιƙαιʅ
                </p>
              </Link>
            </div>
            <CancelOutlined
              className="w-[25px] h-[25px]"
              onClick={() => setShow(false)}
            />
          </div>
          <div className="lg:hidden flex  flex-col justify-center items-center bg-[#0a192f] pt-[10%] w-[70%] md:w-[50%] h-[100vh] fixed z-[2]">
            <div className="w-[100%] flex flex-col justify-center  pl-[5%] ">
              {" "}
              <a className="Link" href="#About">
                About
              </a>
              <a className="Link" href="#portfolio">
                Portfolio
              </a>
              <a className="Link" href="#store">
                Others
              </a>
              <a className="Link" href="#contact">
                Contact
              </a>{" "}
              <a
                className="ml-[5%] w-[60%] text-center py-[10px] px-[15px] border-[2px]  rounded-[5px] mt-[30%]"
                href="#/"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile_Nav;
