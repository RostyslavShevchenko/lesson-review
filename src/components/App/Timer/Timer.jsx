import { useEffect } from "react"

export default function Timer() {

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Mount use effect');
            console.log(Date.now());
        }, 1000);

        return () => {
            console.log('cleanup');
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>Timer</div>
    )
}