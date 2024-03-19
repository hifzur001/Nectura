import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col py-8"
            >
                <span className="text-[#636363] text-7xl text-center capitalize font-axiforma">
                    How can <span className="text-[#e42d6b]">we</span>
                </span>
                <span className="text-7xl text-center capitalize font-axiforma">
                    <span className="text-[#e42d6b]">Keep</span> in touch
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex border border-[#cdcdcd] h-[150px] rounded-md"
            >
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="w-1/2 justify-center flex items-center"
                >
                    <p className="text-2xl text-[#808080] text-center">
                        Provide contact information and support details for any
                        inquiries or assistance
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="w-1/2 flex justify-center items-center"
                >
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="border border-[#e42d6a42] border-r-white bg-[#fff8fa] h-12 p-4"
                    />
                    <input
                        type="button"
                        value="Submit"
                        className="bg-[#e42d6b] h-12 w-24 text-center flex justify-center text-white font-axiforma"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
