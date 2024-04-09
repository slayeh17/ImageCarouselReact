import { useState, useEffect } from "react";

function App() {
    const [imgCount, setImgCount] = useState(1);
    const [imgLocation, setImgLocation] = useState("1c.jpg");

    useEffect(() => {
        setImgLocation(`${imgCount}c.jpg`);
    }, [imgCount]);

    return (
        <div className="overflow-hidden h-screen">
            <div className="w-full h-full blur-md">
                <img src={imgLocation} className="rounded-xl" />
            </div>
            <div className="top-0 absolute w-screen flex items-center justify-center flex-col h-full">
                <h1 className="text-center absolute top-0 mt-4 text-white font-semibold">
                    Image Carousel
                </h1>
                <img
                    src={imgLocation}
                    width={900}
                    height={1000}
                    className="rounded-xl"
                />
                <p className="text-3xl my-8 text-white">{imgCount}/10</p>
                <div className="flex gap-x-4">
                    <button
                        onClick={() => {
                            if (imgCount - 1 > 0) setImgCount(imgCount - 1);
                        }}
                        className="text-base hover:outline hover:outline-white"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => {
                            if (imgCount + 1 <= 10) setImgCount(imgCount + 1);
                        }}
                        className="text-base hover:outline hover:outline-white"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
