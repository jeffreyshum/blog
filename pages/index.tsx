import { GetStaticProps, NextPage } from "next"
import RecentPostCard from "../components/RecentPostCard"
import styles from "../styles/index.module.css"
import Head from "next/head"
import { fetchPosts } from "../utils"

export interface IndexProps {
	recentPosts: Array<Post>
}

export interface Post {
	title: string
	description: string
	originalDate: string
	keywords: string
	url: string
	category: string
}

const Index: NextPage<IndexProps> = ({ recentPosts }) => {
	return (
		<>
			<Head>
				<title>Jeffrey Shum - Blog</title>
				<meta name="description" content="Jeffrey Shum's Blog" />
				<meta name="keywords" content="Jeffrey Shum, Blog" />
				<meta name="author" content="Jeffrey Shum" />
				<meta name="og:title" content="Jeffrey Shum - Blog" />
				<meta name="og:description" content="Jeffrey Shum's Blog" />
				<meta name="og:image" content="/images/splash/index.png" />
				<meta name="og:image:size" content="1200x630" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Jeffrey Shum Blog" />
			</Head>
			<div className={styles.title}>
				<h1>Recent Posts</h1>
			</div>
			{recentPosts.map((post, i) => (
				<RecentPostCard {...post} key={i} />
			))}
		</>
	)
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			recentPosts: fetchPosts().slice(0, 4),
		},
	}
}
