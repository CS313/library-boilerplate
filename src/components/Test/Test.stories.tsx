import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Test } from './Test';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Test', module);

stories.add('Test', () => <Test text={text('text', 'Some text')} />, {
   info: { inline: true },
   text: `
      ### Notes
        Simple example component
      ### Usage
        ~~~js
         <Test
          text="Some text"
         />
         ~~~`
});
