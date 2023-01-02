import { FC } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<Logo />
		</header>
	)
}

export default Header
