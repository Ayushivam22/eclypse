import arrowIcon from "../assets/icons/diagonal_icon.png";
import VideoCatalog from "./VideoCatalog";
const Gallery = () => {
    return (
        <div className="flex flex-col justify-start items-start mt-14 w-full">
            <div className=" w-13/20 text-5xl">
                Rooted in a philosophy of quiet luxury, our garments are
                designed to speak softly in cut, in movement, in presence.
            </div>
            <a href="#">
                <div className="flex gap-2 my-24">
                    <div>Learn more about Eclypse</div>

                    <div className="flex items-center ">
                        <img
                            src={arrowIcon}
                            alt="Arrow Icon"
                            className="invert h-3"
                        />
                    </div>
                </div>
            </a>
            <VideoCatalog/>
        </div>
    );
};

export default Gallery;
