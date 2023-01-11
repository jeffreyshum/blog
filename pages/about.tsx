import { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/error.module.css"

const AboutPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="About Jeffrey Shum's Blog" />
				<meta name="keywords" content="Jeffrey Shum, Blog" />
				<meta name="og:title" content="Jeffrey Shum - About" />
				<meta
					name="og:description"
					content="About Jeffrey Shum's Blog"
				/>
				<meta name="og:image" content="/images/splash/index.png" />
				<meta name="og:image:size" content="1200x630" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div id={styles.mainContent}>
				<h1 className={styles.heading}>About</h1>
				<p className={styles.description}>
					Jeffrey Shum is a web developer with a passion for creating
					visual and captivating experiences.
					<br />
					<a
						href="https://www.jeffreyshum.com/"
						className={styles.link}
					>
						More on Jeffrey Shum.
					</a>
				</p>
			</div>
		</>
	)
}

export default AboutPage
