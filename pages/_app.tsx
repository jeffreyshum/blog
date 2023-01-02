import { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/prism-one-dark.scss"
import "../styles/prism-one-light.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<div id="app" data-theme="dark">
				<Header />
				<div id="content">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
