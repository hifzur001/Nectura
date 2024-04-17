import { motion } from "framer-motion";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Announcement = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleClose = () => {
        setShowAnnouncement(false);
    };

    const handleSignUpClick = () => {
        setShowLoginForm(true);
    };

    const handleLoginClose = () => {
        setShowLoginForm(false);
    };

    return (
        <>
            {showAnnouncement && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-gray-900 text-white text-center py-3"
                >
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="font-axiforma"
                    >
                        Sign up and get 20% off your first order.{" "}
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#"
                            className="text-white underline hover:text-blue-400"
                            onClick={handleSignUpClick}
                        >
                            Sign Up
                        </motion.a>
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-0 right-0 mr-4 mt-3 text-white hover:text-gray-400 focus:outline-none"
                        onClick={handleClose}
                        aria-label="Close announcement"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.586 5.586a2 2 0 0 1 2.828 2.828L12.828 12l4.586 4.586a2 2 0 1 1-2.828 2.828L10 14.828l-4.586 4.586a2 2 0 1 1-2.828-2.828L7.172 12 2.586 7.414a2 2 0 1 1 2.828-2.828L10 9.172l4.586-4.586z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.button>
                </motion.div>
            )}

            {showLoginForm && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80"
                >
                    <div className="w-full flex justify-center">
                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg"
                            style={{
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 1, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h2 className="text-3xl font-medium font-axiforma text-center mb-4">
                                    Sign Up
                                </h2>
                                <motion.form
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4"
                                    >
                                        <label
                                            htmlFor="email"
                                            className="block mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4"
                                    >
                                        <label
                                            htmlFor="password"
                                            className="block mb-2"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </motion.div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full bg-[#10800a] text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        Sign Up
                                    </motion.button>
                                    <div className="flex justify-end">
                                        <a
                                            href="#"
                                            className="block mt-4 text-gray-500 hover:text-gray-700"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="mt-4">
                                        <div className="mb-4">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.85 }}
                                                className="bg-transparent border-2 text-black py-2 px-4 rounded-full mr-2 w-full flex items-center justify-center"
                                            >
                                                <FcGoogle className="h-6 w-6 mr-2" />
                                                Continue with Google
                                            </motion.button>
                                        </div>
                                        <div className="mb-4">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.75 }}
                                                initial={{ scale: 1 }} // Initial scale set to 1
                                                className="bg-black text-white py-2 px-4 rounded-full w-full flex items-center justify-center"
                                                transition={{
                                                    ease: "easeInOut",
                                                    duration: 0.2
                                                }} // Add smooth transition
                                            >
                                                <FaApple className="h-6 w-6 mr-2" />
                                                Continue with Apple
                                            </motion.button>
                                        </div>
                                        <motion.button
                                            initial={{ opacity: 1, x: 0 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5
                                            }}
                                            className="bg-[#0e544b] text-white py-2 px-4 rounded-full w-full flex items-center justify-center"
                                            onClick={handleLoginClose}
                                        >
                                            Close
                                        </motion.button>
                                    </div>
                                </motion.form>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Announcement;
