import { configure, addParameters } from '@storybook/html';

addParameters({
  backgrounds: [
    { name: "Default", value: "#FFFFFF", default: false },
    { name: "Night mode", value: "#000000", default: false },
    { name: "Green screen", value: "#00b140", default: true }
  ]
});


// automatically import all files ending in *.ts
configure(require.context('../stories', true, /\.ts$/), module);
