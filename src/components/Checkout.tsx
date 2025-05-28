import  { useState } from "react";
import Header from "./Header";
import leftArrow from "../assets/icons/left_arrow.png";
const navItems = [
    { label: "About Us" },
    { label: "Waitlist" },
    { label: "Cart" },
];

const Checkout = () => {
    const [activeIdx, setActiveIdx] = useState<number>(0);

    const [orderSummary] = useState([
        { name: "Items", price: 7999 },
        { name: "Shipping & Handling", price: 200 },
        { name: "Before Tax", price: 6599 },
        { name: "Tax Collected", price: 1400 },
    ]);

    return (
        <div className="md:mx-14">
            <div>
                <Header
                    bgClass="bg-white"
                    textClass="text-gray-400"
                    navItems={navItems}
                    activeIdx={activeIdx}
                    setActiveIdx={setActiveIdx}
                    showBuyButton={false}
                />
            </div>
            {/* shipping title */}
            <div className="h-full mt-32">
                <div className=" flex items-center gap-12">
                    <div className="h-12 flex items-center">
                        <img src={leftArrow} alt="" className="h-6" />
                    </div>
                    <h2 className="text-lg font-semibold ">
                        Shipping Address
                    </h2>
                    {/* Add shipping form or details here */}
                </div>
                {/* shipping card here */}
                <div className="flex flex-col md:flex-row  h-full">
                    {/* left half */}
                    <div className="rounded basis-3/5 py-4 px-6">
                        <div className="flex gap-8 items-center">
                            <input
                                type="radio"
                                name="address"
                                id="new-address"
                                className="w-6 h-6 accent-red-600 cursor-pointer"
                            />
                            <label
                                htmlFor="new-address"
                                className="text-md cursor-pointer"
                            >
                                Add New Address
                            </label>
                        </div>
                        <form className="space-y-4 mt-4">
                            {/* First and Last Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Street Address */}
                            <div>
                                <label className="block text-sm mb-1">
                                    Street Address
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            {/* Apt, State, Zip */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">
                                        Apt Number
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between w-full pt-4 gap-8">
                                <button
                                    type="button"
                                    className="border px-6 py-2 rounded text-black"
                                >
                                    cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black w-full text-white px-6 py-2 rounded font-semibold"
                                >
                                    Save This Address
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* right half */}
                    <div className="bg-gray-200 rounded text-gray-600 basis-2/5 py-4 px-6">
                        <div className="text-xs">
                            By placing your order, you agree to company's <b>Privacy policy</b> and <b>Conditions of use.</b>
                        </div>
                        {/* horizontal line */}
                        <div className="border-t border-gray-400 my-4"></div>
                        <div className="text-black font-semibold mb-2">
                            Order Summary
                        </div>
                        <div>
                            {orderSummary.map((item) => (
                                <div key={item.name} className="flex justify-between items-center py-1">
                                    <div>{item.name}</div>
                                    <div className="text-gray-800 font-medium">{item.price}</div>
                                </div>
                            ))}
                        </div>
                        {/* horizontal line */}
                            <div className="border-t border-gray-400 my-4"></div>
                        <div className="flex justify-between">
                            <div className="text-black text-xl">
                            Order Total: 
                            </div>
                            <div className="text-black font-semibold">₹ 8,199</div>
                        </div>
                        <button
                                    type="submit"
                                    className="bg-black w-full text-white px-6 py-2 my-6 rounded font-semibold"
                                >
                                    Place Order
                                </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
