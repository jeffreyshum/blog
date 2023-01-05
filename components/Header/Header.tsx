import { FC } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"
import ThemeButton from "../ThemeButton"
import Link from "next/link"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<nav id={styles.left}>
				<Logo />
				<Link href="/posts" className={styles.navLink}>
					Posts
				</Link>
			</nav>
			<div id={styles.right}>
				<ThemeButton />
			</div>
		</header>
	)
}

export default Header
