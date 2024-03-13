import React from 'react';
import Locations, {LocationsGroup} from '../Locations/Locations';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Locations / Locations',
  component: Locations,
  decorators: [withKnobs],
};

export const Playground = () => (
  <>
    <LocationsGroup title="Awards title" locationsChildren={
      <>
        <Locations name="New York" address="4400 Easton Commons Suite 250 Columbus, OH 43219 United States"/>
        <Locations name="Columbus" address="4400 Easton Commons Suite 250 Columbus, OH 43219 United States"/>
        <Locations name="Columbus" address="4400 Easton Commons Suite 250 Columbus, OH 43219 United States"/>
        <Locations name="Columbus" address="4400 Easton Commons Suite 250 Columbus, OH 43219 United States"/>
        <Locations name="Vancouver" address="IQ Offices 1055 West Georgia Street Vancouver BC V6E 3P3 Canada"/>
      </>
    }
    />
  </>
)
