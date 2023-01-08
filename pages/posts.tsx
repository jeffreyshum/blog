import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { IndexProps } from "."
import { fetchPosts } from "../utils"
import styles from "../styles/index.module.css"
import RecentPostCard from "../components/RecentPostCard"

const Posts: NextPage<IndexProps> = ({ recentPosts }) => {
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
			{recentPosts.map((post, i) => (
				<RecentPostCard {...post} key={i} />
			))}
		</>
	)
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			recentPosts: fetchPosts(),
		},
	}
}
