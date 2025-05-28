import { useState } from "react";
import image1 from "../assets/testimonialPeople/1.jpg";
import image2 from "../assets/testimonialPeople/2.jpg";
import image3 from "../assets/testimonialPeople/3.jpg";
import icon from "../assets/testimonialPeople/icon.png";

const Testimonials = () => {
    const [openIdx, setOpenIdx] = useState<number>(0);
    const Testimonials = [
        {
            id: 1,
            text: "This product changed my life!",
            author: "John Doe",
            image: image1,
        },
        {
            id: 2,
            text: "Absolutely fantastic! Highly recommend.",
            author: "Jane Smith",
            image: image2,
        },
        {
            id: 3,
            text: "Will buy again!",
            author: "Sam Wilson",
            image: image3,
        },
    ];
    return (
        <div className="w-full">
            <div className=" text-xl my-6 text-gray-400 w-full tracking-widest">
                Our Customers
            </div>
            {Testimonials.map((testimonial, idx) => {
                const isActive = idx === openIdx;
                return (
                    <div
                        key={testimonial.id}
                        className="transition-all duration-300 origin-center w-full cursor-pointer"
                        onClick={() => setOpenIdx(idx)}
                    >
                        <div className=" flex justify-between items-stretch">
                            <div className={`transform-all flex items-center duration-300 text-3xl md:text-5xl ${isActive ? "opacity-100" : "opacity-0"}`}>
                                " {testimonial.text} "
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="w-6 flex items-center justify-center">
                                    <img
                                        src={icon}
                                        alt="icon"
                                        className={`${isActive?"inline-block":"hidden"} w-full h-full object-contain rotate-270`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={`aspect-square h-24 w-24 overflow-hidden rounded-full flex-shrink-0 transition-all duration-300
                        ${isActive ? "scale-100 opacity-100" : "scale-70 opacity-50"}`}>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className={`text-lg transform-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>- {testimonial.author}</p>
                    </div>
                );
            })}
            {/* horizontal line */}
            <div className="h-[1px] bg-gray-700 my-12"></div>
        </div>
    );
};

export default Testimonials;
