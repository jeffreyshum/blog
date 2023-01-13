import { Children, FC, PropsWithChildren, useState } from "react"
import styles from "./TabbedView.module.css"

const TabbedView: FC<PropsWithChildren> = (props) => {
	const childArray = Children.toArray(props.children)

	const [activeTab, setActiveTab] = useState(0)

	return (
		<div>
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
			<div>{childArray[activeTab]}</div>
		</div>
	)
}

export default TabbedView
