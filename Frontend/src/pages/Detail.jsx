import Button from "../components/Button";

const Detail = () => {
    const images = [
        'https://www.mystic-runner.com/wp-content/uploads/2023/08/adidas-banner.jpg',
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/34628741-0def-4bd5-9193-0bd7a80c8f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/34628741-0def-4bd5-9193-0bd7a80c8f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/34628741-0def-4bd5-9193-0bd7a80c8f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/34628741-0def-4bd5-9193-0bd7a80c8f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ];
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-4 p-10 h-[450px]">
                    <img className="w-1/2 h-full object-cover" src={images[0]} alt="Product" />
                    <div className="w-1/2 grid grid-rows-2 gap-4">
                        <div className="flex flex-row gap-4">
                            {images.slice(1, 3).map((img, index) => (
                                <img key={index} className="w-1/2 h-full object-cover" src={img} alt="Product" />
                            ))}
                        </div>
                        <div className="flex flex-row gap-4">
                            {images.slice(3).map((img, index) => (
                                <img key={index} className="w-1/2 h-full object-cover" src={img} alt="Product" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center w-full p-10 gap-10">
                <div className="sol w-1/2">
                    <h1 className="text-2xl font-bold mt-4">Product Name</h1>
                    <p className="text-lg mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Proin in tempus urna.</p>
                </div>
                <div className="sag w-1/2 flex flex-col items-center justify-center gap-4 p-4 border border-gray-300 rounded shadow ">
                    <div className="mt-2">
                        <div className="text-xl font-bold">$55</div>
                        <span className="text-yellow-400">★★★★☆ (4.5 stars)</span>
                        <span className="text-sm">(10 reviews)</span>
                    </div>
                    <div className="mt-4">
                        <label className="mr-2">Variant:</label>
                        <select className="border p-2">
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option disabled>43</option>
                            <option>44</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="mr-2">Quantity:</label>
                        <input type="number" min="1" defaultValue="1" className="border p-2 w-16" />
                    </div>
                    <div className="mt-4 flex flex-col w-full">
                        <Button text={"Add To Cart"} right full onClick={() => { }} />
                        <Button text={"Buy Now"} right full onClick={() => { }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;