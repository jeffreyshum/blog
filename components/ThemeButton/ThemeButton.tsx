import { FC, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import styled from "styled-components"

const Button = styled.button`
	background-color: inherit;
	border: none;

	&:hover {
		cursor: pointer;
	}
`

const Image = styled.img`
	height: 2rem;
`

const ThemeButton: FC = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Button
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark")
			}}
		>
			<Image
				src={`/images/icons/${theme}.png`}
				alt=""
				title="Toggle Theme"
				loading="eager"
			/>
		</Button>
	)
}

export default ThemeButton
