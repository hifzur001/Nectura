import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
import Habibi from "../img/habibi.png";
import Male from "../img/male-memoji.png";
import Female from "../img/female-memoji.png";

const TestimonialCard = ({ text, author, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-[#f1f2f2] rounded-md"
        >
            <div className="flex justify-center">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    src={image}
                    alt={author}
                    className="rounded-full w-36 h-36 object-cover"
                />
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-2"
            >
                {text}
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-gray-500 mt-2"
            >
                {author}
            </motion.p>
            <div className="flex space-x-1">
                <CiStar className="text-[#E42D6B]" />
                <CiStar className="text-[#E42D6B]" />
                <CiStar className="text-[#E42D6B]" />
                <CiStar className="text-[#E42D6B]" />
                <CiStar className="text-[#E42D6B]" />
            </div>
        </motion.div>
    );
};

const Testimonial = () => {
    const testimonial = [
        {
            text: "Fusce sed pharetra nunc. Donec vel consectetur lorem. Vestibulum sagittis elit vitae libero vehicula, sit amet faucibus ex commodo.",
            author: "John Doe",
            image: Habibi
        },
        {
            text: "Fusce sed pharetra nunc. Donec vel consectetur lorem. Vestibulum sagittis elit vitae libero vehicula, sit amet faucibus ex commodo.",
            author: "Jane Doe",
            image: Female
        },
        {
            text: "Fusce sed pharetra nunc. Donec vel consectetur lorem. Vestibulum sagittis elit vitae libero vehicula, sit amet faucibus ex commodo.",
            author: "Alice Smith",
            image: Male
        },
        {
            text: "Fusce sed pharetra nunc. Donec vel consectetur lorem. Vestibulum sagittis elit vitae libero vehicula, sit amet faucibus ex commodo.",
            author: "Alice Smith",
            image: Habibi
        }
    ];

    return (
        <div className="container">
            <h2 className="text-[#636363] text-7xl font-axiforma text-center py-8">
                About Our <span className="text-[#E42D6B]">Clients</span>{" "}
            </h2>
            <p className="text-center text-[#888] pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                soluta eos nesciunt accusamus veniam unde vitae numquam ullam
                perferendis! Fugiat ducimus itaque obcaecati optio neque maiores
                ad, cupiditate rerum dolorem, doloremque eos odio? Quaerat, id
                saepe est commodi beatae dolor omnis. Quisquam, unde aliquid.
                Quaerat consequatur omnis laborum dolorem vel!
            </p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4"
            >
                <div className="flex justify-between">
                    {testimonial.map((item, i) => (
                        <div key={i} className="w-80">
                            <TestimonialCard {...item} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonial;
