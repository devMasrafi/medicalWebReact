import React from "react";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <section className="container mx-auto my-3 font-workSans">
      <div className="2xl:flex md:flex md:gap-5 justify-between items-center sm:px-1 ">
        <div className="sm:hidden 2xl:block lg:block md:block ">
          <Link>
            <img src="./images/Meddical.svg" alt="medical image logo" />
          </Link>
        </div>
        <div className="flex items-center 2xl:gap-5 ">
          <div className="flex items-center gap-2 ">
            <img className="sm:w-[2rem] " src="./images/callIcon.svg" alt="call icon" />
            <div>
              <h3 className=" font-medium text-xl sm:text-sm ">Emergency</h3>
              <h3 className="text-secColor sm:text-xs">(237) 681-812-255</h3>
            </div>
          </div>
          <div className=" sm:hidden 2xl:flex md:flex items-center gap-2 md:w-[11rem] ">
            <img src="./images/clockIcon.svg" alt="call icon" />
            <div>
              <h3 className="text-xl font-medium sm:text-sm ">Work Hour</h3>
              <h3 className="text-secColor">09:00 - 20:00 Everyday</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <img className="sm:w-[2rem] " src="./images/locationIcon.svg" alt="location image" />
            <div>
            <h3 className="text-xl font-medium sm:text-sm">Location</h3>
            <h3 className="text-secColor sm:text-sm ">0123 Some Place</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpperNav;
