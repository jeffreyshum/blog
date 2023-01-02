import { FC } from "react"
import Logo from "../Logo"
import styles from "./Footer.module.css"

const Footer: FC = () => {
	return (
		<footer id={styles.footer}>
			<Logo />
			<br />
			Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
			Reserved.
			<div id={styles.socialContainer}>
				<a
					href="https://github.com/jeffreyshum"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/images/social/github.svg"}
						className={styles.socialIcon}
						alt="GitHub"
						title="GitHub"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/jeffrey-shum/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/images/social/linkedin.svg"}
						className={styles.socialIcon}
						alt="LinkedIn"
						title="LinkedIn"
					/>
				</a>
				<a
					href="https://www.instagram.com/jeffreyshum/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/images/social/instagram.svg"}
						className={styles.socialIcon}
						alt="Instagram"
						title="Instagram"
					/>
				</a>
			</div>
			<a
				href="https://icons8.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Icons by Icons8
			</a>
		</footer>
	)
}

export default Footer
