import { motion } from "framer-motion";
import Brand from "../assets/img/brands.jpg";

const Brands = () => {
    return (
        <>
            <div className="bg-black p-6 flex justify-center">
                <motion.img
                    src={Brand}
                    alt="Brands"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                />
            </div>
        </>
    );
};

export default Brands;
