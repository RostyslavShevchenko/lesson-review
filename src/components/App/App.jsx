import { Children, useState } from "react"
import css from "./App.module.css"
import Clicktracker from "../Clicktracker/ClickTraker";
import Toggler from "../Toogler/Toogler";
import Timer from "./Timer/Timer";

const Modal = () => {
    return <div>Modal</div>
}

export default function App() {
    // const [clicks, setClicks] = useState(0);
 
    // const updateClicks = () => {
    //     setClicks(clicks + 1);
    // }

    // const resetClicks = () => {
    //     setClicks(0)
    // }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <h1>State in react</h1>

            {/* <button onClick={toggle}>Toogle modal</button>
            {isOpen && <Modal/>} */}

            <Clicktracker />
            <button onClick={toggle}>{isOpen ? 'Unmount' : "Mount"}</button>
            {isOpen && <Timer/>}
            {/* <button onClick={resetClicks}>Reset</button> */}
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