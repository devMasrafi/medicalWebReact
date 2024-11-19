import React from "react";

const ServicePage = () => {
  return (
    <main className="sm:text-sm md:text-base">
      <section className="relative bg-ourServiceBg bg-no-repeat bg-cover h-[350px] ">
        <div className="absolute inset-0 bg-white/40">
          <div className="bg-ourServiceBgOverlay h-[350px] bg-cover opacity-80 bg-no-repeat">
            <div className="container mx-auto pt-[12rem] sm:px-2 ">
              <div className="font-workSans shadow-md ">
                <a href="/" className="hover:text-AscColor transition-colors">
                  Home
                </a>
                <span> / </span>
                <span>Service</span>
              </div>
              <h2 className="font-yesevaOne capitalize text-6xl text-mainColor ">
                About us
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* service discribtion */}
      <section className="container mx-auto font-workSans 2xl:flex justify-evenly my-24 md:block sm:px-2">
        <div className=" md:w-[28rem] md:mx-auto md:mb-6 ">
          <div className=" text-center gap-2 sm:gap-5 sm:flex sm:flex-wrap 2xl:block sm:w-[18rem] md:w-full sm:mx-auto sm:mb-4 ">
            <div className="border rounded-md md:w-[13rem] md:h-[7rem] md:mb-3 flex flex-col items-center capitalize font-medium py-2 sm:w-[8rem] ">
              <img
                className="w-[4rem] h-[4rem] "
                src="./images/bandageIcon.svg"
                alt="free checkup image"
              />
              <h3>free checkup</h3>
            </div>
            <div className="border rounded-md md:w-[13rem] md:h-[7rem] md:mb-3 flex flex-col items-center capitalize font-medium py-2  sm:w-[8rem] ">
              <img
                className="w-[4rem] h-[4rem] "
                src="./images/heartVector.svg"
                alt="cardiogram image"
              />
              <h3>cardiogram</h3>
            </div>
            <div className="border rounded-md md:w-[13rem] md:h-[7rem] md:mb-3 flex flex-col items-center capitalize font-medium py-2   sm:w-[8rem] ">
              <img
                className="w-[4rem] h-[4rem] "
                src="./images/dnaTesting.svg"
                alt="dnatesting image"
              />
              <h3>dna testing</h3>
            </div>
            <div className="border rounded-md md:w-[13rem] md:h-[7rem] md:mb-3 flex flex-col items-center capitalize font-medium py-2   sm:w-[8rem] ">
              <img
                className="w-[4rem] h-[4rem] "
                src="./images/bloodBank.svg"
                alt="blood bank image"
              />
              <h3>blood bank</h3>
            </div>
          </div>
          <div>
          <div className="bg-mainColor text-white py-2 capitalize text-center rounded-md 2xl:w-[13rem] sm:mb-4 ">
            <h3>view all</h3>
          </div>
          </div>
        </div>

        {/*sometext */}
        <div className="md:w-[38rem] ">
          <div className="md:mx-auto">
            <img
              className="md:w-full md:h-[450px] border border-mainColor rounded sm:w-[18rem] sm:mx-auto  "
              src="./images/serviceImg-1.jpg"
              alt="service image"
            />
          </div>
          <div className="sm:px-2">
            <div className="py-3">
              <h2 className="md:text-3xl font-yesevaOne sm:text-lg ">
                A passion for putting patients first.
              </h2>
              <div className="md:flex justify-between py-5 ">
                <ul className="list-disc list-inside">
                  <li>A Passion for Healing</li>
                  <li>All our best</li>
                  <li>A Legacy of Excellence</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>5-Star Care</li>
                  <li>Believe in Us</li>
                  <li>Always Caring</li>
                </ul>
              </div>
              <div className=" py-8 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* news section */}
      <section className="container mx-auto">
        <div>
          <div className="text-center">
            <h3 className="font-workSans font-semibold uppercase text-secColor md:text-2xl ">
              Better information, Better health
            </h3>
            <h2 className="font-yesevaOne text-mainColor md:text-4xl sm:text-xl my-3 ">
              News
            </h2>
          </div>
          <div className=" my-14">
            <div className="flex flex-wrap gap-5 justify-evenly">
              <div className="rounded-md flex gap-4 w-[585px] border  ">
                <div>
                  <img
                    src="./images/ourServiceImg/newsImage.jpg"
                    alt="news image"
                  />
                </div>
                <div>
                  <h3 className="font-workSans uppercase text-secColor">
                    Monday 05, September 2021 | By Author
                  </h3>
                  <h2 className="font-yesevaOne capitalize text-mainColor md:text-xl">
                    This Article&#39;s Title goes Here, but not too long.
                  </h2>
                  <p className="font-workSans uppercase py-3 font-medium">
                    view more
                  </p>
                </div>
              </div>
              <div className="rounded-md flex gap-4 w-[585px] border ">
                <div>
                  <img
                    src="./images/ourServiceImg/newsImage.jpg"
                    alt="news image"
                  />
                </div>
                <div>
                  <h3 className="font-workSans uppercase text-secColor">
                    Monday 05, September 2021 | By Author
                  </h3>
                  <h2 className="font-yesevaOne capitalize text-mainColor md:text-xl">
                    This Article&#39;s Title goes Here, but not too long.
                  </h2>
                  <p className="font-workSans uppercase py-3 font-medium">
                    view more
                  </p>
                </div>
              </div>
              <div className="rounded-md flex gap-4 w-[585px] border ">
                <div>
                  <img
                    src="./images/ourServiceImg/newsImage.jpg"
                    alt="news image"
                  />
                </div>
                <div>
                  <h3 className="font-workSans uppercase text-secColor">
                    Monday 05, September 2021 | By Author
                  </h3>
                  <h2 className="font-yesevaOne capitalize text-mainColor md:text-xl">
                    This Article&#39;s Title goes Here, but not too long.
                  </h2>
                  <p className="font-workSans uppercase py-3 font-medium">
                    view more
                  </p>
                </div>
              </div>
              <div className="rounded-md flex gap-4 w-[585px] border ">
                <div>
                  <img
                    src="./images/ourServiceImg/newsImage.jpg"
                    alt="news image"
                  />
                </div>
                <div>
                  <h3 className="font-workSans uppercase text-secColor">
                    Monday 05, September 2021 | By Author
                  </h3>
                  <h2 className="font-yesevaOne capitalize text-mainColor md:text-xl">
                    This Article&#39;s Title goes Here, but not too long.
                  </h2>
                  <p className="font-workSans uppercase py-3 font-medium">
                    view more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
