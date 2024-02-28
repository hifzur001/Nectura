import { CiMenuFries } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Navbar = () => {
    return (
        <nav className='container'>
            <ul className='flex justify-between items-center space-x-4 px-4 py-6'>
                <li>
                    <CiMenuFries size={22} />
                </li>
                <li>
                    <a href='' className='text-[#444]'>
                        Product
                    </a>
                </li>
                <li>
                    <a href='' className='text-[#444]'>
                        Feature
                    </a>
                </li>
                <li>
                    <a
                        href=''
                        className='text-[#E42D6B] font-axiforma text-[30px] font-medium'
                    >
                        NECTURA
                    </a>
                </li>
                <li>
                    <a href='' className='text-[#444]'>
                        Review
                    </a>
                </li>
                <li>
                    <a href='' className='text-[#444]'>
                        About Us
                    </a>
                </li>
                <li>
                    <HiOutlineShoppingBag size={22} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
