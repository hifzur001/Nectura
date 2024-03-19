import Aging from "../img/anti-aging.png";
import Agings from "../img/anti-aging.png";
import Hydra from "../img/hydrates.png";
import Tone from "../img/skin-tone.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Shop = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        });
    }, [controls]);

    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={controls}
            >
                <h2 className="text-7xl font-gilroy">
                    Shop Our <span className="text-[#E42D6B]">Products</span>
                </h2>
                <p className="pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                </p>
                <p>ut labore et dolore magna aliqua. Ut enim</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
                <div className="flex gap-x-24 mt-8 justify-start items-start flex-wrap">
                    <a
                        href="#"
                        className="inline-block text-[#848484] py-2 px-4"
                    >
                        Popular
                    </a>
                    <a
                        href="#"
                        className="inline-block text-[#848484] py-2 px-4"
                    >
                        Skin Care
                    </a>
                    <a
                        href="#"
                        className="inline-block text-[#848484] py-2 px-4"
                    >
                        Serum
                    </a>
                    <a
                        href="#"
                        className="inline-block text-[#E42D6B] py-2 px-4"
                    >
                        Exfoliator
                    </a>
                    <a
                        href="#"
                        className="inline-block text-[#848484] py-2 px-4"
                    >
                        Toner
                    </a>
                </div>
            </motion.div>
            <motion.div
                className="py-8"
                initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center card w-[275px] rounded-[100px] h-[400px] bg-[#f0f8fc]">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <img
                                src={Aging}
                                alt="Aging"
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center card w-[275px] rounded-[100px] h-[400px] bg-[#f0f8fc]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} // Initial opacity and position
                            animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <img
                                src={Hydra}
                                alt="Hydra"
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center card w-[275px] rounded-[100px] h-[400px] bg-[#f0f8fc]">
                        <motion.div
                            initial={{ opacity: 0, y: -25 }} // Initial opacity and position
                            animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <img
                                src={Agings}
                                alt="Agings"
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center card w-[275px] rounded-[100px] h-[400px] bg-[#f0f8fc]">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }} // Initial opacity and position
                            animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                            transition={{ duration: 1, delay: 2.5 }}
                        >
                            <img src={Tone} alt="Tone" className="img-fluid" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="flex justify-between items-center">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -15 }} // Initial opacity and position
                    animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="flex flex-col">
                        <h3 className="font-axiforma text-[25px] text-[#636363]">
                            Anti Agings Serums
                        </h3>
                        <p className="text-[#E42D6B] py-2">$200.00 $USD</p>
                    </div>
                    <motion.button className="w-[200px] my-2 h-[50px] bg-[#e42d6b] text-white text-[22px] font-gilroy">
                        Shop Now
                    </motion.button>
                </motion.div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                    animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <div className="flex flex-col">
                        <h3 className="font-axiforma text-[25px] text-[#636363]">
                            Hydration Booster
                        </h3>
                        <p className="text-[#E42D6B] py-2">$200.00 $USD</p>
                    </div>
                    <motion.button className="w-[200px] my-2 h-[50px] bg-[#e42d6b] text-white text-[22px] font-gilroy">
                        Shop Now
                    </motion.button>
                </motion.div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 25 }} // Initial opacity and position
                    animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <div className="flex flex-col">
                        <h3 className="font-axiforma text-[25px] text-[#636363]">
                            Vitamin Infused
                        </h3>
                        <p className="text-[#E42D6B] py-2">$200.00 $USD</p>
                    </div>
                    <motion.button className="w-[200px] my-2 h-[50px] bg-[#e42d6b] text-white text-[22px] font-gilroy">
                        Shop Now
                    </motion.button>
                </motion.div>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: 25 }} // Initial opacity and position
                    animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1.8 }}
                >
                    <div className="flex flex-col">
                        <h3 className="font-axiforma text-[25px] text-[#636363]">
                            Skin Toner
                        </h3>
                        <p className="text-[#E42D6B] py-2">$200.00 $USD</p>
                    </div>
                    <motion.button className="w-[200px] my-2 h-[50px] bg-[#e42d6b] text-white text-[22px] font-gilroy">
                        Shop Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Shop;
