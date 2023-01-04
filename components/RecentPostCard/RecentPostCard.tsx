import Link from "next/link"
import { FC } from "react"
import styles from "./RecentPostCard.module.css"
import { Post } from "../../pages"

const RecentPostCard: FC<Post> = (props) => {
	return (
		<div className={styles.card}>
			<Link href={props.url}>
				<h1 className={styles.title}>{props.title}</h1>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.button}>Read More</p>
			</Link>
		</div>
	)
}

export default RecentPostCard
