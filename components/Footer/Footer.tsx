import Link from "next/link"
import { FC } from "react"
import Logo from "../Logo"
import styles from "./Footer.module.css"

const Footer: FC = () => {
	return (
		<footer id={styles.footer}>
			<Logo />
			<br />
			<div id={styles.linkContainer}>
				<Link href="/about" className={styles.link}>
					About
				</Link>
				<a
					href="mailto:jeffreyshum0416@gmail.com"
					className={styles.link}
				>
					Contact
				</a>
				<Link href="/privacy" className={styles.link}>
					Privacy
				</Link>
			</div>
			<span className={styles.copyright}>
				Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
				Reserved.
			</span>
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
					href="https://www.linkedin.com/in/shumjeffrey/"
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
					href="https://www.instagram.com/jeffreyshum_/"
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
			<a
				href="https://github.com/vscode-icons/vscode-icons"
				target="_blank"
				rel="noopener noreferrer"
			>
				File icons by vscode-icons
			</a>
		</footer>
	)
}

export default Footer
