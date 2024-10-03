import Cloud from './Cloud';
import styles from './Stats.module.css';

export default function Stats() {


    return (
        <div className="relative w-screem py-60 vazir">
            <div className="w-full h-full flex items-center justify-center">
                <div className=" flex flex-col items-center gap-8">
                    <span className="text-2xl md:text-6xl text-primary font-extrabold">
                        آمار نمایشگاه
                    </span>
                    <div className="relative w-screen max-w-[80vw] flex items-center justify-center py-10 bg-primary">
                        <div className="flex items-center justify-evenly h-full w-full text-white">
                            <div className="flex flex-col items-center gap-1 md:gap-4">
                                <span className=" font-extrabold md:text-4xl">12000</span>
                                <span className="md:text-2xl text-sm">لورم ایپسورم</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly h-full w-full text-white">
                            <div className="flex flex-col items-center gap-1 md:gap-4">
                                <span className=" font-extrabold md:text-4xl">12000</span>
                                <span className="md:text-2xl text-sm">لورم ایپسورم</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly h-full w-full text-white">
                            <div className="flex flex-col items-center gap-1 md:gap-4">
                                <span className=" font-extrabold md:text-4xl">12000</span>
                                <span className="md:text-2xl text-sm">لورم ایپسورم</span>
                            </div>
                        </div>
                        <span className={`${styles.cube} ${styles.cube_1}`}></span>
                        <span className={`${styles.cube} ${styles.cube_2}`}></span>
                        <span className={`${styles.cube} ${styles.cube_3}`}></span>
                        <span className={`${styles.cube} ${styles.cube_4}`}></span>
                        <span className={`${styles.cube} ${styles.cube_5}`}></span>
                        <span className={`${styles.cube} ${styles.cube_6}`}></span>
                        <span className={`${styles.cube} ${styles.cube_7}`}></span>
                        <span className={`${styles.cube} ${styles.cube_8}`}></span>
                        <span className={`${styles.cube} ${styles.cube_9}`}></span>
                        <span className={`${styles.cube} ${styles.cube_10}`}></span>
                        <span className={`${styles.cube} ${styles.cube_11}`}></span>
                        <span className={`${styles.cube} ${styles.cube_12}`}></span>
                    </div>
                </div>
            </div>
            <Cloud x="70px" y="0" imgNumber={2} />
        </div>
    )
}