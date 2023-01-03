import { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/prism-one-dark.scss"
import "../styles/prism-one-light.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "next-themes"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<div id="app">
				<Header />
				<div id="content">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default App
