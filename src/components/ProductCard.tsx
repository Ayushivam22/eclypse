import Image1 from "../assets/productCard/aux1.jpg";
import Image2 from "../assets/productCard/aux2.jpg";
import Image3 from "../assets/productCard/aux3.jpg";
import data from "../../dummyData.json"

const ProductCard = () => {
    return (
        <div className="w-full">
            <div className="flex p-12 my-32 text-4xl">
                {data.name}
            </div>
            {/* ProductCard */}
            <div className="w-full bg-white flex items-stretch">
                {/* Left half */}
                <div className="w-1/2">
                    <div className="aspect-[3/4] w-full h-full">
                        <video
                            src={data.video}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover rounded-lg"
                        >
                            <source src={data.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* Right half */}
                <div className="w-1/2 px-4 flex flex-col h-full">
                    <div className="pl-6 py-8 w-full md:w-8/10 lg:w-7/10 text-black">
                        {data.description}
                    </div>
                    {/* 3 images */}
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src={Image1}
                            alt="Image 1"
                            className="w-full h-auto object-cover"
                        />
                        <img
                            src={Image2}
                            alt="Image 2"
                            className="w-full h-auto object-cover"
                        />
                        <img
                            src={Image3}
                            alt="Image 3"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* horizontal line */}
                    <div className="py-16">
                        <div className="bg-gray-300 h-[1px] w-full"></div>
                    </div>
                    {/* Price info */}
                    <div className="flex items-baseline gap-2 mt-8">
                        <div className="text-black text-xl md:text-3xl font-medium">
                            ₹ {data.price}
                        </div>
                        <div className="text-gray-500 text-sm">
                            MRP incl. of all taxes
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm mt-4">
                        {data.sizes.map((size, idx) => (
                            <button
                                key={idx}
                                className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    {/* horizontal line */}
                    <div className="py-16">
                        <div className="bg-gray-300 h-[1px] w-full"></div>
                    </div>
                    {/* Add to cart button */}
                    <div className="flex gap-2 flex-col md:flex-row w-full my-4">
                        <button className="bg-white text-black px-4 py-3 rounded-xl hover:bg-gray-300 transition duration-300 border border-gray-400 w-full flex-1 md:basis-1/3">
                            Add to Cart
                        </button>
                        <button className="bg-black text-white border border-gray-300 px-4 py-3 rounded-xl  hover:bg-gray-800 transition duration-300 w-full flex-1 md:basis-2/3">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
