import { useEffect, useRef, useState } from "react";
import Cloud from "./Cloud";
import { MdAddAPhoto } from "react-icons/md";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}

export default function Landing({getFile, uploadFile, isAdmin = false}:Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setfile] = useState<string>("1");

    useEffect(() => {
        init();
    }, [file]);
    
    async function init() {
        const image = await getFile("/images/land", "image.jpeg");
        console.log(image);
        setfile(image);
    }

    return (
        <div className="relative w-screen h-screen">
            <div className="relative w-full h-full flex flex-col gap-12 items-center justify-center">
                <div className="relative p-2 rounded-md overflow-hidden">
                    <img src={file ? file : "/land.png"} alt="" className="max-w-[80vw]" />
                    {
                        isAdmin ?
                            <label onClick={() => fileInputRef.current?.click()} htmlFor="profile-input" className="absolute top-0 left-0 right-0 bottom-0 text-2xl group-hover:opacity-100 transition-all duration-150 bg-opacity-0 hover:bg-opacity-55 backdrop-blur-0 bg-gray-100 w-full h-full flex items-center justify-center cursor-pointer">
                                <MdAddAPhoto />
                                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                                    if (e.target.files) {
                                        setfile(cur => `${Number(cur)*2}`);
                                        uploadFile('/images/land', e.target.files[0]);
                                    }
                                }} />
                            </label>
                         : ""
                    }
                </div>
                {/* <span className="text-center md:text-4xl text-primary vazir">
                    بزرگترین رویداد کارجویی و کارفرمایی دانشگاهی ایران
                </span>
                <div className="flex gap-2 md:gap-8 text-dark">
                    <div className="flex items-center gap-1 md:gap-4" dir="rtl">
                        <img src="/calendar-days.svg" alt="" className="w-4 md:w-12" />
                        <span className="md:text-3xl vazir">20 تا 22 ابان ماه 1403</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-4" dir="rtl">
                        <img src="/location.svg" alt="" className="w-4 md:w-12" />
                        <span className="md:text-3xl vazir">دانشگاه صنعتی شریف</span>
                    </div>
                </div>
                <div>
                    <img src="/logos.svg" />
                </div> */}
            </div>
            <Cloud x="70%" y="50px" />
            <Cloud x="90%" y="50%" />
            <Cloud x="70px" y="60%" imgNumber={2} />
        </div>
    )
}