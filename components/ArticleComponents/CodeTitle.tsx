import { FC } from "react"
import styled from "styled-components"

const StyledCodeTitle = styled.div`
	background-color: var(--bg-code);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	width: max(25%, 150px);
	position: relative;
	margin-top: 0.5rem;
	margin-bottom: -1em;
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	display: flex;
	align-items: center;
	transition: background-color var(--theme-change-transition);
`

const Icon = styled.img`
	height: 1.75rem;
	margin-right: 5px;
`

const Name = styled.p`
	overflow-x: hidden;
	text-overflow: ellipsis;
`

const CodeTitle: FC<{ name: string; language: string }> = ({
	name,
	language,
}) => {
	return (
		<StyledCodeTitle title={name}>
			<Icon src={`/images/icons/languages/${language}.svg`} alt="" />
			<Name>{name}</Name>
		</StyledCodeTitle>
	)
}

export default CodeTitle
