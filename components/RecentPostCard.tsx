import Link from "next/link"
import { FC } from "react"
import styled, { css } from "styled-components"
import { Post } from "../pages"

const Underline = css`
	border-bottom: 1px solid transparent;
	transition: border-color var(--theme-change-transition);
	width: fit-content;

	&:hover {
		border-color: var(--text-color-article-link);
	}
`
const Card = styled.div`
	border: 1px solid transparent;
	padding: 0.5rem;
	border-radius: 5px;
	margin-bottom: 1rem;
	cursor: pointer;
	position: relative;

	&:hover {
		border-color: var(--text-color-article-link);
	}

	& * {
		z-index: 2;
	}
`

const CardTitle = styled.h1`
	font-size: 1.5rem;
	${Underline}
`

const CardLink = styled.a`
	&:after {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
`

const CardDescription = styled.p``

const LinkContainer = styled.div`
	display: flex;
`

const ReadMore = styled.span`
	width: fit-content;
	${Underline}
`

const Category = styled.span`
	margin-left: auto;
	color: var(--font-color-category);
`

const RecentPostCard: FC<Post> = (props) => {
	return (
		<Card>
			<CardLink href={props.url} />
			<CardTitle>{props.title}</CardTitle>
			<CardDescription>{props.description}</CardDescription>
			<LinkContainer>
				<ReadMore>
					<Link href={props.url}>Read More</Link>
				</ReadMore>
				<Category>
					<Link href={`/posts/${props.category}`}>
						{props.category}
					</Link>
				</Category>
			</LinkContainer>
		</Card>
	)
}

export default RecentPostCard
