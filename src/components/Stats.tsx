import { useEffect, useState } from 'react';
import Cloud from './Cloud';
import styles from './Stats.module.css';
import { root } from '../pages/Admin';


type Props = {
    isAdmin: Boolean,
}

type StatsProps = {
    valueOne: number,
    valueTwo: number,
    valueThree: number
}

export default function Stats({isAdmin}: Props) {

    const [stats, setStats] = useState<StatsProps>({valueOne: 0, valueTwo: 0, valueThree: 0});

    useEffect(() => {
        getStats();
    }, [])

    async function updateStats() {
        try {
            const req = await fetch(`${root}/api/Statistics`, {
                method: "POST",
                body: JSON.stringify(stats),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(!req.ok) {
                throw new Error(req.statusText);
            }
        } catch (error: any) {
            console.error(error);
        }
    }

    async function getStats() {
        try {
            const req = await fetch(`${root}/api/Statistics`);
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            setStats(res);
            return res;
        } catch(error: any) {
            console.error(error)
            const result = {
                valueOne: 0,
                valueTwo: 0,
                valueThree: 0,
            }
            setStats(result)
            return result
        }
    }


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
                                {
                                    isAdmin ? <input onBlur={updateStats} type='number' className='w-20 min-w-12 bg-transparent outline-none border border-white p-2 rounded-md' placeholder='0' value={stats.valueOne} onChange={e => setStats(cur => ({...cur, valueOne: Number(e.target.value)}))} />
                                    : <span className=" font-extrabold md:text-4xl">{stats.valueOne}</span>
                                }
                                <span className="md:text-2xl text-sm">لورم ایپسورم</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly h-full w-full text-white">
                            <div className="flex flex-col items-center gap-1 md:gap-4">
                            {
                                    isAdmin ? <input onBlur={updateStats} type='number' className='w-20 min-w-12 bg-transparent outline-none border border-white p-2 rounded-md' placeholder='0' value={stats.valueTwo} onChange={e => setStats(cur => ({...cur, valueTwo: Number(e.target.value)}))} />
                                    : <span className=" font-extrabold md:text-4xl">{stats.valueTwo}</span>
                                }
                                <span className="md:text-2xl text-sm">لورم ایپسورم</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-evenly h-full w-full text-white">
                            <div className="flex flex-col items-center gap-1 md:gap-4">
                            {
                                    isAdmin ? <input onBlur={updateStats} type='number' className='w-20 min-w-12 bg-transparent outline-none border border-white p-2 rounded-md' placeholder='0' value={stats.valueThree} onChange={e => setStats(cur => ({...cur, valueThree: Number(e.target.value)}))} />
                                    : <span className=" font-extrabold md:text-4xl">{stats.valueThree}</span>
                                }
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