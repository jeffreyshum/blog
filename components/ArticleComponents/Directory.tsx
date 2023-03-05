import { FC, PropsWithChildren, useState } from "react"
import styled from "styled-components"

const StyledDirectory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background-color: var(--bg-code);
	padding-top: 1rem;
	padding-left: 0.5rem;
	padding-bottom: 1rem;
	overflow: auto;
	box-shadow: var(--box-shadow);
	border-radius: 5px;
	transition: background-color var(--theme-change-transition);
`

const Label = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
`

const Icon = styled.img`
	height: 1.75rem;
	margin-right: 5px;
`

const Name = styled.p`
	overflow-x: hidden;
	text-overflow: ellipsis;
`

const Children = styled.div`
	width: 95%;
	border-left: 2px dotted var(--text-color-primary);

	& > * {
		padding-top: 0;
		padding-bottom: 0;
		box-shadow: none;
		border-radius: 0;
	}
`

const Active = styled(Children)`
	display: block;
`

const Inactive = styled(Children)`
	display: none;
`

const Parent = styled(Label)`
	&:before {
		content: ">";
		transition: var(--theme-change-transition);
	}

	&:has(+ ${Active}):before {
		transform: rotate(90deg);
	}
`

interface DirectoryProps extends PropsWithChildren {
	name: string
	icon?: string
	expanded?: boolean
}

const Directory: FC<DirectoryProps> = (props) => {
	const [expanded, setExpanded] = useState(props.expanded)

	return (
		<StyledDirectory>
			{props.children ? (
				<Parent onClick={() => setExpanded(!expanded)}>
					<Icon
						src={
							props.icon
								? props.icon
								: "/images/icons/languages/directory.svg"
						}
						alt=""
					/>
					<Name>{props.name}</Name>
				</Parent>
			) : (
				<Label onClick={() => setExpanded(!expanded)}>
					<Icon
						src={
							props.icon
								? props.icon
								: "/images/icons/languages/directory.svg"
						}
						alt=""
					/>
					<Name>{props.name}</Name>
				</Label>
			)}
			{props.children &&
				(expanded ? (
					<Active>{props.children}</Active>
				) : (
					<Inactive>{props.children}</Inactive>
				))}
		</StyledDirectory>
	)
}

export default Directory
