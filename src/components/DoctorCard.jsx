import { motion, useInView } from "framer-motion";
import React from "react";

const DoctorCard = () => {
  return (
    <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:flex justify-center md:gap-8 sm:block "
        >
          {[
            { img: "./images/doctorimage-1.jpg", name: "Doctor Name", dept: "Neurology" },
            { img: "./images/doctorimage-2.png", name: "Doctor Name", dept: "Neurology" },
            { img: "./images/doctorimage-3.jpg", name: "Doctor Name", dept: "Neurology" },
          ].map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 1 }}
              className="border rounded-md text-center sm:my-3 md:my-0"
            >
              <img className="w-full" src={doctor.img} alt="Doctor" />
              <div className="py-4">
                <h3 className="capitalize">{doctor.name}</h3>
                <h2 className="uppercase font-medium text-secColor">{doctor.dept}</h2>
              </div>
              <h4 className="bg-mainColor w-full py-2 text-white uppercase 2xl:text-base sm:text-xs cursor-pointer">
                View Profile
              </h4>
            </motion.div>
          ))}
        </motion.div>
  );
};

export default DoctorCard;
