import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"
import Logo from "./Logo"

const FooterContainer = styled.footer`
	background: var(--bg-footer);
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: var(--font-size-footer);
	margin-top: 2rem;
	padding-top: 1rem;
	padding-bottom: 3rem;
	text-align: center;
	transition: var(--theme-change-transition);
`

const SocialContainer = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
`

const SocialIcon = styled.img`
	height: 3rem;
`

const LinkContainer = styled.div`
	color: var(--text-color-primary);
	margin-bottom: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`

const CopyRight = styled.span`
	color: var(--text-color-date);
`

const StyledNextLink = styled(Link)`
	margin-left: 0.5rem;
	margin-right: 0.5rem;
`

const StyledLink = styled.a`
	margin-left: 0.5rem;
	margin-right: 0.5rem;
`

const Footer: FC = () => {
	return (
		<FooterContainer>
			<Logo />
			<br />
			<LinkContainer>
				<StyledNextLink href="/about">About</StyledNextLink>
				<StyledLink href="mailto:jeffreyshum0416@gmail.com">
					Contact
				</StyledLink>
				<StyledNextLink href="/privacy">Privacy</StyledNextLink>
			</LinkContainer>
			<CopyRight>
				Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
				Reserved.
			</CopyRight>
			<SocialContainer>
				<a
					href="https://github.com/jeffreyshum"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SocialIcon
						src={"/images/social/github.svg"}
						alt="GitHub"
						title="GitHub"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/shumjeffrey/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SocialIcon
						src={"/images/social/linkedin.svg"}
						alt="LinkedIn"
						title="LinkedIn"
					/>
				</a>
				<a
					href="https://www.instagram.com/jeffreyshum_/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SocialIcon
						src={"/images/social/instagram.svg"}
						alt="Instagram"
						title="Instagram"
					/>
				</a>
			</SocialContainer>
			<a
				href="https://icons8.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Icons by Icons8
			</a>
			<a
				href="https://github.com/vscode-icons/vscode-icons"
				target="_blank"
				rel="noopener noreferrer"
			>
				File icons by vscode-icons
			</a>
		</FooterContainer>
	)
}

export default Footer
