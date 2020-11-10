import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import CardHeader from "./CardHeader";

const Template: Story<PropsWithChildren<{}>> = (args) => (
  <CardHeader {...args} />
);

const Common = Template.bind({});
Common.args = {
  children: "This is a CardHeader",
};

const meta: Meta = {
  title: "Core/Card/CardHeader",
  component: CardHeader,
  parameters: {
    componentSubtitle:
      "Displays any kind of data you pass as a children with the correct format and margins. This component is meant to be used below the opening tag of the Card Component.",
  },
};

export { Common };
export default meta;
