import { GetStaticProps, NextPage } from "next"
import fs from "fs"
import matter from "gray-matter"
import RecentPostCard from "../components/RecentPostCard"
import styles from "../styles/index.module.css"
import Head from "next/head"

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
	const recentPosts: Array<Post> = []

	const posts = fs.readdirSync("posts")

	posts.forEach((post) => {
		const frontMatter = matter(fs.readFileSync(`posts/${post}`).toString())

		recentPosts.push({
			title: frontMatter.data.title,
			description: frontMatter.data.description,
			originalDate: frontMatter.data.originalDate,
			keywords: frontMatter.data.keywords,
			url: `/${post.replace(".mdx", "")}`,
			category: frontMatter.data.category,
		})
	})

	// sort posts by date
	recentPosts.sort((a, b) => {
		const dateA = new Date(a.originalDate)
		const dateB = new Date(b.originalDate)

		if (dateA.getTime() > dateB.getTime()) return -1
		if (dateA.getTime() < dateB.getTime()) return 1
		return 0
	})

	return {
		props: {
			recentPosts: recentPosts,
		},
	}
}
