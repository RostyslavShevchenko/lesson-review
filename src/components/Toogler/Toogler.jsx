import { useState} from "react";
export default function Toggler({ children }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button onClick={toggle}>{isOpen ? 'close' : 'show'}</button>
            {isOpen && children}
        </div>
    );
    }