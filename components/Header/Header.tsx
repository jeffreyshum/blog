import { FC } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"
import ThemeButton from "../ThemeButton"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<div id={styles.left}>
				<Logo />
			</div>
			<div id={styles.right}>
				<ThemeButton />
			</div>
		</header>
	)
}

export default Header
