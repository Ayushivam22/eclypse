import Video1 from "../assets/videos/video1.mp4";
import pic2 from "../assets/videos/pic2.jpg";
import pic3 from "../assets/videos/pic3.jpg";
import pic4 from "../assets/videos/pic4.jpg";
import pic5 from "../assets/videos/pic5.jpg";

const VideoCatalog = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 w-full gap-4">
                <div className="col-span-2 overflow-hidden rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                        preload="none" // lazy load video
                    >
                        <source src={Video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative inline-block rounded-lg overflow-hidden">
                        <img
                            src={pic2}
                            alt=""
                            className="object-cover rounded-lg"
                            loading="lazy" // lazy load image
                        />
                        <div className="text-4xl p-6 flex flex-col justify-end absolute inset-0 opacity-0 hover:opacity-100 hover:bg-black/60 transition-all duration-300 ease-in-out">
                        Premium wool blend in signature vermilion
                    </div>
                    </div>
                </div>
            </div>
            {/* Second Row  */}
            <div className="grid grid-cols-3 w-full gap-4">
                <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={pic3}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="text-4xl p-6 flex flex-col justify-end absolute inset-0 opacity-0 hover:opacity-100 hover:bg-black/60 transition-all duration-300 ease-in-out">
                        Discrete side pockets with clean finish
                    </div>
                </div>
                <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={pic4}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="text-4xl p-6 flex flex-col justify-end absolute inset-0 opacity-0 hover:opacity-100 hover:bg-black/60 transition-all duration-300 ease-in-out">
                        Hand-cut and assembled in small batches
                    </div>
                </div>
                <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={pic5}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="text-4xl sm:text-6xl md:text-8xl flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100  hover:bg-black/100 transition-all duration-300 ease-in-out">
                        Eclypse
                        <span className="align-super text-lg sm:text-2xl md:text-4xl">
                            &reg;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCatalog;
