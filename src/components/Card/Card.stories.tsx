import React, { PropsWithChildren } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import { H1, H2 } from "../Heading";

const Template: Story<PropsWithChildren<{}>> = (args) => <Card {...args} />;

const Composed = Template.bind({});
Composed.args = {
  children: (
    <>
      <CardHeader>
        <H1>This is a card</H1>
      </CardHeader>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra
        nisi sit amet ante fringilla, nec ultrices ligula elementum. Mauris
        elementum lorem hendrerit orci interdum ultricies. Vivamus hendrerit
        tincidunt urna lobortis lobortis. Vestibulum quis diam finibus libero
        dignissim porttitor. Praesent suscipit velit sed diam blandit, quis
        vehicula ipsum maximus.
      </p>
      <H2>Subtitle blah blah</H2>
      <p>
        Nullam vulputate mauris eget lectus tincidunt, a interdum odio
        fringilla. Morbi iaculis ex eget ligula finibus consectetur. Duis et
        nulla id tellus rutrum dictum vitae sit amet felis. Maecenas non nisl et
        justo blandit rhoncus. Suspendisse risus turpis, hendrerit non lorem eu,
        ullamcorper mattis purus.
      </p>
      <CardFooter>
        <p>This is a card</p>
      </CardFooter>
    </>
  ),
};

const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      This is a simple Card. Nam vestibulum lobortis nisl. Proin id enim
      lobortis, ornare nibh in, facilisis nisi. Donec varius massa sed dolor
      vestibulum, et lacinia nulla vehicula. Donec condimentum ligula sit amet
      iaculis suscipit. Mauris dapibus vel urna quis tristique. Proin accumsan
      fermentum ex, at pulvinar purus cursus sed. Vivamus volutpat eros arcu, id
      interdum risus dictum eu. Nullam tincidunt hendrerit tellus, nec facilisis
      nulla lobortis vestibulum. Fusce pellentesque eros vitae justo
      scelerisque, nec tempus tortor volutpat. Proin sollicitudin risus sit amet
      urna porttitor, a finibus sem hendrerit. Nunc at blandit urna.
    </>
  ),
};

const meta: Meta = {
  title: "Core/Card",
  component: Card,
};

export { Composed, Simple };
export default meta;
