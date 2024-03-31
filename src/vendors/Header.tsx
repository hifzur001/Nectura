import { useState } from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <nav className="bg-white border-gray-200 px-4  py-2.5 text-black font-axiforma">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <motion.a
                        href="./Header.tsx"
                        className="flex items-center"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="self-center text-xl font-bold font-integral whitespace-nowrap pt-2">
                            SHOP.CO
                        </span>
                    </motion.a>
                    <div className="flex items-center lg:order-2">
                        <motion.a
                            href="#"
                            title="Add To Cart"
                            className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:py-2.5 mr-2  focus:outline-none dark:focus:ring-gray-800 font-axiforma"
                            initial={{ x: -50 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaCartPlus className="w-12 h-5" />
                        </motion.a>
                        <motion.a
                            href="#"
                            title="Login"
                            className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm  lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 font-axiforma"
                            initial={{ x: -50 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaUser className="w-12 h-5" />
                        </motion.a>
                        <motion.button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600 font-axiforma"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                            initial={{ x: -50 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </motion.button>
                    </div>
                    <motion.div
                        className="hidden lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <motion.li
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 font-axiforma"
                                    aria-current="page"
                                >
                                    Shop
                                </a>
                                {isDropdownOpen && (
                                    <div className="dropdown-content flex flex-col absolute top-24">
                                        <a href="#">Men's</a>
                                        <a href="#" className="py-2">
                                            Women's
                                        </a>
                                        <a href="#">Kids</a>
                                        <a href="#" className="py-2">
                                            Shoes
                                        </a>
                                        <a href="#">Accessories</a>
                                        <a href="#" className="py-2">
                                            Clothing
                                        </a>
                                        <a href="#">Electronics</a>
                                        <a href="#" className="py-2">
                                            Home & Garden
                                        </a>
                                    </div>
                                )}
                            </motion.li>
                            <motion.li
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:   lg:dark:hover:bg-transparent dark:border-gray-700 font-axiforma"
                                >
                                    On Sale
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:   lg:dark:hover:bg-transparent dark:border-gray-700 font-axiforma"
                                >
                                    New Arrival
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:   lg:dark:hover:bg-transparent dark:border-gray-700 font-axiforma"
                                >
                                    Brand
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:   lg:dark:hover:bg-transparent dark:border-gray-700 font-axiforma"
                                >
                                    About Us
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:   lg:dark:hover:bg-transparent dark:border-gray-700 font-axiforma"
                                >
                                    Contact Us
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
