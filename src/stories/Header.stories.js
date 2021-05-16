<<<<<<< HEAD
import React from "react"

import { Header } from "./Header"
=======
import React from "react";

import { Header } from "./Header";
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75

export default {
    title: "Example/Header",
    component: Header,
<<<<<<< HEAD
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
=======
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75
