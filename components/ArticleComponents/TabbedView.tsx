import { Children, FC, PropsWithChildren, useRef, useState } from "react"
import styled from "styled-components"

const SelectContainer = styled.div`
	margin-top: 1rem;
	background-color: var(--bg-code);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	transition: var(--theme-change-transition);
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	padding-top: 5px;
	display: flex;
	overflow-y: auto;
	padding-bottom: 5px;
	flex-wrap: wrap;
	z-index: 3;

	& #active {
		border-color: var(--text-color-article-link);
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`

const SelectButton = styled.button`
	background: inherit;
	border: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: max(25%, 10rem);
	border-bottom: 1px solid transparent;

	& > * {
		margin-top: 0;
		margin-bottom: 0;
	}

	&:hover {
		border-color: var(--text-color-primary);
	}
`

const TabbedContainer = styled.div`
	background-color: var(--bg-code);
	box-shadow: var(--box-shadow);
	transition: background-color var(--theme-change-transition);
`

const TabbedContent = styled.div`
	padding-top: 5px;
	padding-left: 5px;
	padding-right: 5px;
	padding-bottom: 1rem;
`

interface TabbedViewProps extends PropsWithChildren {
	labels?: boolean
}

const TabbedView: FC<TabbedViewProps> = (props) => {
	const childArray = Children.toArray(props.children)
	const ContainerRef = useRef<HTMLDivElement>(null)
	const [activeTab, setActiveTab] = useState(props.labels ? 1 : 0)

	if (props.labels) {
		return (
			<>
				<SelectContainer ref={ContainerRef}>
					{childArray
						.filter((child, index) => index % 2 === 0)
						.map((Label, index) => (
							<SelectButton
								key={index}
								onClick={(e) => {
									setActiveTab(index * 2 + 1)
									if (!ContainerRef.current) return
									ContainerRef.current
										.querySelectorAll(`#active`)
										.forEach((el) => {
											el.id = ""
										})
									e.currentTarget.id = "active"
								}}
								id={
									index === (activeTab - 1) / 2
										? "active"
										: ""
								}
							>
								{Label}
							</SelectButton>
						))}
				</SelectContainer>
				<TabbedContainer>
					<TabbedContent>{childArray[activeTab]}</TabbedContent>
				</TabbedContainer>
			</>
		)
	}

	return (
		<>
			<SelectContainer>
				{childArray.map((child, index) => (
					<SelectButton
						key={index}
						onClick={(e) => {
							setActiveTab(index)
						}}
					>
						{index}
					</SelectButton>
				))}
			</SelectContainer>
			<TabbedContainer>
				<TabbedContent>{childArray[activeTab]}</TabbedContent>
			</TabbedContainer>
		</>
	)
}

export default TabbedView
