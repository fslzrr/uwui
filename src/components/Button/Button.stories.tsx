import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const Primary = Template.bind({});
Primary.args = {
  children: "Click me!",
};

const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: "secondary",
};

const Destructive = Template.bind({});
Destructive.args = {
  ...Primary.args,
  type: "destructive",
};

const Stretched = Template.bind({});
Stretched.args = {
  ...Primary.args,
  stretch: true,
};

const meta: Meta = {
  title: "Core/Button",
  component: Button,
};

export { Primary, Secondary, Destructive, Stretched };
export default meta;
