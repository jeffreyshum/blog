import { FC } from "react"
import styles from "./Citation.module.css"

interface CitationProps {
	type?: "AMS"
	firstName?: string
	lastName?: string
	title: string
	volume?: number
	publisher?: string
	publisherLocation?: string
	year?: number
	doi?: string
	link?: string
}

const Citation: FC<CitationProps> = (props) => {
	return (
		<li className={styles.citation}>
			<span className={styles.author}>
				{props.firstName} {props.lastName}
			</span>
			<span className={styles.title}>{props.title}</span>
			{props.volume && (
				<span className={styles.volume}>{props.volume}</span>
			)}
			{props.publisher && (
				<span className={styles.publisher}>{props.publisher}</span>
			)}
			{props.publisherLocation && (
				<span className={styles.publisherLocation}>
					{props.publisherLocation}
				</span>
			)}
			{props.year && <span className={styles.year}>{props.year}</span>}
			{props.doi && (
				<span className={styles.doi}>
					<a
						href={`https://doi.org/${props.doi}`}
						target="_blank"
						rel="noreferrer"
					>
						doi:{props.doi}
					</a>
				</span>
			)}
			{props.link && (
				<span className={styles.link}>
					<a href={props.link} target="_blank" rel="noreferrer">
						{props.link}
					</a>
				</span>
			)}
		</li>
	)
}

export default Citation
