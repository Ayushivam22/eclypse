import heroVideo from "../assets/hero-vid.mp4";

const Hero = () => {
    return (
        <div className=" flex flex-col w-full gap-6 py-8 ">
            <div className="text-4xl sm:text-6xl md:text-8xl mt-16 sm:mt-24">
                Eclypse
                <span className="align-super text-lg sm:text-2xl md:text-4xl">
                    &reg;
                </span>
            </div>
            <div className="flex justify-end align-super text-xs md:text-sm md:px-3 px-2 ">
                &copy; 2025
            </div>
            <div className="relative w-full mx-auto shadow-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-sm w-full"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-4 flex items-end justify-end pointer-events-none">
                    <span className=" text-lg md:text-2xl">
                         A silhouette worth remembering
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
