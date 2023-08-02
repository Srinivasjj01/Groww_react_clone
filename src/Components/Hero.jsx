import React from "react";

const Hero =() => {
    return(
        <div className="text-white ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col justify-center">
                <p className=" text-[#00fd9a] font-bold p-2">Growing with Data Analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow With Data</h1>
                <div>
                    <p className="font-bold md:text-5xl sm:text-4xl text-xl">Fast ,flexible financing for</p>
                </div>
                <p className="p-2 md:text-3xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB,BTC & SASS Platforms.</p>
                <button className="bg-[#00fd9a] w-[200px] my-6 mx-auto rounded-md font-medium py-2 text-black">Get Started</button>
            </div>
        </div>

    )
}
export default Hero;