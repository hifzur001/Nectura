import { useState } from "react";
import { motion } from "framer-motion";
import { FaApple, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);

    const handleClose = () => {
        setShowLogin(false);
    };

    return (
        <>
            {showLogin && (
                <div className="flex justify-center items-center h-screen">
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg"
                        style={{
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <div className="flex justify-end">
                            <button
                                className="focus:outline-none"
                                aria-label="Close login form"
                                onClick={handleClose}
                            >
                                <FaTimes className="text-gray-500" />
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h2 className="text-3xl font-medium font-axiforma text-center mb-4">
                                Login
                            </h2>
                            <motion.form
                                initial={{ opacity: 1, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <div className="mb-4">
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
                                </div>
                                <div className="mb-4">
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
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-[#10800a] text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                >
                                    Login
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
                                            className="bg-transparent border text-black py-2 px-4 rounded-full mr-2 w-full flex items-center justify-center"
                                        >
                                            <FcGoogle className="h-6 w-6 mr-2" />
                                            Continue with Google
                                        </motion.button>
                                    </div>
                                    <div className="mb-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.75 }}
                                            className="bg-black text-white py-2 px-4 rounded-full w-full flex items-center justify-center"
                                        >
                                            <FaApple className="h-6 w-6 mr-2" />
                                            Continue with Apple
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Login;
