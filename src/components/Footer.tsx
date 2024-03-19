import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container pt-5"
        >
            <div className="flex">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-2/6 flex justify-center"
                >
                    <div>
                        <a
                            href=""
                            className="text-[#E42D6B] font-axiforma text-[30px] font-medium"
                        >
                            NECTURA
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-2/6 flex justify-center"
                >
                    <div className="flex space-x-8 text-[#888]">
                        <a href="##">Product</a>
                        <a href="#">Features</a>
                        <a href="#">Reviews</a>
                        <a href="#">About Us</a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-2/6 flex justify-center"
                >
                    <div className="flex space-x-4">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Footer;
