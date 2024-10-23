import { useEffect, useRef, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
    index: number,
}

export default function FooterLogo({isAdmin, index, uploadFile, getFile}: Props) {


    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setfile] = useState<string>("1");

    useEffect(() => {
        init();
    }, [file]);
    
    async function init() {
        const image = await getFile(`/images/logos/${index}`, "image");
        setfile(image);
    }

    return (
        <div className="relative">
            <img src={file} className="max-w-24 aspect-square bg-transparent" />
            {
                isAdmin ?
                    <label onClick={() => fileInputRef.current?.click()} htmlFor="profile-input" className="absolute top-0 left-0 right-0 bottom-0 text-2xl group-hover:opacity-100 transition-all duration-150 bg-opacity-0 hover:bg-opacity-55 backdrop-blur-0 bg-gray-100 w-full h-full flex items-center justify-center cursor-pointer">
                        <MdAddAPhoto />
                        <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                            if (e.target.files) {
                                setfile(cur => `${Number(cur)*2}`);
                                uploadFile(`/images/logos/${index}`, e.target.files[0]);
                            }
                        }} />
                    </label>
                    : ""
                }
        </div>
    )
}