import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Nectura from '../img/nectura.png';
import Girl from '../img/girl.png';
import Rotate from '../img/rotate-nectura.png';
const Hero = () => {
    const videoId = 'Hwj4fmCCkn0';

    return (
        <div className='container flex justify-start items-stretch'>
            <div className='w-1/3 flex flex-col justify-start items-center'>
                <div className=''>
                    {/* Wrap iframe with motion.div */}
                    <motion.div
                        initial={{ opacity: 0 }} // Initial opacity
                        animate={{ opacity: 1 }} // Animation for opacity
                        transition={{ duration: 1 }} // Animation duration
                    >
                        <iframe
                            width='300'
                            height='150'
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                            title='YouTube Video'
                            allowFullScreen
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        ></iframe>
                    </motion.div>
                </div>
                <div className=''>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }} // Initial opacity and position
                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                        transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
                        className='font-gilroy text-[#E42D6B] text-[107px]'
                    >
                        Serum
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                        transition={{ duration: 1, delay: 1 }} // Animation duration and delay
                        className='flex flex-col'
                    >
                        <span>Welcome to the secret to ageless, radiant skin.</span>
                        <span>Introducing Nectura Face Serum - your</span>
                        <span>key to unlocking a youthful and </span>
                        <span>luminous complexion.</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                        transition={{ duration: 1, delay: 1.5 }} // Animation duration and delay
                        className='py-4'
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }} // Scale animation on hover
                            className='text-white bg-[#ab1649] w-[285px] h-[63px] font-axiforma text-[22px] rounded-sm'
                        >
                            Explore More
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                        transition={{ duration: 1, delay: 2 }} // Animation duration and delay
                        className='flex flex-1 space-x-6 py-4'
                    >
                        <div className='flex flex-1 space-x-6 py-4'>
                            <div className='box w-[100px] h-[80px] border-2 border-solid border-pink-300'>
                                <div className='flex flex-col p-3 text-center'>
                                    <span>100%</span>
                                    <span className='text-[#E42D6B]'>Organic</span>
                                </div>
                            </div>
                            <div className='box w-[100px] h-[80px] border-2 border-solid border-pink-300'>
                                <div className='flex flex-col p-3 text-center'>
                                    <span>Clinical </span>
                                    <span className='text-[#E42D6B]'>Approved</span>
                                </div>
                            </div>
                            <div className='box w-[100px] h-[80px] border-2 border-solid border-pink-300'>
                                <div className='flex flex-col p-3 text-center'>
                                    <span>Herbal</span>
                                    <span className='text-[#E42D6B]'>Products</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='w-1/3 flex justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Initial opacity and position
                    animate={{ opacity: 1, x: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1 }} // Animation duration and delay
                >
                    <motion.div
                        style={{ display: 'inline-block' }}
                        initial={{ y: 0 }}
                        animate={{
                            y: [-10, 10, -10, 10, 0],
                            transition: { duration: 0.5 },
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                        <img
                            src={Nectura}
                            alt=''
                            style={{
                                transform: 'scale(1.7)',
                                margin: '0 -120px',
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-1/3 flex justify-center items-stretch'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }} // Initial opacity and position
                    animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                    transition={{ duration: 1, delay: 1 }} // Animation duration and delay
                >
                    <div>
                        <div className='circle justify-center flex items-center m-auto bg-[#F9BFD2] w-[96px] h-[96px] rounded-full relative p-1'>
                            <img
                                src={Girl}
                                alt=''
                                className='absolute inset-0 w-full h-full rounded-full object-cover'
                                style={{ padding: '5px', top: '5px' }}
                            />
                        </div>
                        <div className='flex flex-col text-center py-5'>
                            <span>Nourishes and Hydrates Your </span>
                            <span>Skin Reduces Fine Lines</span>
                        </div>
                        <div className='relative'>
                            <motion.div
                                initial={{ opacity: 0 }} // Initial opacity
                                animate={{ opacity: 1 }} // Animation for opacity
                                transition={{ duration: 1 }} // Animation duration
                                className='absolute w-[210px] h-[295px] bg-[#2B2835]'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} // Initial opacity
                                animate={{ opacity: 1 }} // Animation for opacity
                                transition={{ duration: 1 }} // Animation duration
                                className='absolute w-[210px] h-[295px] bg-[#2b2835] left-7 top-7 blur-sm'
                            ></motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} // Initial opacity
                                animate={{ opacity: 1 }} // Animation for opacity
                                transition={{ duration: 1 }} // Animation duration
                                className='absolute w-[210px] h-[295px] bg-[#E42D6B] left-5 top-5'
                            >
                                <div className='flex flex-col justify-center items-center h-full'>
                                    <motion.h3
                                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                                        transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
                                        className='text-center font-gilroy text-[18px] font-bold text-white py-3'
                                    >
                                        Our Essential
                                    </motion.h3>
                                    <div className='relative flex justify-center'>
                                        <motion.img
                                            src={Rotate}
                                            alt=''
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                        />
                                    </div>
                                    <motion.h2
                                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                                        transition={{ duration: 1, delay: 1 }} // Animation duration and delay
                                        className='text-white font-axiforma text-3xl absolute font-semibold bottom-24'
                                    >
                                        NECTURA
                                    </motion.h2>
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }} // Initial opacity and position
                                        animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                                        transition={{ duration: 1, delay: 1.5 }} // Animation duration and delay
                                        className='text-center'
                                    >
                                        <motion.p
                                            initial={{ opacity: 0 }} // Initial opacity
                                            animate={{ opacity: 1 }} // Animation for opacity
                                            transition={{ duration: 1 }} // Animation duration
                                            className='font-gilroy text-[18px] text-white font-bold'
                                        >
                                            SUN SET
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0 }} // Initial opacity
                                            animate={{ opacity: 1 }} // Animation for opacity
                                            transition={{ duration: 1 }} // Animation duration
                                            className='font-gilroy text-[18px] text-white font-bold'
                                        >
                                            FACE SERUM
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='py-5'>
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }} // Initial opacity and position
                                animate={{ opacity: 1, y: 0 }} // Animation for opacity and position
                                transition={{ duration: 1, delay: 2 }} // Animation duration and delay
                                className='text-[#E42D6B] text-8xl absolute bottom-16 font-axiforma'
                            >
                                $14.99
                            </motion.h2>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
