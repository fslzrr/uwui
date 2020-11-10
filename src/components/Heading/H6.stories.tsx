import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { H6 } from "./Headings";

const Template: Story = (args) => <H6 {...args} />;
const Common = Template.bind({});
Common.args = {
  children: "Heading 6",
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
  title: "Typography/H6",
  component: H6,
};

export { Common, Colorless, Secondary };
export default meta;
