import React, { useState } from "react";

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

  return (
    <main className="font-workSans">
      <section className="container mx-auto">
        <div className="my-8 flex flex-col items-center justify-center">
          <img
            className="rounded-md border-mainColor border-2 2xl:w-[70rem] md:w-[35rem] sm:w-[18rem] "
            src="./images/contactImages/Mapview.png"
            alt="google images"
          />
          <p className="md:w-[35rem] sm:w-[18rem] sm:text-center md:text-center ">
            Due to not having a google api or using google cloud Map AIP this
            will be static
          </p>
        </div>
      </section>

      {/* forum */}
      <section className="container mx-auto">
        <div className="text-center sm:w-[18rem] ">
          <h3 className="text-lg uppercase font-semibold text-secColor">
            get in touch
          </h3>
          <h2 className="font-yesevaOne text-3xl pt-2">contact</h2>
        </div>
        <div className="my-8">
          <div className="2xl:flex justify-evenly">
            <div>
              <form
                onSubmit={onSubmitHandler}
                action="submit"
                className="bg-mainColor text-white rounded-lg sm:w-[18rem] sm:mx-auto md:w-[36rem] "
              >
                <div className="md:flex flex-col ">
                  <div className="md:flex justify-between items-center ">
                    <input
                      className="bg-mainColor text-white p-2 2xl:w-[20rem] outline-none md:border-r sm:border-b md:w-[22rem] sm:w-full "
                      type="text"
                      placeholder="Name"
                      name="UserName"
                      value={formInput.UserName}
                      onChange={onChangeHandler}
                    />
                    <input
                      className="bg-mainColor text-white p-2 2xl:w-[20rem] outline-none md:w-[22rem] sm:w-full "
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
                  <button className="bg-secColor py-3 font-medium capitalize 2xl:text-lg sm:w-full ">
                    submit
                  </button>
                </div>
              </form>
            </div>
            <div className="2xl:w-[35rem] 2xl:mt-0 md:w-[32rem] md:mx-auto md:mt-[4rem] sm:w-[18rem] sm:mx-auto sm:mt-8 ">
              <div className="flex flex-wrap items-center gap-8">
                <div className=" md:w-[230px] md:h-[230px] bg-mainColor text-white flex flex-col justify-center rounded-md sm:w-full sm:h-[6rem]">
                  <div className="2xl:w-[10rem] mx-auto">
                    <h3 className="text-lg uppercase font-medium ">
                      emergency
                    </h3>
                    <p>(237) 681-812-255</p>
                    <p>(237) 666-331-894</p>
                  </div>
                </div>
                <div className=" md:w-[230px] md:h-[230px] bg-mainColor text-white flex flex-col justify-center rounded-md sm:w-full sm:h-[6rem]">
                  <div className="2xl:w-[10rem] mx-auto">
                    <h3 className="text-lg uppercase font-medium ">Location</h3>
                    <p>0123 Some place</p>
                    <p>9876 Some country</p>
                  </div>
                </div>
                <div className=" md:w-[230px] md:h-[230px] bg-mainColor text-white flex flex-col justify-center rounded-md sm:w-full sm:h-[6rem]">
                  <div className="2xl:w-[10rem] mx-auto">
                    <h3 className="text-lg uppercase font-medium ">Email</h3>
                    <p>fildineeesoe@gmil.com</p>
                    <p>myebstudi<br />os@gmail.com</p>
                  </div>
                </div>
                <div className=" md:w-[230px] md:h-[230px] bg-mainColor text-white flex flex-col justify-center rounded-md sm:w-full sm:h-[6rem]">
                  <div className="2xl:w-[10rem] mx-auto">
                    <h3 className="text-lg uppercase font-medium ">
                      Working Hours
                    </h3>
                    <p>Mon-Sat 09:00-20:00</p>
                    <p>Sunday Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news */}
      <section className="container mx-auto my-[8rem]">
        <div className="text-center text-3xl font-yesevaOne capitalize" >
          <h2>recent news</h2>
        </div>
        <div className="my-14 sm:w-[19rem] md:w-full ">
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
                  Monday 05, September 2024 | By Author
                </h3>
                <h2 className="font-yesevaOne capitalize text-mainColor text-xl">
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
                  Monday 05, September 2024 | By Author
                </h3>
                <h2 className="font-yesevaOne capitalize text-mainColor text-xl">
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
                  Monday 05, September 2024 | By Author
                </h3>
                <h2 className="font-yesevaOne capitalize text-mainColor text-xl">
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
                  Monday 05, September 2024 | By Author
                </h3>
                <h2 className="font-yesevaOne capitalize text-mainColor text-xl">
                  This Article&#39;s Title goes Here, but not too long.
                </h2>
                <p className="font-workSans uppercase py-3 font-medium">
                  view more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
