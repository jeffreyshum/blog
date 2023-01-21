import { FC, PropsWithChildren, useState } from "react"
import styles from "./Directory.module.css"
import classNames from "classnames"

interface DirectoryProps extends PropsWithChildren {
	name: string
	icon?: string
	expanded?: boolean
}

const Directory: FC<DirectoryProps> = (props) => {
	const [expanded, setExpanded] = useState(props.expanded)

	return (
		<div className={styles.directory}>
			<div
				className={styles.label}
				onClick={() => setExpanded(!expanded)}
			>
				<img
					src={
						props.icon
							? props.icon
							: "/images/icons/languages/directory.svg"
					}
					alt="Directory Icon"
					className={styles.icon}
				/>
				<p className={styles.name}>{props.name}</p>
			</div>
			{props.children && (
				<div
					className={classNames(
						styles.children,
						expanded ? styles.active : styles.inactive
					)}
				>
					{props.children}
				</div>
			)}
		</div>
	)
}

export default Directory
