import React from "react";
import { Link } from "react-router-dom";


const CmnButton = ({to, children}) => {
  return (
    <button className="capitalize font-workSans font-medium bg-secColor rounded-full py-3 px-6 ">
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default CmnButton;
