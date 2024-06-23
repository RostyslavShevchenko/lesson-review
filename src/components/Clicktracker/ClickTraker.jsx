import { useState, useEffect } from "react";

export default function ClickTracker({}) {

    useEffect(() => {
        console.log('This is Mount effect');
    }, [])

    const [clicks, setClicks] = useState(() => {
        const savedClicks = window.localStorage.getItem('clicks-number');
        return savedClicks !== null ? JSON.parse(savedClicks) : 0;
    })

     useEffect(() => {
        localStorage.setItem('clicks-number', clicks)
    },[clicks])

    const updateClicks = () => {
        setClicks(clicks + 1);
    }

    const resetClicks = () => {
        setClicks(0);
    }

    // const [date, setDate] = useState(Date.now())

    // const newDate = () => [
    //     setDate(Date.now())
    // ]
    
    // useEffect(() => {
    //     console.log('Number of clicks: ', clicks);
    //     document.title = clicks
    // }, [clicks])

    return (
        <div>
            <button onClick={updateClicks}>Clicks {clicks}</button>
            <button onClick={resetClicks}>Reset</button>
            {/* <button onClick={newDate}>Date: {date}</button> */}
        </div>
    )
}