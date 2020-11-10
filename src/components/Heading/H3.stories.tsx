import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { H3 } from "./Headings";

const Template: Story = (args) => <H3 {...args} />;
const Common = Template.bind({});
Common.args = {
  children: "Heading 3",
};

const Colorless = Template.bind({});
Colorless.args = {
  ...Common.args,
  type: "colorless",
};

const Secondary = Template.bind({});
Secondary.args = {
  ...Common.args,
  type: "secondary",
};

const meta: Meta = {
  title: "Typography/H3",
  component: H3,
};

export { Common, Colorless, Secondary };
export default meta;
