import { useEffect, useRef, useState } from "react";
import styles from './Slides.module.css';
import { MdAddAPhoto } from "react-icons/md";
import Slide from "./Slide";


type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}

export default function Slides({getFile, uploadFile, isAdmin }:Props) {
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
                    <Slide index={index} activeIndex={activeIndex} getFile={getFile} isAdmin={isAdmin} uploadFile={uploadFile}/>
                    )
                }
            </div>
            <div className={`md:w-24 h-full select-none rounded-lg cursor-pointer flex items-center justify-center ${styles.shadow}`} onClick={next}>
                <img src="/right.svg" className="md:w-12 w-8 rounded-full bg-primary" />
            </div>
        </div>
    )
}