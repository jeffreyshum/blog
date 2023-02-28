import { FC, useEffect, useRef } from "react"
import Logo from "./Logo"
import ThemeButton from "./ThemeButton"
import Link from "next/link"
import styled from "styled-components"

const HeaderContainer = styled.header`
	position: sticky;
	z-index: 999;
	background: var(--bg-header);
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 10px;
	padding-bottom: 5px;
	margin-bottom: 1rem;
	top: 0;
	transition: inherit;
	display: flex;
`

const Left = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
`

const Right = styled.nav`
	flex: 1;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	padding-right: 4rem;
	height: 100%;

	@media (max-width: 768px) {
		display: none;
	}
`

const NavLink = styled(Link)`
	font-family: var(--font-logo);
	font-size: var(--font-size-logo);
	margin-top: -0.5rem;
	margin-right: 1rem;
	text-align: center;
	border-bottom: 1px solid transparent;
	transition: var(--theme-change-transition);

	&:hover {
		border-color: var(--text-color-article-link);
	}
`

const MobileLink = styled(Link)`
	border-bottom: 1px solid transparent;
	transition: var(--theme-change-transition);

	&:hover {
		border-color: var(--text-color-article-link);
	}
`

const Toggle = styled.input`
	position: absolute;
	height: calc(var(--font-size-logo) * 1.5);
	width: calc(var(--font-size-logo) * 1.5);
	cursor: pointer;
	right: 3.75rem;
	top: -0.25rem;
	opacity: 0;
	z-index: 1000;
`

const Menu = styled.div`
	position: absolute;
	right: -50vw;
	top: 2rem;
	font-size: var(--font-size-logo);
	padding-top: 0.25rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid var(--text-color-primary);
	background-color: var(--bg-primary);
	transition: var(--theme-change-transition);
	text-align: center;
	font-family: var(--font-logo);

	& > * {
		margin-top: 0.5rem;
	}
`

// Hamburger code inspired by codepen.io/alvarotrigo/pen/wvrzPWL
const Hamburger = styled.div`
	display: block;
	height: var(--font-size-logo);
	width: var(--font-size-logo);
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	top: 0.25rem;
	right: 4.5rem;
`

const Line = styled.span`
	height: 4px;
	width: 125%;
	border-radius: 5px;
	background: var(--text-color-primary);
`

const Line1 = styled(Line)`
	transform-origin: 0% 0%;
	transition: transform 0.4s ease-in-out;
`

const Line2 = styled(Line)`
	transition: transform 0.2s ease-in-out;
`

const Line3 = styled(Line)`
	transform-origin: 0% 100%;
	transition: transform 0.4s ease-in-out;
`

const MobileContainer = styled.div`
	display: none;
	padding-right: 4rem;
	position: relative;

	@media (max-width: 768px) {
		display: block;
	}

	& ${Toggle}:checked ~ ${Menu} {
		display: block;
		right: 4.25rem;
	}

	& ${Toggle}:checked ~ ${Hamburger} ${Line1} {
		transform: rotate(45deg);
	}

	& ${Toggle}:checked ~ ${Hamburger} ${Line2} {
		transform: scaleY(0);
	}

	& ${Toggle}:checked ~ ${Hamburger} ${Line3} {
		transform: rotate(-45deg);
	}
`

const Header: FC = () => {
	const headerRef = useRef<HTMLDivElement>(null)
	const toggleRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const handleClickOut = (e: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(e.target as Node)
			) {
				close()
			}
		}

		const close = () => {
			if (toggleRef.current) toggleRef.current.checked = false
		}

		document.addEventListener("mousedown", handleClickOut)
		document.addEventListener("scroll", close)

		return () => {
			document.removeEventListener("mousedown", handleClickOut)
			document.removeEventListener("scroll", close)
		}
	}, [])

	return (
		<HeaderContainer ref={headerRef}>
			<Left>
				<Logo />
			</Left>
			<Right>
				<ThemeButton />
				<NavLink href="/posts">Posts</NavLink>
			</Right>
			<MobileContainer>
				<Toggle type="checkbox" ref={toggleRef} />
				<Hamburger>
					<Line1 />
					<Line2 />
					<Line3 />
				</Hamburger>
				<Menu>
					<MobileLink href="/posts">Posts</MobileLink>
					<ThemeButton />
				</Menu>
			</MobileContainer>
		</HeaderContainer>
	)
}

export default Header
