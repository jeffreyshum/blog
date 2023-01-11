import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../styles/error.module.css"

const Error404: NextPage = () => {
	return (
		<>
			<Head>
				<title>404 - Unknown Page</title>
				<meta name="description" content="Unknown Page" />
				<meta name="keywords" content="Jeffrey Shum, Blog" />
			</Head>
			<div id={styles.mainContent}>
				<h1 className={styles.heading}>Error 404</h1>
				<p className={styles.description}>
					Looks like the page you are trying to request could not be
					found.
				</p>
				<Link href="/" className={styles.link}>
					Click here to return to the homepage.
				</Link>
			</div>
		</>
	)
}

export default Error404
