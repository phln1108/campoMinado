import { useState } from "react";
import styles from "./DropDown.module.css"


interface DropDownItem{
    name: string;
    onClick: () => void;
}

interface DropDownProps {
    items: DropDownItem[]
}

export const Dropdown = ({items}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={styles.dropdownButton} onClick={() => setIsOpen(!isOpen)}>≡</button>
            {isOpen &&
                <div className={styles.dropDownList} >
                    <ul className={styles.dropDownMenu}>
                        {items.map(item => (
                            <li key={item.name} onClick={item.onClick}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};