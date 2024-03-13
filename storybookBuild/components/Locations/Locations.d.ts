import { ReactNode } from 'react';
import './Locations.scss';
export type LocationsProps = {
    id?: string;
    name: string;
    address: string;
};
export type LocationsGroupProps = {
    id?: string;
    title: string;
    locationsChildren: ReactNode;
};
declare const Locations: (props: LocationsProps) => JSX.Element;
declare const LocationsGroup: (props: LocationsGroupProps) => JSX.Element;
export { Locations, LocationsGroup };
export default Locations;
