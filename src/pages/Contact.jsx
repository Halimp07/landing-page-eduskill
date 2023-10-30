import React, { useEffect } from "react";
import { bg_overlay } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full lg:h-72 md:h-56 h-56 bg-teal-600 flex justify-center relative">
      <div className="lg:section md:section flex justify-center">
        <img
          className="w-full h-full absolute right-0 left-0 top-0"
          src={bg_overlay}
        />
        <div className="lg:h-72 md:h-56 h-56 py-12 flex-col justify-center items-center gap-6 inline-flex">
          <div
            data-aos="zoom-out-up"
            className="lg:w-[830px] md:w-[600px] w-[300px] text-center text-white lg:text-4xl md:text-2xl text-base font-bold font-['Poppins'] lg:leading-10 md:leading-7 leading-7 tracking-wide relative"
          >
            Mau Request Kelas Untuk Lembaga pendidikan mu? Bisa Dong
          </div>
          
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="px-6 lg:py-3 md:py-2 py-2 bg-orange-400 rounded-xl justify-center items-center lg:gap-2 md:gap-0 gap-0 inline-flex relative"
          >
            <div className="text-center text-white g:text-lg md:text-base text-base font-semibold font-['Poppins'] leading-9 tracking-tight">
              <a
                href="https://wa.me/62895414873950"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;
