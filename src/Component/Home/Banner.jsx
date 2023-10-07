

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="bg-cover bg-center relative" style={{ backgroundImage: "url('../banner.jpg')" }}>
                <div className="bg-white bg-opacity-20 py-20">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">Curating Memorable Moments for Your Event</h1>
                    <h2 className="font-medium text-xl mb-8 max-w-xs md:max-w-md lg:max-w-xl mx-auto">Be part of a community that celebrates uniqueness, where each event promises to be a distinct and remarkable affair.</h2>
                    <button className="border-2 border-green-500 rounded-full px-4 py-2 font-semibold">Get in Touch</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;