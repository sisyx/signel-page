import React from "react";

interface CloudProps {
    x?: string,
    y?: string,
    imgNumber?: number
}

const Cloud: React.FC<CloudProps> = ({ x, y, imgNumber }) => {
    const style: React.CSSProperties  = {
        left: x,
        top: y
    }
    return (
        <div style={style} className="absolute -z-[1]">
            <img src={`/cloud${imgNumber}.svg`} alt="" />
        </div>
    )
}

Cloud.defaultProps = {
    x: "50%",
    y: "50%",
    imgNumber: 1
}

export default Cloud;