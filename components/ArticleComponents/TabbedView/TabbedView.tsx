import { Children, FC, PropsWithChildren, useState } from "react"
import styles from "./TabbedView.module.css"

interface TabbedViewProps extends PropsWithChildren {
	labels?: boolean
}

const TabbedView: FC<TabbedViewProps> = (props) => {
	const childArray = Children.toArray(props.children)

	const [activeTab, setActiveTab] = useState(props.labels ? 1 : 0)

	if (props.labels) {
		return (
			<>
				<div className={styles.selectContainer}>
					{childArray
						.filter((child, index) => index % 2 === 0)
						.map((Label, index) => (
							<button
								key={index}
								onClick={(e) => {
									setActiveTab(index * 2 + 1)
									document
										.querySelectorAll(`#${styles.active}`)
										.forEach((el) => {
											el.id = ""
										})
									e.currentTarget.id = styles.active
								}}
								className={styles.selectItem}
								id={
									index === (activeTab - 1) / 2
										? styles.active
										: ""
								}
							>
								{Label}
							</button>
						))}
				</div>
				<div className={styles.tabbedContainer}>
					<div className={styles.tabbedContent}>
						{childArray[activeTab]}
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div className={styles.selectContainer}>
				{childArray.map((child, index) => (
					<div
						key={index}
						onClick={(e) => {
							setActiveTab(index)
						}}
						className={styles.selectItem}
					>
						{index}
					</div>
				))}
			</div>
			<div className={styles.tabbedContainer}>
				<div className={styles.tabbedContent}>
					{childArray[activeTab]}
				</div>
			</div>
		</>
	)
}

export default TabbedView
