import React from "react";

const DoctorCard = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        <img
          src={imageSrc}
          alt={DoctorName}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-lg font-bold mb-2">{DoctorName}</h3>
        <p className="text-gray-500 mb-2">{specialty}</p>
        <a href={profileLink} className="text-blue-500 hover:underline">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
