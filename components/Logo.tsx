import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"

const StyledLogo = styled(Link)`
	font-family: var(--font-logo);
	font-size: var(--font-size-logo);
	letter-spacing: 3px;
`

const Logo: FC = () => {
	return <StyledLogo href="/">Jeffrey Shum</StyledLogo>
}

export default Logo
