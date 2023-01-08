import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { getMDXComponent } from "mdx-bundler/client"
import { useMemo } from "react"
import styles from "../styles/Post.module.css"
import { ParsedUrlQuery } from "querystring"
import fs from "fs"
import { bundleMDX } from "mdx-bundler"
import rehypePrism from "rehype-prism-plus"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import ArticleComponents from "../components/ArticleComponents"

export interface PostPageProps {
	code: string
	frontmatter: FrontMatter
}

export interface PostPageParams extends ParsedUrlQuery {}

export interface FrontMatter {
	title: string
	author: string
	description: string
	originalDate: string
	keywords: string
	editDate?: string
	category: string
	splash?: string
}

const PostPage: NextPage<PostPageProps> = ({ code, frontmatter }) => {
	const Component = useMemo(() => getMDXComponent(code), [code])

	return (
		<>
			<Head>
				<title>{frontmatter.title}</title>
				<meta name="description" content={frontmatter.description} />
				<meta name="keywords" content={frontmatter.keywords} />
				<meta name="author" content={frontmatter.author} />
				<meta name="og:title" content={frontmatter.title} />
				<meta name="og:description" content={frontmatter.description} />
				<meta name="og:type" content="article" />
				<meta
					name="og:image"
					content={`/images/splash/${frontmatter.splash}`}
				/>
				<meta name="og:image:size" content="1200x630" />
				<meta name="og:type" content="article" />
				<meta name="og:article:author" content={frontmatter.author} />
				<meta
					name="og:article:published_time"
					content={frontmatter.originalDate}
				/>
				{frontmatter.editDate && (
					<meta
						name="og:article:modified_time"
						content={frontmatter.editDate}
					/>
				)}
				<meta name="og:article:tag" content={frontmatter.category} />
			</Head>
			<article id={styles.article}>
				<div id={styles.frontMatter}>
					<h1 id={styles.title}>{frontmatter.title}</h1>
					<p id={styles.description}>{frontmatter.description}</p>
					<time
						dateTime={
							frontmatter.editDate || frontmatter.originalDate
						}
						id={styles.date}
					>
						Updated:{" "}
						{new Date(
							frontmatter.editDate || frontmatter.originalDate
						).toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</time>
				</div>
				<hr />
				<Component components={ArticleComponents} />
			</article>
		</>
	)
}

export default PostPage

export const getStaticProps: GetStaticProps<
	PostPageProps,
	PostPageParams
> = async ({ params }) => {
	const { post } = params!

	const fileName = `posts/${post}.mdx`
	const file = fs.readFileSync(fileName).toString()

	const { code, frontmatter }: { code: string; frontmatter: FrontMatter } =
		await bundleMDX({
			source: file,
			mdxOptions(options) {
				options.rehypePlugins = [
					...(options.rehypePlugins ?? []),
					rehypePrism,
					rehypeKatex,
				]
				options.remarkPlugins = [
					...(options.remarkPlugins ?? []),
					remarkMath,
				]
				return options
			},
		})

	return {
		props: {
			code,
			frontmatter,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = fs.readdirSync("posts")

	return {
		paths: posts.map((post) => ({
			params: { post: post.replace(".mdx", "") },
		})),
		fallback: false,
	}
}
