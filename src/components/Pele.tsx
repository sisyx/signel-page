import { useEffect, useRef, useState } from "react";
import Cloud from "./Cloud";
import { MdAddAPhoto } from "react-icons/md";


type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}

export default function Pele({getFile, uploadFile, isAdmin = false}:Props) {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setfile] = useState<string>("1");

    useEffect(() => {
        init();
    }, [file]);
    
    async function init() {
        const image = await getFile("/images/pele", "image");
        console.log(image);
        setfile(image);
    }

    return (
        <div className="w-screen h-sceen pb-16 relative">
            <div className="relative w-full h-full flex items-center justify-center">
                <img src={file} className=" min-w-24 min-h-24" alt=" "/>
                {
                    isAdmin ?
                        <label onClick={() => fileInputRef.current?.click()} htmlFor="profile-input" className="absolute top-0 left-0 right-0 bottom-0 text-2xl group-hover:opacity-100 transition-all duration-150 bg-opacity-0 hover:bg-opacity-55 backdrop-blur-0 bg-gray-100 w-full h-full flex items-center justify-center cursor-pointer">
                            <MdAddAPhoto />
                            <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                                if (e.target.files) {
                                    setfile(cur => `${Number(cur)*2}`);
                                    uploadFile('/images/pele', e.target.files[0]);
                                }
                            }} />
                        </label>
                        : ""
                }
            </div>
            <Cloud x="50px" y="0" />
            <Cloud x="80%" y="500px" imgNumber={2} />
        </div>
    )
}