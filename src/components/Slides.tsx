import React, { useState } from "react";
import styles from './Slides.module.css';

const Slides: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    function next() {
        if (activeIndex >=  5) {return}
        setActiveIndex(cur => cur + 1)
    }

    function prev() {
        if (activeIndex <= 0) {return}
        setActiveIndex(cur => cur - 1)
    }


    return (
        <div className="w-full py-12 px-5 flex overflow-hidden h-96">
            <div className={`md:w-24 h-full select-none rounded-lg cursor-pointer flex items-center justify-center ${styles.shadow}`} onClick={prev}>
                <img src="/left.svg" className="md:w-12 w-8 rounded-full bg-primary" />
            </div>
            <div className="flex-1 relative">
                {
                    [0,2,1,3,4,5].map((_, index) => 
                        <div className={`${activeIndex < index ? "scale-50 opacity-0 -translate-x-full rotate-12" : activeIndex > index ?  "scale-50 opacity-0 translate-x-full -rotate-12" : "scale-100"} w-full absolute transition-all duration-500 flex items-center justify-center`}>
                            <div className="bg-primary rounded-xl shadow-2xl shadow-primary p-8 px-4 text-white flex flex-col gap-4 justify-center items-center w-[95%]">
                                <span className="md:text-2xl text-xl">اینجا به خودت استراحت بده</span>
                                <div className="border border-white h-24"></div>
                                <div className="flex gap-8">
                                    <div className="cursor-pointer group md:w-24 w-16 aspect-video md:border-4 border md:rounded-2xl rounded-lg p-1 relative before:absolute before:top-1/2 before:right-0 before:translate-x-full before:-translate-y-1/2 before:rounded-lg md:before:h-8 before:h-4 md:before:w-3 before:w-2 before:bg-white">
                                        <div className="group-hover:bg-white w-full h-full bg-green-500 rounded-lg"></div>
                                    </div>
                                    <div className="cursor-pointer group md:w-24 w-16 aspect-video md:border-4 border md:rounded-2xl rounded-lg p-1 relative before:absolute before:top-1/2 before:right-0 before:translate-x-full before:-translate-y-1/2 before:rounded-lg md:before:h-8 before:h-4 md:before:w-3 before:w-2 before:bg-white">
                                        <div className="group-hover:bg-white w-2/3 h-full bg-yellow-500 rounded-lg"></div>
                                    </div>
                                    <div className="cursor-pointer group md:w-24 w-16 aspect-video md:border-4 border md:rounded-2xl rounded-lg p-1 relative before:absolute before:top-1/2 before:right-0 before:translate-x-full before:-translate-y-1/2 before:rounded-lg md:before:h-8 before:h-4 md:before:w-3 before:w-2 before:bg-white">
                                        <div className="group-hover:bg-white w-1/3 h-full bg-red-900 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={`md:w-24 h-full select-none rounded-lg cursor-pointer flex items-center justify-center ${styles.shadow}`} onClick={next}>
                <img src="/right.svg" className="md:w-12 w-8 rounded-full bg-primary" />
            </div>
        </div>
    )
}

export default Slides