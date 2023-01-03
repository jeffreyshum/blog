import { FC, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import styles from "./ThemeButton.module.css"

const ThemeButton: FC = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark")
			}}
			className={styles.button}
		>
			<img
				src={`/images/icons/${theme}.png`}
				alt=""
				title="Toggle Theme"
				className={styles.image}
				loading="eager"
			/>
		</button>
	)
}

export default ThemeButton
