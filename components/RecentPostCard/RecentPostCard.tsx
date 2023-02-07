import Link from "next/link"
import { FC } from "react"
import styles from "./RecentPostCard.module.css"
import { Post } from "../../pages"
import { useRouter } from "next/router"

const RecentPostCard: FC<Post> = (props) => {
	const router = useRouter()

	return (
		<div
			className={styles.card}
			onClick={(e) => {
				e.preventDefault()
				router.push(props.url)
			}}
		>
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.description}>{props.description}</p>
			<div className={styles.linkContainer}>
				<p className={styles.button}>Read More</p>
				<Link
					href={`/posts/${props.category}`}
					className={styles.category}
				>
					{props.category}
				</Link>
			</div>
		</div>
	)
}

export default RecentPostCard
