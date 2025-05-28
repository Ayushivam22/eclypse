import { useState } from "react";
import dropdownArrow from '../assets/icons/dropdownArrow.png';

const Dropdown = () => {
  const DropdownText = ["Size & Fit", "Delivery & Returns", "How This Was Made"];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="my-32 w-full text-4xl">
      {DropdownText.map((text, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-stretch my-8 cursor-pointer" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            <div className='h-auto'>
              {text}
            </div>
            <div className="h-full flex items-center">
              <img
                src={dropdownArrow}
                alt="dropdown arrow"
                className={`h-[50px] object-contain transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`}
              />
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden text-lg text-gray-700 mb-4
              ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum commodi odio eos aliquid, placeat fugiat quod! Temporibus eligendi dolores fugit tenetur, excepturi quam quibusdam mollitia corporis possimus quas! Explicabo aperiam reprehenderit corrupti hic fugiat porro rerum et velit ducimus. Adipisci cumque error quae voluptatibus dolorum accusantium ipsam et reiciendis quo.
          </div>
          <div className="h-[1px] bg-gray-500 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;