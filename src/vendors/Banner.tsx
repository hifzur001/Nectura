import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Right from "../assets/img/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-curly-hair-posing-studio-with-red-bright-natural-lips-silver-dress.jpg";

// Define the floating animation
const floatingAnimation = keyframes`
    0% {
        transform: translate(0, 0px);
    }
    50% {
        transform: translate(30px,0);
    }
    100% {
        transform: translate(0, -0px);
    }
`;

// Styled component for the floating image
const FloatingImage = styled.img`
    &.floating {
        animation: ${floatingAnimation} 4s ease-in-out infinite;
    }
`;

const Banner = () => {
    const [brandsCount, setBrandsCount] = useState(0);
    const [productsCount, setProductsCount] = useState(0);
    const [customersCount, setCustomersCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment counts until reaching the desired values
            if (brandsCount < 200) {
                setBrandsCount(brandsCount + 1);
            }
            if (productsCount < 2000) {
                setProductsCount(productsCount + 10);
            }
            if (customersCount < 30000) {
                setCustomersCount(customersCount + 100);
            }
        }, 20); // Adjust the interval for smoothness

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(interval);
    }, [brandsCount, productsCount, customersCount]);

    return (
        <motion.div
            className="banner-start flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.span
                        className="text-6xl font-axiforma font-bold text-[#111]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        FIND CLOTHES
                    </motion.span>
                    <motion.span
                        className="text-6xl font-axiforma font-bold text-[#111]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        THAT MATCHES
                    </motion.span>
                    <motion.span
                        className="text-6xl font-axiforma font-bold text-[#111]"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                    >
                        YOUR STYLE
                    </motion.span>
                    <motion.div
                        className="py-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <motion.button
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="w-[210px] h-[52px] rounded-full bg-[#222] text-white font-satoshi"
                        >
                            SHOP NOW
                        </motion.button>
                    </motion.div>
                    <motion.div
                        className="flex space-x-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <div className="flex flex-col border-r-2 p-5">
                            <motion.h3
                                className="font-satoshi text-4xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                            >
                                {brandsCount}+
                            </motion.h3>
                            <p className="text-black text-opacity-60">
                                International Brands
                            </p>
                        </div>
                        <div className="flex flex-col border-r-2 p-5">
                            <motion.h3
                                className="font-satoshi text-4xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                            >
                                {productsCount}+
                            </motion.h3>
                            <p className="text-black text-opacity-60">
                                High Quality Products
                            </p>
                        </div>
                        <div className="flex flex-col p-5">
                            <motion.h3
                                className="font-satoshi text-4xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8, duration: 0.5 }}
                            >
                                {customersCount}+
                            </motion.h3>
                            <p className="text-black text-opacity-60">
                                Happy Customers
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className=""
                    style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: "-1"
                    }}
                >
                    <FloatingImage
                        src={Right}
                        alt=""
                        className=" object-cover floating w-[68%] " // Apply the floating class
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Banner;
