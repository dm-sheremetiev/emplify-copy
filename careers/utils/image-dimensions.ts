import { Image } from '../types/copy-types';

// Based on http://opensourcehacker.com/2011/12/01/calculate-aspect-ratio-conserving-resize-for-images-in-javascript/
export function calculateHeight({ width, height }: Image, givenWidth: number): number {
  const ratio = givenWidth / width;
  return Math.ceil(height * ratio);
}
