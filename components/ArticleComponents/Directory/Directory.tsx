import { FC, PropsWithChildren } from "react"
import styles from "./Directory.module.css"

interface DirectoryProps extends PropsWithChildren {
	name: string
	icon?: string
}

const Directory: FC<DirectoryProps> = (props) => {
	return (
		<div className={styles.directory}>
			<div className={styles.label}>
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
				<div className={styles.children}>{props.children}</div>
			)}
		</div>
	)
}

export default Directory
