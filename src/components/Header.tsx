import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex items-center h-16 md:h-20 w-full mx-auto">
            <div className=" flex justify-between w-full">
                <div>
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>
                <div className=" flex items-center ml-auto">
                    <ul className="hidden md:flex space-x-6 text-sm gap-6 pr-6">
                        <li>About Us</li>
                        <li>Waitlist</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
            <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded ml-4 h-10 w-20">
                Buy
            </button>
        </div>
    );
};

export default Header;
