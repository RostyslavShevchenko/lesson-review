import { useState } from "react";

export default function ClickTracker({value, onUpdate}) {
    // const [clicks, setClicks] = useState(0)

    // const updateClicks = () => {
    //     setClicks(clicks + 1);
    // }

    return (
        <button onClick={onUpdate}>Clicks {value}</button>
    )
}