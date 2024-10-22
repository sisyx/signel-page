import { useEffect, useState } from "react"
import { root } from "../pages/Admin";
import FooterLogo from "./FooterLogo";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}
export default function Footer({isAdmin, uploadFile, getFile}: Props) {
    const [sampleText, setSampleText] = useState<string>("");

    useEffect(() => {
        initText();
    }, [])

    async function initText() {
        const xtext = await getText();
        setSampleText(xtext);
    }

    async function editFoorter(text:string) {
        if (!text) {
            console.error(`text ${text} not valid`)
            return
        }
        try {
            const req = await fetch(`${root}/api/Footer/EditFooter`, {
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
            await req.text();
            return 1
        } catch (error: any) {
            // customAlert(error.message);
            return 0
        }
    }


    async function getText(): Promise<string> {
        try {
            const req = await fetch(`${root}/api/Footer/GetFooter`)
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.json();
            return res?.content
        } catch (error: any) {
            return ""
        }
    }


    async function handleClickSubmit() {
        const text = document.querySelector<HTMLTextAreaElement>(".footer-text-content")?.value || "";
        console.log(text);
        await editFoorter(text);
    }

    return (
        <div className="flex items-center justify-center px-8 w-screen mt-36 relative aspect-[9/16] md:aspect-video" style={{backgroundImage: "url('/footer.png')"}}>
            <div className="max-w-7xl w-screen flex flex-col-reverse gap-8 md:flex-row justify-between">
                {/* logos */}
                <div className="grid grid-cols-4 gap-2 items-end">
                    {
                        [1,2,3,4].map((_, index) => <FooterLogo uploadFile={uploadFile} getFile={getFile} isAdmin={isAdmin} index={index} />)
                    }
                </div>
                {
                    isAdmin ?
                    <div className="flex flex-col items-center md:items-end w-full">
                        <textarea dir="rtl" placeholder="لطفا چیزی بنویسی" className={`footer-text-content outline-none bg-white bg-opacity-90 text-black md:text-xl max-w-96 w-[80vw] aspect-video`} name="footer-sample" value={sampleText} onChange={e => setSampleText(e.target.value)}></textarea> 
                        <button onClick={handleClickSubmit} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 max-w-96 w-[80vw] border border-blue-500 hover:border-transparent rounded`}>
                            ثبت
                        </button>
                    </div>
                    : <p dir="rtl" className="bg-white bg-opacity-90 w-96 p-4 rounded-md aspect-video">{sampleText}</p>
                }
            </div>
        </div>
    )
}