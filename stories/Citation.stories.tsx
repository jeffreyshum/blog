import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import Citation from "../components/ArticleComponents/Citation"

export default {
	title: "ArticleComponents/Citation",
	component: Citation,
} as ComponentMeta<typeof Citation>

const Template: ComponentStory<typeof Citation> = (args) => (
	<Citation {...args} />
)

export const Default = Template.bind({})
