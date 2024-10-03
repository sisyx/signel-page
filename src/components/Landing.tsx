import Cloud from "./Cloud";

export default function Landing() {
    return (
        <div className="relative w-screen h-screen">
            <div className="w-full h-full flex flex-col gap-12 items-center justify-center">
                <div>
                    <img src="/land.svg" alt="" className="max-w-[80vw]" />
                </div>
                <span className="text-center md:text-4xl text-primary vazir">
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
                </div>
            </div>
            <Cloud x="70%" y="50px" />
            <Cloud x="90%" y="50%" />
            <Cloud x="70px" y="60%" imgNumber={2} />
        </div>
    )
}