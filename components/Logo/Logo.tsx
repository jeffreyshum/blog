import Link from "next/link"
import { FC } from "react"
import styles from "./Logo.module.css"

const Logo: FC = () => {
	return (
		<Link href="/">
			<span className={styles.logo}>Jeffrey Shum</span>
		</Link>
	)
}

export default Logo
