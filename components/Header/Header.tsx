import Link from "next/link"
import { FC } from "react"
import styles from "./Header.module.css"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<h3>Jeffrey Shum</h3>
		</header>
	)
}

export default Header
