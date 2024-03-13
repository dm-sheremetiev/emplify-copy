import React from 'react';
import {
  withKnobs,
  select,
  boolean
} from "@storybook/addon-knobs";
import TranslationButton, { TranslationButtonGroup } from './TranslationButton';

export default {
  title: 'Button/Translation Button',
  component: TranslationButton,
  decorators: [withKnobs]
};

export const Playground = () => <TranslationButton text={select('type', ['EN', 'FR', 'DE'], 'EN')} isActive={boolean('isActive', false)} />;

export const Variations = () => {
  return (
    <div>
      <TranslationButton text="EN" isActive={false} />
      <TranslationButton text="EN" isActive={true} />
    </div>
  )
}

export const Group = () => {
  return (
    <>
      <TranslationButtonGroup>
        <TranslationButton text="EN" isActive={true} />
        <TranslationButton text="FR" isActive={false} />
        <TranslationButton text="DE" isActive={false} />
      </TranslationButtonGroup>
    </>
  )
}