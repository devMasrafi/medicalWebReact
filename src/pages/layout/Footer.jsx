import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-mainColor text-white p-6">
        <div className="container mx-auto">
          <div 
            className=" flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-400 py-5 ">
            <div className="mb-4 md:mb-0">
              <img src="./images/MeddicalAsc.svg" alt="" />
              <p className="text-sm mt-2">
                Leading the Way in Medical Excellence, Trusted Care.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-20">
              <div>
                <h3 className="text-lg font-semibold mb-2">Important Links</h3>
                <ul className="py-2">
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Appointment
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Doctors
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="py-2">Call: (237) 681-812-255</p>
                <p className="py-2">Email: fildineesoe@gmail.com</p>
                <p className="py-2">Address: 0123 Some place</p>
                <p className="py-2">Some country</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 p-2 rounded-l-md outline-none text-black"
                />
                <button className="bg-blue-500 hover:bg-mainColor text-white px-4 py-2 rounded-r-md">
                  <img src="./images/sendMail.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* copywright */}
          <div className="mt-4 md:mt-0 py-6">
            <p>&copy; 2021 Hospital's name. All Rights Reserved by PNTEC-LTD</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer