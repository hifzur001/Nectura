import { motion } from "framer-motion";
import Cosmetic from "../img/cosmetic.png";
import Image from "../img/anti-aging.png";
import Hand from "../img/hand-serum.png";
const Brands = () => {
    return (
        <div className="brands">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                    animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1.5 }} // Animation duration and delay
                    className="text-7xl pb-5"
                >
                    About{" "}
                    <span className="text-[#E42D6B] font-gilroy">Our</span>{" "}
                    Brand And{" "}
                    <span className="text-[#E42D6B] font-gilroy">Work</span>
                </motion.h2>

                <div className="flex justify-center">
                    <div className="w-1/2 flex justify-center items-center">
                        <motion.p
                            className="py-3 flex justify-center items-center"
                            initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 1.5 }} // Animation duration and delay
                        >
                            Introducing Nectura: where skincare transcends
                            routine. Harnessing the power of natural
                            ingredients, each product nurtures, heals, and
                            revives skin. Experience transformative self-care
                            rituals, connecting deeply with your skin's beauty.
                            Let Nectura unleash your skin's radiance in a
                            soulful journey of rejuvenation.
                        </motion.p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 1.5 }} // Animation duration and delay
                            className="py-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }} // Scale animation on hover
                                className="text-white bg-[#ab1649] w-[285px] h-[63px] font-axiforma text-[22px] rounded-sm"
                                style={{
                                    boxShadow:
                                        "0px 3.911px 4.726px 0px rgba(228, 45, 107, 0.04), 0px 18.489px 18.474px 0px rgba(228, 45, 107, 0.05), 0px 48px 58px 0px rgba(228, 45, 107, 0.09)"
                                }}
                            >
                                Explore More
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
                <hr />
                <div className="flex justify-center">
                    <div className="w-1/3 flex justify-center items-center">
                        <motion.div
                            className=""
                            initial={{ opacity: 0, x: -20 }} // Initial opacity and position
                            animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <img
                                src={Cosmetic}
                                alt="Cosmetic with paper backdrops"
                            />
                        </motion.div>
                    </div>
                    <div className="w-1/3 flex flex-col">
                        <motion.div
                            className=""
                            initial={{ opacity: 0, y: 25 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2.3 }}
                        >
                            <p className="pt-5">
                                Our brand story is one of passion, dedication,
                                and unwavering commitment to your beauty and
                                confidence.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -25 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <img src={Image} alt="Girl Makeup" />
                        </motion.div>
                    </div>
                    <div className="w-1/3 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <img
                                src={Hand}
                                alt="Girl Makeup"
                                className="pt-5"
                            />
                        </motion.div>
                        <motion.div
                            className="para"
                            initial={{ opacity: 0, y: 25 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <p className="mt-28">
                                Our mission is simple yet profound: to empower
                                individuals like you to embrace your natural
                                beauty and radiate confidence through healthy,
                                glowing skin.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
