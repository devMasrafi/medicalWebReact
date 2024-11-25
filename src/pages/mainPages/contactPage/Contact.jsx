import React, { useState } from "react";
import NewsComponent from "../../../components/NewsComponent";
import { motion } from "framer-motion";
import ContactCards from "../../../components/ContactCards";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    UserName: "",
    UserEmail: "",
    UserSubject: "",
    UserMessage: "",
  });

  const onChangeHandler = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formInput);
    setFormInput({
      UserName: "",
      UserEmail: "",
      UserSubject: "",
      UserMessage: "",
    });
  };

  // Framer Motion Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <main className="font-workSans">
      {/* Map Section */}
      <motion.section
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="my-8 flex flex-col items-center justify-center">
          <img
            className="rounded-md border-mainColor border-2 2xl:w-[70rem] md:w-[35rem] sm:w-[18rem] "
            src="./images/contactImages/Mapview.png"
            alt="google images"
          />
          <p className="md:w-[35rem] sm:w-[18rem] sm:text-center md:text-center ">
            Due to not having a Google API or using Google Cloud Map API, this
            will be static
          </p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="text-center sm:w-[18rem]"
          variants={sectionVariant}
        >
          <h3 className="text-lg uppercase font-semibold text-secColor">
            get in touch
          </h3>
          <h2 className="font-yesevaOne text-3xl pt-2">contact</h2>
        </motion.div>
        <div className="my-8">
          <motion.div
            className="2xl:flex justify-evenly"
            variants={staggerContainer}
          >
            <motion.div variants={sectionVariant}>
              <form
                onSubmit={onSubmitHandler}
                className="bg-mainColor text-white rounded-lg sm:w-[18rem] sm:mx-auto md:w-[36rem]"
              >
                <div className="md:flex flex-col">
                  <div className="md:flex justify-between items-center">
                    <input
                      className="bg-mainColor text-white p-2 2xl:w-[20rem] outline-none md:border-r sm:border-b md:w-[22rem] sm:w-full"
                      type="text"
                      placeholder="Name"
                      name="UserName"
                      value={formInput.UserName}
                      onChange={onChangeHandler}
                    />
                    <input
                      className="bg-mainColor text-white p-2 2xl:w-[20rem] outline-none md:w-[22rem] sm:w-full"
                      type="email"
                      placeholder="Email"
                      name="UserEmail"
                      value={formInput.UserEmail}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <input
                    className="bg-mainColor text-white p-2 outline-none border-t sm:w-full"
                    type="text"
                    name="UserSubject"
                    value={formInput.UserSubject}
                    onChange={onChangeHandler}
                    placeholder="Subject"
                  />
                  <textarea
                    className="bg-mainColor text-white p-2 outline-none border-y sm:w-full"
                    name="UserMessage"
                    value={formInput.UserMessage}
                    onChange={onChangeHandler}
                    placeholder="Message"
                    rows={9}
                  ></textarea>
                  <button className="bg-secColor py-3 font-medium capitalize 2xl:text-lg sm:w-full">
                    submit
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              className="2xl:w-[35rem] 2xl:mt-0 md:w-[32rem] md:mx-auto md:mt-[4rem] sm:w-[18rem] sm:mx-auto sm:mt-8"
              variants={sectionVariant}
            >
              <div>
                <ContactCards className="md:w-[230px] md:h-[230px] bg-mainColor text-white flex flex-col justify-center rounded-md sm:w-full sm:h-[6rem]"/>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="container mx-auto my-[8rem]"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center text-3xl font-yesevaOne capitalize">
          <h2>recent news</h2>
        </div>
        <NewsComponent />
      </motion.section>
    </main>
  );
};

export default Contact;
