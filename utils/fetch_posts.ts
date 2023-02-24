import fs from "fs"
import matter from "gray-matter"
import { Post } from "../pages"
import glob from "glob"

const fetchPosts = () => {
	const recentPosts: Array<Post> = []

	const files = glob.sync("posts" + "/**/*.mdx")

	files.forEach((file) => {
		const frontMatter = matter(fs.readFileSync(file).toString())

		recentPosts.push({
			title: frontMatter.data.title,
			description: frontMatter.data.description,
			originalDate: frontMatter.data.originalDate,
			keywords: frontMatter.data.keywords,
			path: file,
			url: `/${file.split("/").slice(-1).join("").replace(".mdx", "")}`,
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
