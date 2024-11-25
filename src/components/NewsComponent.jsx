import React from "react";
import { motion } from "framer-motion";

const NewsComponent = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div>
      <div className="my-14">
        <motion.div
          className="flex flex-wrap gap-5 justify-evenly"
          variants={staggerContainer}
        >
          {[
            {img: './images/ourServiceImg/newsImage.jpg', time: 'Monday 05, September 2021 | By Author', title: 'This Article&#39;s Title goes Here, but not too long'},
            {img: './images/ourServiceImg/newsImage.jpg', time: 'Monday 05, September 2021 | By Author', title: 'This Article&#39;s Title goes Here, but not too long'},
            {img: './images/ourServiceImg/newsImage.jpg', time: 'Monday 05, September 2021 | By Author', title: 'This Article&#39;s Title goes Here, but not too long'},
            {img: './images/ourServiceImg/newsImage.jpg', time: 'Monday 05, September 2021 | By Author', title: 'This Article&#39;s Title goes Here, but not too long'}, 
          ].map((news, index) => (
              <motion.div
                className="rounded-md flex gap-4 w-[585px] border cursor-pointer "
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <img
                    src={news.img}
                    alt="news image"
                  />
                </div>
                <div>
                  <h3 className="font-workSans uppercase text-secColor">
                    {news.time}
                  </h3>
                  <h2 className="font-yesevaOne capitalize text-mainColor md:text-xl">
                    {news.title}
                  </h2>
                  <p className="font-workSans uppercase py-3 font-medium">
                    view more
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsComponent;
