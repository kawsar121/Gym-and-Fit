import { Activity, ArrowRightIcon, MapPinIcon, User, Zap } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import bgImg from "../assets/Untitled4.png";
import fighterImg from "../assets/fighter.png";
const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col lg:block">
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center items-center lg:items-end overflow-hidden">
        <img
          src={fighterImg}
          alt="Fighters"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-once="true"
          className="w-auto h-[50%] lg:h-full object-contain opacity-80 lg:opacity-100"
        />
      </div>

      <div className="relative z-20 flex flex-col lg:grid lg:grid-cols-12 h-full min-h-screen px-6 lg:px-16 pt-24 lg:pt-32 pb-10">
        <div className="col-span-3 flex flex-col justify-between h-full order-2 lg:order-1">
          <div className="hidden lg:flex gap-4 text-white items-center mt-5">
            <span className="text-sm font-medium text-white ">Follow On:</span>
            <FaFacebook
              size={16}
              className="cursor-pointer hover:text-lime-500"
            />
            <FaInstagram
              size={16}
              className="cursor-pointer hover:text-lime-500"
            />
            <FaTwitter
              size={16}
              className="cursor-pointer hover:text-lime-500"
            />
            <FaLinkedin
              size={16}
              className="cursor-pointer hover:text-lime-500"
            />
          </div>

          <div className="mt-10 lg:mt-0 mb-10">
            <h3 className="text-white font-bold mb-4 tracking-widest text-[10px] lg:text-xs">
              OUR SPECIALTY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 max-w-sm lg:w-56">
              {[
                { title: "Ground running", icon: <Activity size={16} /> },
                { title: "Yoga Assistance", icon: <Zap size={16} /> },
                { title: "Personal Trainer", icon: <User size={16} /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
                >
                  <div className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center text-lime-500">
                    {item.icon}
                  </div>
                  <span className="text-white text-[11px] lg:text-xs font-light">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-9 flex flex-col justify-between lg:justify-end items-center h-full order-1 lg:order-2">
          <div className="relative flex flex-col items-center mt-10 lg:mt-0">
            <h1 className="text-white text-[45px] sm:text-[70px] lg:text-[110px] font-black italic uppercase leading-[0.8] opacity-10 absolute -top-2 lg:-top-5 text-center w-full">
              POWER YOUR <br /> PONTETIALE
            </h1>
            <h1 className="text-white text-[45px] sm:text-[70px] lg:text-[110px] font-black italic uppercase leading-[0.8] relative z-20 text-center">
              POWER YOUR <br />
              <span
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                PONTETIALE
              </span>
            </h1>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10 mt-10 lg:mt-20">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white px-8 lg:px-12 py-3 rounded-full text-white hover:bg-white hover:text-black transition uppercase text-xs lg:text-sm font-bold tracking-widest group">
              Shop Now{" "}
              <ArrowRightIcon
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white p-3 rounded-xl hover:bg-lime-500 transition group border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <MapPinIcon
                size={24}
                className="text-black group-hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
