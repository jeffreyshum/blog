import Link from "next/link"
import { FC } from "react"
import Logo from "../Logo"
import styles from "./Header.module.css"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<Link href="/">
				<Logo />
			</Link>
		</header>
	)
}

export default Header
