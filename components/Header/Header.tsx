import { FC } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"
import ThemeButton from "../ThemeButton"
import Link from "next/link"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<div id={styles.left}>
				<Logo />
			</div>
			<nav id={styles.right}>
				<ThemeButton />
				<Link href="/posts" className={styles.navLink}>
					Posts
				</Link>
			</nav>
			<div id={styles.mobile}>
				<input className={styles.toggle} type="checkbox" />
				<div id={styles.hamburger}>
					<span className={styles.line} id={styles.line1} />
					<span className={styles.line} id={styles.line2} />
					<span className={styles.line} id={styles.line3} />
				</div>
			</div>
		</header>
	)
}

export default Header
