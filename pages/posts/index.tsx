import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { fetchCategoriesAndCounts } from "../../utils"
import styles from "../../styles/index.module.css"
import CategoryCard from "../../components/CategoryCard/CategoryCard"

const Posts: NextPage<{
	categories: Array<[string, number]>
}> = ({ categories }) => {
	return (
		<>
			<Head>
				<title>Jeffrey Shum - Blog</title>
				<meta
					name="description"
					content="All posts from Jeffrey Shum's Blog"
				/>
				<meta name="keywords" content="Jeffrey Shum, Blog" />
				<meta name="author" content="Jeffrey Shum" />
				<meta name="og:title" content="All Posts" />
				<meta
					name="og:description"
					content="All posts from Jeffrey Shum's Blog"
				/>
				<meta name="og:image" content="/images/splash/index.png" />
				<meta name="og:image:size" content="1200x630" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="All Posts" />
			</Head>
			<div className={styles.title}>
				<h1>All Posts</h1>
			</div>
			<div className={styles.cardContainer}>
				{categories.map((category, i) => (
					<CategoryCard
						category={category.at(0) as string}
						count={category.at(1) as number}
						key={i}
					/>
				))}
			</div>
		</>
	)
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			categories: Array.from(fetchCategoriesAndCounts()),
		},
	}
}
