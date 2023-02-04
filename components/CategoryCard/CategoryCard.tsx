import Link from "next/link"
import { FC } from "react"
import styles from "./CategoryCard.module.css"
import { categoryDescriptions } from "../../constants/category_descriptions"

const CategoryCard: FC<{
	category: string
	count: number
}> = (props) => {
	return (
		<Link
			href={`/posts/${props.category}`}
			className={styles.card}
			style={{
				backgroundColor: categoryDescriptions[props.category].color,
			}}
		>
			<div className={styles.left}>
				<img
					src={categoryDescriptions[props.category].image}
					className={styles.image}
					alt=""
				/>
			</div>
			<div className={styles.right}>
				<h1 className={styles.category}>{props.category}</h1>
				<p className={styles.description}>
					{categoryDescriptions[props.category].description}
				</p>
				<p className={styles.count}>{props.count} Posts</p>
			</div>
		</Link>
	)
}

export default CategoryCard
