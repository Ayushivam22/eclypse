import Image1 from "../assets/productCard/aux1.jpg";
import Image2 from "../assets/productCard/aux2.jpg";
import Image3 from "../assets/productCard/aux3.jpg";
import ProductCardVideo from "../assets/productCard/main.mp4";

const ProductCard = () => {
    return (
        <div className="w-full">
            <div className="flex p-12 my-32 text-4xl">
                Silhouette No.1- Vermilion
            </div>
            {/* ProductCard */}
            <div className="w-full bg-amber-100 flex items-stretch">
                {/* Left half */}
                <div className="w-1/2">
                    <div className="aspect-[3/4] w-full h-full">
                        <video
                            src={ProductCardVideo}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover rounded-lg"
                        >
                            <source src={ProductCardVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* Right half */}
                <div className="w-1/2 px-4 flex flex-col h-full">
                    <div className="pl-6 py-8 w-full md:w-8/10 lg:w-7/10 text-black">
                        A tailored composition in motion. Cut from structured
                        wool with a sculpted shoulder and softened hem, this
                        piece captures presence without force. Worn here in the
                        stillness of a city in motion.
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
                    {/* Price info  */}
                    <div className="flex  items-baseline  gap-2">
                        <div className="text-black  text-xl md:text-3xl font-medium">
                            ₹ 7,999
                        </div>
                        <div className="  text-gray-500 text-sm">
                            MRP incl. of all taxes
                        </div>
                    </div>
                    {/* Size info */}
                    <div className="flex items-center text-gray-500 text-lg py-4 mt-4">
                        <div>Please select a size</div>
                        <a href="#" className="text-gray-500 hover:underline">
                            <div className=" px-4 text-sm">Size chart</div>
                        </a>
                    </div>
                    {/* Size options */}
                    <div className=" flex flex-wrap gap-4 text-sm">
                        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
                            XS
                        </button>
                        <button className="bg-gray-200 text-black px-6  py-2 rounded hover:bg-gray-300">
                            S
                        </button>
                        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
                            M
                        </button>
                        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
                            L
                        </button>
                        <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">
                            XL
                        </button>
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
