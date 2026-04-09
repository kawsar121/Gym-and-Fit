import { motion } from "framer-motion";
const Clients = () => {
  const reviews = [1, 2, 3, 4, 5, 6];

  return (
    <div className="p-4 lg:p-10 max-w-7xl mx-auto">
      <div className="ml-10 mt-14">
        <h1 className="text-3xl font-satoshi md:text-4xl font-bold text-black/75">
          What Our Clients Are Saying
        </h1>

        <p className="font-medium font-satoshi text-base md:text-xl mt-3">
          Real Stories, Real Results — Hear From Our Athletes
        </p>
      </div>
      <div className="bg-gray-300  py-20 px-6 lg:px-16 rounded-[50px] mt-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black rounded-[35px] p-8 shadow-xl relative overflow-hidden group"
              >
                <h4 className="text-white font-satoshi text-xl font-bold mb-4">
                  The Best Training Program!
                </h4>
                <p className="text-gray-400 font-satoshi text-sm leading-relaxed mb-8">
                  The boxing program helped me build confidence, strength, and
                  endurance. The coaches are supportive and push you to be your
                  best. Highly recommend for anyone serious about their fitness!
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#5FB539]">
                      <img
                        src={`https://i.pravatar.cc/150?u=${index}`}
                        alt="User"
                      />
                    </div>
                    <div>
                      <h5 className="text-white font-satoshi font-bold text-sm">
                        Stive Meloni
                      </h5>
                      <p className="text-gray-500 text-xs">Cea Of Miko</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#5FB539] text-xs">
                        ★
                      </span>
                    ))}
                    <span className="text-white text-[10px] ml-1">4.5</span>
                  </div>
                </div>

                {/* Subtle hover effect light */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#5FB539]/10 rounded-full blur-3xl group-hover:bg-[#5FB539]/20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
