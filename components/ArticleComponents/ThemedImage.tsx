import { useTheme } from "next-themes"
import { FC } from "react"
import styled from "styled-components"

const Image = styled.img`
	width: 100%;
	object-fit: contain;
`
interface ThemedImageProps {
	light: string
	dark: string
	alt: string
}

const ThemedImage: FC<ThemedImageProps> = ({ light, dark, alt }) => {
	const { theme } = useTheme()

	return <Image src={theme === "dark" ? dark : light} alt={alt} />
}

export default ThemedImage
