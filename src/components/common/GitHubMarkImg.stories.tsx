import React from "react";
import { Story, Meta } from "@storybook/react";

import { GitHubMarkImg, GitHubMarkImgProps } from "./GitHubMarkImg";

export default {
    title: "Common/GitHubMarkImg",
    component: GitHubMarkImg,
} as Meta;

const Template: Story<GitHubMarkImgProps> = (args) => <GitHubMarkImg {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {};

export const Large = Template.bind({});
Large.args = {
    size: 128,
};

export const Small = Template.bind({});
Small.args = {
    size: 8,
};
