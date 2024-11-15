import React from "react";

const About = () => {
  return (
    <main className="font-workSans">
      {/* hero section */}
      <section className="bg-aboutHeroImg bg-no-repeat bg-cover h-[350px] ">
        <div className="container mx-auto pt-[12rem] ">
          <div className="font-workSans shadow-md ">
            <a href="/" className="hover:text-AscColor transition-colors">
              Home
            </a>
            <span> / </span>
            <span>About Us</span>
          </div>
          <h2 className="font-yesevaOne capitalize text-6xl text-mainColor ">
            About us
          </h2>
        </div>
      </section>
      {/* About welcome section */}
      <section className="container mx-auto mt-[4rem]">
        <div>
          <div className="flex justify-evenly ">
            <div>
              <img
                src="./images/aboutWelcomeImg.png"
                alt="about welcome image"
              />
            </div>
            <div>
              <div>
                <h3 className="text-xl uppercase text-secColor font-workSans font-medium ">
                  Welcome to Hospital name
                </h3>
                <h2 className="font-yesevaOne text-3xl capitalize text-mainColor   ">
                  Best Care for Your Good Health
                </h2>
                <div className="flex py-5 gap-12 ">
                  <ul className="list-disc list-inside marker:text-blue-600">
                    <li>A Passion for Healing</li>
                    <li>All our best</li>
                    <li>A Legacy of Excellence</li>
                  </ul>
                  <ul className="list-disc list-inside marker:text-blue-600 ">
                    <li>5-Star Care</li>
                    <li>Believe in Us</li>
                    <li>Always Caring</li>
                  </ul>
                </div>
                <div className="py-8 w-[564px] ">
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
        </div>
      </section>

      {/* About us measages section */}
      <section className="relative bg-aboutMessageBg bg-cover h-[440px] my-14 text-white ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70">
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-[554px] flex flex-col items-center mt-[5rem] ">
              <img className="w-[4rem]" src="./images/quotionVector.svg" alt="" />
              <p className="border-b-2 border-b-gray-400 pb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque felis vitae tortor augue. Velit nascetur Consequat
                faucibus porttitor enim et.
              </p>
              <h3 className="capitalize text-xl font-semibold pt-4">Jhon doe</h3>
            </div>
          </div>
        </div>
      </section>
      {/* doctors */}
      <section className="font-workSans">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Doctors</h2>
          <div className="flex justify-center gap-8">
            <div className="border rounded-md ">
              <div className="text-center">
                <img src="./images/doctorimage-1.jpg" alt="" />
                <div className="py-4">
                  <h3 className="capitalize ">doctor name</h3>
                  <h2 className="uppercase font-medium text-secColor  ">
                    neurology
                  </h2>
                </div>
                <h4 className="bg-mainColor w-full py-2 text-white uppercase">
                  view profile
                </h4>
              </div>
            </div>
            <div className="text-center">
              <img src="./images/doctorimage-2.png" alt="" />
              <div className="py-4">
                <h3 className="capitalize ">doctor name</h3>
                <h2 className="uppercase font-medium text-secColor  ">
                  neurology
                </h2>
              </div>
              <h4 className="bg-mainColor w-full py-2 text-white uppercase">
                view profile
              </h4>
            </div>
            <div className="text-center">
              <img src="./images/doctorimage-3.jpg" alt="" />
              <div className="py-4">
                <h3 className="capitalize ">doctor name</h3>
                <h2 className="uppercase font-medium text-secColor  ">
                  neurology
                </h2>
              </div>
              <h4 className="bg-mainColor w-full py-2 text-white uppercase">
                view profile
              </h4>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto py-10">
        <div>
          <div className="text-center my-20 ">
            <h3 className="text-lg uppercase font-semibold text-secColor">get in touch</h3>
            <h2 className="font-yesevaOne text-3xl pt-2">contact</h2>
          </div>
          <div className="flex justify-evenly items-center">
            <div className=" w-[230px] h-[230px] bg-AscColor flex flex-col justify-center items-center rounded-md ">
              <div>
              <h3 className="text-lg uppercase font-medium ">emergency</h3>
              <p>(237) 681-812-255</p>
              <p>(237) 666-331-894</p>
              </div>
            </div>
            <div className=" w-[230px] h-[230px] bg-AscColor flex flex-col justify-center items-center rounded-md ">
              <div>
              <h3 className="text-lg uppercase font-medium ">Location</h3>
              <p>0123 Some place</p>
              <p>9876 Some country</p>
              </div>
            </div>
            <div className=" w-[230px] h-[230px] bg-AscColor flex flex-col justify-center items-center rounded-md ">
              <div>
              <h3 className="text-lg uppercase font-medium ">Email</h3>
              <p>fildineeesoe@gmil.com</p>
              <p>myebstudios@gmail.com</p>
              </div>
            </div>
            <div className=" w-[230px] h-[230px] bg-AscColor flex flex-col justify-center items-center rounded-md ">
              <div>
              <h3 className="text-lg uppercase font-medium ">Working Hours</h3>
              <p>Mon-Sat 09:00-20:00</p>
              <p>Sunday Emergency only</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
