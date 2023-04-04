import RSS from "rss"
import fs from "fs"
import { fetchPosts } from "."

const generateFeed = async () => {
	const url = "https://blog.jeffreyshum.com/"

	const feed = new RSS({
		title: "Jeffrey Shum's Blog",
		feed_url: `${url}rss.xml`,
		site_url: url,
		description:
			"Jeffrey Shum's blog featuring developer logs and occasional dabbles in mathematics.",
		copyright: "2023-Present Jeffrey Shum",
		language: "en",
	})

	const posts = fetchPosts()

	posts.forEach((post, i) => {
		if (i >= 20) return
		feed.item({
			title: post.title,
			description: post.description,
			url: url + post.url,
			date: post.originalDate,
			categories: [post.category],
		})
	})

	fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }))
}

export default generateFeed
