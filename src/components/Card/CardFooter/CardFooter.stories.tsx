import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import CardFooter from "./CardFooter";

const Template: Story<PropsWithChildren<{}>> = (args) => (
  <CardFooter {...args} />
);

const Common = Template.bind({});
Common.args = {
  children: <p>This is a CardFooter</p>,
};

const meta: Meta = {
  title: "Core/Card/CardFooter",
  component: CardFooter,
  parameters: {
    componentSubtitle:
      "Displays any content you pass as a children inside the correct margin. This component is ment to be used strictly above the closing tag of the Card Component",
  },
};

export { Common };
export default meta;
