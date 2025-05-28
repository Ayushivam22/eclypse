import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  bgClass?: string;
  textClass?: string;
  navItems?: { label: string }[];
  activeIdx?: number;
  setActiveIdx?: (idx: number) => void;
  showBuyButton?: boolean;
}

const defaultNavItems = [
  { label: "About Us" },
  { label: "Waitlist" },
  { label: "Cart" },
];

const Header = ({
  bgClass = "bg-black/60",
  textClass = "text-white",
  navItems = defaultNavItems,
  activeIdx,
  setActiveIdx,
  showBuyButton = true,
}: HeaderProps) => {
  const location = useLocation();
  const isCheckout = location.pathname === "/checkout";
  const navigate = useNavigate();

  return (
    <div className={`sticky top-0 z-50 ${bgClass} backdrop-blur-sm flex items-center h-16 md:h-20 w-full mx-auto`}>
      <div className="flex justify-between w-full">
        <div>
          <img src={logo} alt="Logo" className="h-10 w-auto ml-2 rounded" />
        </div>
        <div className="flex items-center ml-auto">
          <ul className="flex space-x-6 text-sm gap-6 pr-6">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                onClick={setActiveIdx ? () => setActiveIdx(idx) : undefined}
                className={`cursor-pointer px-3 py-1 rounded-t transition-all duration-200
                  ${activeIdx === idx
                    ? "text-black border-b-2 border-black bg-white"
                    : isCheckout
                      ? `${textClass} bg-transparent hover:bg-white hover:text-gray-700`
                      : `${textClass} bg-transparent`
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        {showBuyButton && (
          <button
            className="bg-white text-black text-xs font-bold py-2 px-4 rounded ml-4 h-10 w-20"
            onClick={() => navigate("/checkout")}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
