import styled from "styled-components";
import TShirt from "../assets/img/t-shirt.png";
import Jeans from "../assets/img/jeans.png";
import Checked from "../assets/img/checked-shirt.png";
import Orange from "../assets/img/orange-t-shirt.png";

const StyledCard = styled.div`
    width: calc(25% - 20px);
    margin: 10px;
    text-align: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h3 {
        margin-top: 10px;
        font-size: 1.2rem;
        color: #333333;
    }

    p {
        margin: 5px 0;
        color: #666666;
    }
`;

const Arrivals = () => {
    const arrivalsData = [
        {
            id: "1",
            name: "Product 1",
            image: TShirt, // Using imported image
            price: "$10.99",
            rating: "4.5"
        },
        {
            id: "2",
            name: "Product 2",
            image: Jeans, // Using imported image
            price: "$15.99",
            rating: "4.2"
        },
        {
            id: "3",
            name: "Product 3",
            image: Checked, // Using imported image
            price: "$20.49",
            rating: "4.8"
        },
        {
            id: "4",
            name: "Product 4",
            image: Orange, // Using imported image
            price: "$8.75",
            rating: "4.0"
        }
    ];

    return (
        <div className="flex flex-wrap justify-around">
            {arrivalsData.map((product) => (
                <StyledCard key={product.id}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto"
                    />
                    <h3>{product.name}</h3>
                    <p className="text-sm">Price: {product.price}</p>
                    <p className="text-sm">Rating: {product.rating}</p>
                </StyledCard>
            ))}
        </div>
    );
};

export default Arrivals;
