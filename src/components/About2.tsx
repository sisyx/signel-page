import { useEffect, useRef, useState } from "react";
import Cloud from "./Cloud";
import { MdAddAPhoto } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { customAlert } from "../App";
import { root } from "../pages/Admin";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}

type StateProps = {
    isFocused: Boolean,
}

export default function About2({getFile, uploadFile, isAdmin = false}:Props) {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setfile] = useState<string>("1");
    const [isContentFocused, _setisContentFocused] = useState<Boolean>(false);
    // const contentRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string>("");

    useEffect(() => {
        initFile();
    }, [file]);

    useEffect(() => {
        initText();
    }, []);
    
    async function initFile() {
        const image = await getFile("/images/sideLeft", "image");
        setfile(image);
    }

    async function initText() {
        const newText = await getText();
        console.log(newText)
        setText(newText);
    }

    async function editAbout(text: string): Promise<string> {
        if (!text) {
            customAlert(`text is not valid`)
            return ""
        }

        try {
            const req = await fetch(`${root}/api/About/EditAbout2`, {
                method: "POSt",
                body: JSON.stringify({
                    content: text,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.text();
            // customAlert(res);
            return res
        } catch (error: any) {
            // customAlert(error.message);
            return "تغییر ناموفق"
        }
    }

    async function getText() {
        try {
            const req = await fetch(`${root}/api/About/GetAbout2`)
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.json();
            // customAlert(res);
            return res?.content
        } catch (error: any) {
            // customAlert(error.message);
            return 0
        }
    }

    async function handleClickSubmit() {
        const text = document.querySelector<HTMLTextAreaElement>(".about-text-content")?.value || "";
        console.log(text)
        const isEdited = await editAbout(text);
        customAlert(isEdited)
    }

    return (
        <div className="relative w-screen vazir">
            <div className="w-full flex justify-between">
                <div className="md:block hidden relative min-w-80 max-w-96">
                    <img src={file} className="w-full" alt="" />
                    {
                        isAdmin ?
                            <label onClick={() => fileInputRef.current?.click()} htmlFor="profile-input" className="absolute top-0 left-0 right-0 bottom-0 text-2xl group-hover:opacity-100 transition-all duration-150 bg-opacity-0 hover:bg-opacity-55 backdrop-blur-0 bg-gray-100 w-full h-full flex items-center justify-center cursor-pointer">
                                <MdAddAPhoto />
                                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={e => {
                                    if (e.target.files) {
                                        setfile(cur => `${Number(cur)*2}`);
                                        uploadFile('/images/sideLeft', e.target.files[0]);
                                    }
                                }} />
                            </label>
                            : ""
                    }
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col gap-8 justify-start" dir="rtl">
                        {/* title */}
                        {/* <span className="text-2xl md:text-6xl text-primary font-extrabold pr-4">درباره نمایشگاه کار</span> */}
                        <span className={`max-w-2xl text-justify leading-8 text-xl text-dark p-2 relative`}>
                            {/* {text} */}
                            {
                                isAdmin ?
                                <>
                                    <textarea className="about-text-content w-full h-full" placeholder="لطفا چیزی بنویسید" value={text} onChange={e => setText(e.target.value)}>
                                    </textarea>
                                    <button onClick={handleClickSubmit} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${!isContentFocused ? "" : ""}`}>
                                        ثبت
                                    </button>
                                </>
                                : <span>
                                    {text}
                                </span>
                            }
                        </span>
                    </div>
                </div>
            </div>
            <Cloud x="80px" y="30px" />
        </div>
    )
}