import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { H4 } from "./Headings";

const Template: Story = (args) => <H4 {...args} />;
const Common = Template.bind({});
Common.args = {
  children: "Heading 4",
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
  title: "Typography/H4",
  component: H4,
};

export { Common, Colorless, Secondary };
export default meta;
