import { FC } from "react"
import styles from "./CodeTitle.module.css"

const CodeTitle: FC<{ name: string; language: string }> = ({
	name,
	language,
}) => {
	return (
		<div className={styles.title}>
			<img
				src={`/images/icons/languages/${language}.svg`}
				alt=""
				className={styles.icon}
			/>
			<p className={styles.name}>{name}</p>
		</div>
	)
}

export default CodeTitle
