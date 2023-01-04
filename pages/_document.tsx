import { Head, Html, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
					integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
					crossOrigin="anonymous"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
