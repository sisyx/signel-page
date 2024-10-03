import Cloud from "./Cloud";

export default function CurrentOrgans() {
    return (
        <div className="relative w-screen py-5 mt-36 vazir">
            <div className="w-full h-full flex items-center flex-col gap-4 md:gap-24">
                <div className="text-xl md:text-5xl font-extrabold text-primary">سازمان های حاضر</div>
                <div className="flex items-center justify-evenly gap-4 w-full overflow-x-scroll">
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                    <img src="/digikala.svg" alt="" className="w-[70px] md:w-auto" />
                </div>
            </div>
            <Cloud x="40%" y="100%" imgNumber={2} />
        </div>
    )
}