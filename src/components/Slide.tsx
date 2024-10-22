import { useEffect, useRef, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
    index: number,
    activeIndex: number,
}

export default function Slide({getFile, uploadFile, isAdmin, index, activeIndex}:Props) {
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setfile] = useState<string>("1");

    useEffect(() => {
        init();
    }, [file]);
    
    async function init() {
        const image = await getFile(`/images/slides/${index}`, "image");
        setfile(image);
    }

    return (

        <div className={`${activeIndex < index ? "scale-50 opacity-0 -translate-x-full rotate-12" : activeIndex > index ?  "scale-50 opacity-0 translate-x-full -rotate-12" : "scale-100"} overflow-hidden w-full absolute transition-all duration-500 flex items-center justify-center`}>
            {
                file ? <img src={file} alt="Image" className="w-full h-full" /> 
                : <div className="bg-primary rounded-xl shadow-2xl shadow-primary p-8 px-4 text-white flex flex-col gap-4 justify-center items-center w-[95%]">
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
            }
            {
                isAdmin ?
                    <label onClick={() => fileInputRef.current?.click()} htmlFor="profile-input" className="absolute top-0 left-0 right-0 bottom-0 text-2xl group-hover:opacity-100 transition-all duration-150 bg-opacity-0 hover:bg-opacity-55 backdrop-blur-0 bg-gray-100 w-full h-full flex items-center justify-center cursor-pointer">
                        <MdAddAPhoto />
                        <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                            if (e.target.files) {
                                setfile(cur => `${Number(cur)*2}`);
                                uploadFile(`/images/slides/${index}`, e.target.files[0]);
                            }
                        }} />
                    </label>
                    : ""
                }
        </div>
)}