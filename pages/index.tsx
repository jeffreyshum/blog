import { GetStaticProps, NextPage } from "next"
import fs from "fs"
import matter from "gray-matter"
import RecentPostCard from "../components/RecentPostCard"
import styles from "../styles/index.module.css"

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

	console.log(posts.length)
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

	console.log(recentPosts)
	// sort posts by date
	recentPosts.sort((a, b) => {
		const dateA = new Date(a.originalDate)
		const dateB = new Date(b.originalDate)

		if (dateA.getTime() > dateB.getTime()) return -1
		if (dateA.getTime() < dateB.getTime()) return 1
		return 0
	})

	console.log(recentPosts)
	return {
		props: {
			recentPosts: recentPosts,
		},
	}
}
