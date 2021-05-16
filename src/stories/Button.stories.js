<<<<<<< HEAD
import React from "react"

import { Button } from "./Button"
=======
import React from "react";

import { Button } from "./Button";
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
<<<<<<< HEAD
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Button",
}

export const Large = Template.bind({})
Large.args = {
    size: "large",
    label: "Button",
}

export const Small = Template.bind({})
Small.args = {
    size: "small",
    label: "Button",
}
=======
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75
