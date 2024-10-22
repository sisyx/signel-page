import Cloud from "./Cloud";

export default function CurrentOrgans() {
    return (
        <div className="relative w-screen py-5 mt-36 vazir">
            <div className="w-full h-full flex items-center flex-col gap-4 md:gap-24">
                <div className="text-xl md:text-5xl font-extrabold text-primary">سازمان های حاضر</div>
                <div className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2  items-center justify-evenly p-4 gap-4 w-full overflow-x-scroll">
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    </div>
                </div>
            </div>
            <Cloud x="40%" y="100%" imgNumber={2} />
        </div>
    )
}