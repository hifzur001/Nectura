import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skin from "../img/skin-tone.png";
import Aging from "../img/anti-aging.png";
import Hydrates from "../img/hydrates.png";

const Products = () => {
    const [offeredProducts, setOfferedProducts] = useState([
        {
            id: 1,
            name: "Hydrating Glow Serum",
            price: "$200",
            image: Skin,
            description: "Vitamin A",
            tag: "skin"
        },
        {
            id: 2,
            name: "Age-Defying Elixir",
            price: "$425",
            image: Aging,
            description: "Vitamin C & D",
            tag: "aging"
        },
        {
            id: 3,
            name: "Tone-Perfecting Essence",
            price: "$599",
            image: Hydrates,
            description: "Hyaluronic Acid",
            tag: "hydrates"
        },
        {
            id: 4,
            name: "Bright Eyes Serum",
            price: "$349",
            image: Skin,
            description: "Yuzu Lemon & Orange",
            tag: "skin"
        },
        {
            id: 5,
            name: "Radiance Booster Serum",
            price: "$99",
            image: Aging,
            description: "Vitamin C",
            tag: "aging"
        }
    ]);

    useEffect(() => {
        // Trigger animation when the component mounts
        setOfferedProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product, index) => ({
                ...product,
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: (index + 1) * 0.5 } // Updated delay
            }));

            // Swap consecutive products
            for (let i = 0; i < updatedProducts.length - 1; i++) {
                if (updatedProducts[i].id === 5) {
                    const temp = updatedProducts[i];
                    updatedProducts[i] = updatedProducts[i + 1];
                    updatedProducts[i + 1] = temp;
                    break;
                }
            }

            return updatedProducts;
        });
    }, []);

    return (
        <div className="flex flex-wrap my-4">
            <AnimatePresence>
                {offeredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        className="w-full sm:w-1/5 px-3 mb-4"
                        initial={{ opacity: 0, y: -20 }} // Updated initial properties
                        animate={{ opacity: 1, y: 0 }} // Updated animate properties
                        exit={{ opacity: 0, y: -20 }} // Updated exit properties
                        transition={product}
                    >
                        <div className="card flex flex-col h-full p-4 bg-white border rounded shadow">
                            <div className="image-container">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mb-4 transform transition duration-500 
                                    hover:scale-110"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <motion.h2
                                className="text-lg py-2 text-[#1E1E1E]"
                                initial={{ opacity: 0, y: -20 }} // Updated initial properties
                                animate={{ opacity: 1, y: 0 }} // Updated animate properties
                                transition={{
                                    duration: 0.5,
                                    delay: 1 + (product.id - 1) * 0.5
                                }} // Updated delay
                            >
                                {product.name}
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 text-xl"
                                initial={{ opacity: 0, x: -20 }} // Updated initial properties
                                animate={{ opacity: 1, x: 0 }} // Updated animate properties
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5 + (product.id - 1) * 0.5
                                }} // Updated delay
                            >
                                {product.price}
                            </motion.p>
                            <motion.p
                                className="text-gray-600 py-2 text-xl"
                                initial={{ opacity: 0, y: -20 }} // Updated initial properties
                                animate={{ opacity: 1, y: 0 }} // Updated animate properties
                                transition={{
                                    duration: 0.5,
                                    delay: 2 + (product.id - 1) * 0.5
                                }} // Updated delay
                            >
                                {product.description}
                            </motion.p>
                            <motion.button
                                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-4 rounded mt-auto hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-400 transition duration-300 ease-in-out"
                                initial={{ opacity: 0, x: -20 }} // Updated initial properties
                                animate={{ opacity: 1, x: 0 }} // Updated animate properties
                                transition={{
                                    duration: 0.5,
                                    delay: 2.5 + (product.id - 1) * 0.5
                                }} // Updated delay
                            >
                                Add to Cart
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Products;
