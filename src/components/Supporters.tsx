import Cloud from "./Cloud";
import Supporter from "./Supporter";

type Props = {
    uploadFile: Function,
    isAdmin: Boolean,
    getFile: Function,
}

export default function Supporters({getFile, uploadFile, isAdmin = false}:Props) {
    return (
        <div className="relative w-screen py-5 vazir">
            <div className="w-full h-full flex items-center flex-col gap-4 md:gap-24">
                <div className="text-xl md:text-5xl font-extrabold text-primary">حامیان نمایشگاه</div>
                <div className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2  items-center justify-evenly p-4 gap-4 w-full overflow-x-scroll">
                    {
                        [1,2,3,4,5,6,7,8].map((_, index) => <Supporter index={index} getFile={getFile} uploadFile={uploadFile} isAdmin={isAdmin} />)
                    }
                </div>
            </div>
            <Cloud x="70%" y="0" imgNumber={2} />
        </div>
    )
}