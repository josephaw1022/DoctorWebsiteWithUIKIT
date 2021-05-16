<<<<<<< HEAD
import React from "react"

import { Page } from "./Page"
import * as HeaderStories from "./Header.stories"
=======
import React from "react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75

export default {
    title: "Example/Page",
    component: Page,
<<<<<<< HEAD
}

const Template = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
}
=======
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
>>>>>>> b97d3294b6b1f016c1d4556f96db9863cc60ca75
