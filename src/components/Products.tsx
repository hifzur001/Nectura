import { useState } from 'react';
import Skin from '../img/skin-tone.png';
import Aging from '../img/anti-aging.png';
import Hydrates from '../img/hydrates.png';

const Products = () => {
    const [OfferedProducts] = useState([
        {
            id: 1,
            name: 'Hydrates and Nourishes',
            price: '$200',
            image: Skin,
            description: 'Vitamin A',
        },
        {
            id: 2,
            name: 'Anti-Aging Wrinkle Free',
            price: '$425',
            image: Aging,
            description: 'Vitamin C & D',
        },
        {
            id: 3,
            name: 'Evens Out Skin Tone',
            price: '$599',
            image: Hydrates,
            description: 'Vitamin E',
        },
    ]);

    return (
        <div className='flex flex-wrap my-4'>
            {OfferedProducts.map((product) => (
                <div key={product.id} className='w-full sm:w-1/3 px-3 mb-4'>
                    <div className='card flex flex-col h-full p-4 bg-white border rounded shadow'>
                        <div className='image-container'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='w-full h-full object-cover mb-4 transform transition duration-500 
                            hover:scale-110'
                            />
                        </div>
                        <h2 className='text-lg font-semibold mb-2 text-[#1E1E1E]'>
                            {product.name}
                        </h2>
                        <p className='text-gray-600 py-3 text-xl font-bold'>
                            {product.price}
                        </p>
                        <p className='text-gray-600 py-3 text-xl font-bold'>
                            {product.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
