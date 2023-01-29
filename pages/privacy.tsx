import { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/generalPage.module.css"

const PrivacyPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy</title>
				<meta name="description" content="Privacy Policy" />
				<meta name="keywords" content="Jeffrey Shum, Blog" />
				<meta name="og:title" content="Privacy Policy" />
				<meta name="og:description" content="Privacy Policy" />
			</Head>
			<div id={styles.mainContent}>
				<h1 className={styles.heading}>Privacy Policy</h1>
				<p className={styles.description}>
					This website does not currently collect any personal data.
				</p>
			</div>
		</>
	)
}

export default PrivacyPage
