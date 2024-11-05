import React from "react";
import { Link } from "react-router-dom";

const UpperNav = () => {
  return (
    <section className="container mx-auto my-3 font-workSans">
      <div className="flex justify-between items-center">
        <div>
          <Link>
            <img src="./images/Meddical.svg" alt="medical image logo" />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 ">
            <img src="./images/callIcon.svg" alt="call icon" />
            <div>
              <h3 className="text-xl font-medium ">Emergency</h3>
              <h3 className="text-secColor">(237) 681-812-255</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <img src="./images/clockIcon.svg" alt="call icon" />
            <div>
              <h3 className="text-xl font-medium">Work Hour</h3>
              <h3 className="text-secColor">09:00 - 20:00 Everyday</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <img src="./images/locationIcon.svg" alt="location image" />
            <div>
            <h3 className="text-xl font-medium">Location</h3>
            <h3 className="text-secColor">0123 Some Place</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpperNav;
