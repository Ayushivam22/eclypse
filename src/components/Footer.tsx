
import arrow from "../assets/icons/diagonal_icon.png";

const Footer = () => {
    // Scroll to top handler
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`w-full mb-12`}>
            <div className={`mt-32 py-2 flex justify-between `}>
                <div className="flex gap-2 ">
                    <p className="text-4xl">Eclypse</p>
                    <img
                        src={arrow}
                        alt="Eclypse Logo"
                        className={`h-3  inline-block opacity-70`}
                    />
                </div>
                <div></div>
                <div
                    className={`h-12 w-12 flex rounded-full justify-center object-contain items-center bg-white cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`}
                    onClick={handleScrollTop}
                    title="Scroll to top"
                >
                    <img
                        src={arrow}
                        alt="Arrow Icon"
                        className={`h-6  inline-block opacity-100 rotate-315 invert`}
                    />
                </div>
            </div>
            {/* grid */}
            <div className="flex w-full gap-2">
                <div className="basis-1/4 text-xl px-3">
                    Home / About / Buy / Our Customers / Contacts
                </div>
                <div className="basis-1/4 flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="tracking-widest">CONTACT</div>
                        <div className="text-2xl">+91-1234567890</div>
                    </div>
                    <div>
                        <div className="tracking-widest">EMAIL</div>
                        <div className="text-2xl">eclypse@gmail.com</div>
                    </div>
                </div>
                <div className="basis-1/4"></div>
                <div className="basis-1/4 flex flex-col justify-end items-end ">
                    &copy; Eclypse 2025
                </div>
            </div>
        </div>
    );
};

export default Footer;
