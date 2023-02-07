import { FC } from "react"
import styles from "./Citation.module.css"

interface CitationProps {
	type: "AMS"
	firstName?: string
	lastName?: string
	title: string
	volume?: number
	publisher?: string
	publisherLocation?: string
	year?: number
}

const Citation: FC<CitationProps> = (props) => {
	return (
		<li>
			<span className={styles.author}>
				{props.firstName} {props.lastName}
			</span>
			<span className={styles.title}>{props.title}</span>
			<span className={styles.volume}>{props.volume}</span>
			<span className={styles.publisher}>{props.publisher}</span>
			<span className={styles.publisherLocation}>
				{props.publisherLocation}
			</span>
			<span className={styles.year}>{props.year}</span>
		</li>
	)
}

export default Citation
