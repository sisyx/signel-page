import Cloud from "./Cloud";

export default function About() {
    return (
        <div className="relative w-screen vazir">
            <div className="w-full flex justify-between">
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col gap-8 justify-start" dir="rtl">
                        {/* title */}
                        <span className="text-2xl md:text-6xl text-primary font-extrabold pr-4">درباره نمایشگاه کار</span>
                        <span className=" max-w-2xl text-justify leading-8 text-xl text-dark p-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </span>
                    </div>
                </div>
                <img src="side-right.png" className="md:block hidden" alt="" />
            </div>
            <Cloud x="80px" y="30px" />
        </div>
    )
}