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
            className="rounded-md border-mainColor border-2"
            src="./images/contactImages/Mapview.png"
            alt="google images"
          />
          <p>
            Due to not having a google api or using google cloud Map AIP this
            will be static
          </p>
        </div>
      </section>

      {/* forum */}
      <section className="container mx-auto">
        <div className="text-center">
          <h3 className="text-lg uppercase font-semibold text-secColor">
            get in touch
          </h3>
          <h2 className="font-yesevaOne text-3xl pt-2">contact</h2>
        </div>
        <div className="my-8">
          <div className="flex justify-evenly">
            <div>
              <form
                onSubmit={onSubmitHandler}
                action="submit"
                className="bg-mainColor text-white rounded-lg "
              >
                <div className="flex flex-col ">
                  <div className="flex justify-between items-center">
                    <input
                      className="bg-mainColor text-white p-2 w-[240px] outline-none  border-r "
                      type="text"
                      placeholder="Name"
                      name="UserName"
                      value={formInput.UserName}
                      onChange={onChangeHandler}
                    />
                    <input
                      className="bg-mainColor text-white p-2 w-[240px] outline-none "
                      type="email"
                      placeholder="Email"
                      name="UserEmail"
                      value={formInput.UserEmail}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <input
                    className="bg-mainColor text-white p-2 outline-none border-t"
                    type="text"
                    name="UserSubject"
                    value={formInput.UserSubject}
                    onChange={onChangeHandler}
                    placeholder="Subject"
                  />
                  <textarea
                    className="bg-mainColor text-white p-2 outline-none border-y"
                    name="UserMessage"
                    value={formInput.UserMessage}
                    onChange={onChangeHandler}
                    placeholder="Message"
                    rows={9}
                  ></textarea>
                  <button className="bg-secColor py-3 font-medium capitalize text-lg ">
                    submit
                  </button>
                </div>
              </form>
            </div>
            <div className="w-[585px] ">
              <div className="flex flex-wrap items-center gap-8">
                <div className=" w-[230px] h-[230px] bg-AscColor flex flex-col justify-center items-center rounded-md ">
                  <div>
                    <h3 className="text-lg uppercase font-medium ">
                      emergency
                    </h3>
                    <p>(237) 681-812-255</p>
                    <p>(237) 666-331-894</p>
                  </div>
                </div>
                <div className=" w-[230px] h-[230px] bg-mainColor text-white flex flex-col justify-center items-center rounded-md ">
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
