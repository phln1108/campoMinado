import styles from "./Header.module.css"

import logo from "../../assets/logo.png"
import { Dropdown } from "../DropDown/DropDown"

export function Header() {


    return (
        <header className={styles.header}>
            <img src={logo} alt="Campo Minado"/>
            <strong>Campo Minado</strong>
            <div className={styles.dropDownArea}>
                <Dropdown 
                items={[
                    {
                        name:"restart",
                        onClick: () => {}
                    },
                    {
                        name:"about",
                        onClick: () => {}
                    },
                    {
                        name:"return",
                        onClick: () => {}
                    },
                ]}
                />
            </div>
        </header>
    )
}