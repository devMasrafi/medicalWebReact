import React from "react";

const ContactCards = ({className}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly items-center gap-8">
        {[
          {
            title: "Emergency",
            details: ["(237) 681-812-255", "(237) 666-331-894"],
          },
          {
            title: "Location",
            details: ["0123 Some place", "9876 Some country"],
          },
          {
            title: "Email",
            details: ["fildineeesoe@gmil.com", "myebstudios@gmail.com"],
          },
          {
            title: "Working Hours",
            details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
          },
        ].map((info, idx) => (
          <div
            key={idx}
            className={className}
          >
            <div className="2xl:w-[10rem] mx-auto text-center">
              <h3 className="text-lg uppercase font-medium">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
