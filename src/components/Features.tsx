const Features = () => {
    return (
        <div className="container">
            <div className="flex justify-center items-center">
                <div className="w-1/2 flex justify-start items-center">
                    <div style={{ lineHeight: "4.15rem", margin: "0 5em" }}>
                        <p className="text-6xl my-6">
                            Our <span className="text-pink-600">Products</span>
                        </p>
                        <p className="text-6xl my-6">Features</p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="flex flex-col">
                        <span className="text-gray-600">
                            Revitalize your skin with our herbal-packed serum.
                            Hydrate, soften,
                        </span>
                        <span className="text-gray-600">
                            and diminish fine lines. Unlock youthful radiance
                            naturally.
                        </span>
                        <span className="text-gray-600">
                            Experience suppleness and vitality with
                        </span>
                        <span className="text-gray-600">each application.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
