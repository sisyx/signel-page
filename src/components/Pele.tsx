import Cloud from "./Cloud";

export default function Pele() {
    return (
        <div className="w-screen h-sceen pb-16 relative">
            <div className="w-full h-full flex items-center justify-center">
                <img src="/pele.png"/>
            </div>
            <Cloud x="50px" y="0" />
            <Cloud x="80%" y="500px" imgNumber={2} />
        </div>
    )
}