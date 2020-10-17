import React from 'react';

import { Button } from './button';

export default {
  title: 'StorybookDemo/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};