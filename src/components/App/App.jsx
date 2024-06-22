import { Children, useState } from "react"
import css from "./App.module.css"
import Clicktracker from "../Clicktracker/ClickTraker";
import Toggler from "../Toogler/Toogler";

export default function App() {
    const [clicks, setClicks] = useState(0);
 
    const updateClicks = () => {
        setClicks(clicks + 1);
    }

    const resetClicks = () => {
        setClicks(0)
    }


    return (
        <div>
            <h1>State in react</h1>

            <Clicktracker value={clicks} onUpdate={updateClicks}/>
            <Clicktracker value={clicks} onUpdate={updateClicks} />
            <button onClick={resetClicks}>Reset</button>
            {/* <hr />
            <Toggler>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, fuga. Aperiam sint culpa non, earum veniam dolorem rem hic distinctio?
                </p>
            </Toggler>
            <Toggler>
                <h2>Lorem ipsum dolor sit amet.
                </h2>
            </Toggler> */}
        </div>
    )
}