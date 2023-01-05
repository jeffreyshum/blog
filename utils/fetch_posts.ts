import fs from "fs"
import matter from "gray-matter"
import { Post } from "../pages"

const fetchPosts = () => {
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

    return recentPosts
}

export default fetchPosts