import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="  LinkCollection   ">
      <div className="devLogo">
        <Link className="flex flex-wrap  items-center" to="/">
          <p className="text-[2rem] p-2  font-[Britney]	">Mikail</p>
        </Link>
      </div>
      <div>
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
          className="Link border-[2px]  py-[5px] px-[15px]"
          href="https://flowcv.com/resume/02gb58s3t3"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;
