import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import RecentPostCard from "../../components/RecentPostCard"
import { fetchCategories, fetchPosts } from "../../utils"
import { Post } from "../index"
import styles from "../../styles/index.module.css"
import Head from "next/head"

const CategoryPage: NextPage<{
	categoryPosts: Array<Post>
	category: string
}> = ({ categoryPosts, category }) => {
	return (
		<>
			<Head>
				<title>{category} - Jeffrey Shum - Blog</title>
				<meta name="keywords" content="Jeffrey Shum, Blog" />
				<meta name="author" content="Jeffrey Shum" />
				<meta
					name="og:title"
					content={`${category} - Jeffrey Shum - Blog`}
				/>
				<meta name="og:image" content="/images/splash/index.png" />
				<meta name="og:image:size" content="1200x630" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`${category} - Jeffrey Shum - Blog`}
				/>
			</Head>
			<div className={styles.title}>
				<h1>{category}</h1>
			</div>
			{categoryPosts.map((post, i) => (
				<RecentPostCard {...post} key={i} />
			))}
		</>
	)
}

export default CategoryPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return {
		props: {
			categoryPosts: fetchPosts().filter(
				(post) => post.category === params!.category
			),
			category: params!.category,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = fetchCategories()
	const paths = new Array<{ params: { category: string } }>()
	categories.forEach((key) =>
		paths.push({
			params: {
				category: key,
			},
		})
	)

	return {
		paths: paths,
		fallback: false,
	}
}
