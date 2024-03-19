import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    return (
        <nav className="container">
            <ul className="flex justify-between items-center space-x-4 px-4 py-6">
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0 }}
                >
                    <CiMenuFries size={22} />
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <a href="" className="text-[#444]">
                        Product
                    </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a href="" className="text-[#444]">
                        Feature
                    </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 1.5 }}
                >
                    <a
                        href=""
                        className="text-[#E42D6B] font-axiforma text-[30px] font-medium"
                    >
                        NECTURA
                    </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, delay: 2 }}
                >
                    <a href="" className="text-[#444]">
                        Review
                    </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.3, delay: 2.5 }}
                >
                    <a href="" className="text-[#444]">
                        About Us
                    </a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.8, delay: 3 }}
                >
                    <HiOutlineShoppingBag size={22} />
                </motion.li>
            </ul>
        </nav>
    );
};

export default Navbar;
