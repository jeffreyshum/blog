import { FC } from "react"
import styled from "styled-components"

interface CitationProps {
	type?: "AMS"
	firstName?: string
	lastName?: string
	title: string
	volume?: number
	publisher?: string
	publisherLocation?: string
	year?: number
	doi?: string
	link?: string
}

const Container = styled.li`
	list-style: none;
`

const Italics = styled.span`
	font-style: italic;
`

const CommaAfter = styled.span`
	&:after {
		content: ", ";
	}
`

const PeriodAfter = styled.span`
	&:after {
		content: ". ";
	}
`

const Link = styled.a`
	color: var(--text-color-article-link);
`

const Citation: FC<CitationProps> = (props) => {
	switch (props.type) {
		case "AMS":
			return (
				<Container>
					<CommaAfter>
						{props.firstName} {props.lastName}
					</CommaAfter>
					<Italics>{props.title}</Italics>
					{props.volume && <CommaAfter>{props.volume}</CommaAfter>}
					{props.publisher && (
						<CommaAfter>{props.publisher}</CommaAfter>
					)}
					{props.publisherLocation && (
						<CommaAfter>{props.publisherLocation}</CommaAfter>
					)}
					{props.year && <PeriodAfter>{props.year}</PeriodAfter>}
					{props.doi && (
						<PeriodAfter>
							<Link
								href={`https://doi.org/${props.doi}`}
								target="_blank"
								rel="noreferrer"
							>
								doi:{props.doi}
							</Link>
						</PeriodAfter>
					)}
					{props.link && (
						<PeriodAfter>
							<Link
								href={props.link}
								target="_blank"
								rel="noreferrer"
							>
								{props.link}
							</Link>
						</PeriodAfter>
					)}
				</Container>
			)
		default:
			return <></>
	}
}

export default Citation
