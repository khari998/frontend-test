import * as React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Main from '../pages/Main';

storiesOf("Main", module).add("Initial Render", () => <Main />);

