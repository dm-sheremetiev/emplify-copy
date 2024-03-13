import { extractProspectPostId } from './internal-transform';
import sectionsFixture from '../__fixtures__/sections.json';
import { SectionsResponse } from '../types/greenhouse-types';

describe('.extractProspectPostId', () => {
  it('extracts ID of first job in first section', () => {
    const actual = extractProspectPostId(sectionsFixture);
    expect(actual).toBe('4110105003');
  });
  it('returns null for empty sections response', () => {
    const sectionsResponse: SectionsResponse = { sections: [], etag: 'foo' };
    expect(extractProspectPostId(sectionsResponse)).toBeNull();
  });
  it('returns null for section with no jobs', () => {
    const sectionsResponse: SectionsResponse = {
      etag: 'foo',
      sections: [
        {
          id: 123,
          name: 'Empty section',
          jobs: []
        }
      ]
    };
    expect(extractProspectPostId(sectionsResponse)).toBeNull();
  });
});
