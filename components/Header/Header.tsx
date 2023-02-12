import { FC, useEffect, useRef } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"
import ThemeButton from "../ThemeButton"
import Link from "next/link"

const Header: FC = () => {
	const headerRef = useRef<HTMLDivElement>(null)
	const toggleRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const handleClickOut = (e: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(e.target as Node)
			) {
				close()
			}
		}

		const close = () => {
			if (toggleRef.current) toggleRef.current.checked = false
		}

		document.addEventListener("mousedown", handleClickOut)
		document.addEventListener("scroll", close)

		return () => {
			document.removeEventListener("mousedown", handleClickOut)
			document.removeEventListener("scroll", close)
		}
	}, [])

	return (
		<header id={styles.header} ref={headerRef}>
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
				<input
					className={styles.toggle}
					type="checkbox"
					ref={toggleRef}
				/>
				<div id={styles.hamburger}>
					<span className={styles.line} id={styles.line1} />
					<span className={styles.line} id={styles.line2} />
					<span className={styles.line} id={styles.line3} />
				</div>
				<div id={styles.menu}>
					<Link href="/posts" className={styles.mobileLink}>
						Posts
					</Link>
					<ThemeButton />
				</div>
			</div>
		</header>
	)
}

export default Header
