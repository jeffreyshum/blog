import Link from "next/link"
import { FC } from "react"
import { categoryDescriptions } from "../constants/category_descriptions"
import styled from "styled-components"

const Card = styled(Link)`
	padding: 0.5rem;
	border-radius: 5px;
	margin-bottom: 1rem;
	text-align: center;
	height: 10rem;
	cursor: pointer;
	display: flex;
	box-shadow: var(--thick-box-shadow);
	color: var(--font-color-card);
	transition: transform var(--theme-change-transition);

	@media (prefers-reduced-motion: no-preference) {
		 &:hover { transform: scale(1.05); }
    }
}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const Image = styled.img`
	object-fit: cover;
`

const Category = styled.h1`
	font-size: 1.75rem;
`

const Description = styled.p`
	margin: auto 0;
`

const Count = styled.p`
	font-size: 1.25rem;
	margin-top: auto;
`

const CategoryCard: FC<{
	category: string
	count: number
}> = (props) => {
	return (
		<Card
			href={`/posts/${props.category}`}
			style={{
				backgroundColor: categoryDescriptions[props.category].color,
			}}
		>
			<Left>
				<Image
					src={categoryDescriptions[props.category].image}
					alt=""
				/>
			</Left>
			<Right>
				<Category>{props.category}</Category>
				<Description>
					{categoryDescriptions[props.category].description}
				</Description>
				<Count>{props.count} Posts</Count>
			</Right>
		</Card>
	)
}

export default CategoryCard
