import { renderHook } from '@testing-library/react-hooks';
import useGreenhouseReferrer from './use-greenhouse-referrer';

describe('useGreenhouseReferrer', () => {
  const mockDomain = 'https://www.example.com';

  // based on https://github.com/facebook/jest/issues/5124#issuecomment-641088557
  class MockLocation extends URL {
    ancestorOrigins = [];
    toString = jest.fn().mockImplementation(() => super.toString());
    assign = jest.fn((href) => (this.href = href));
    replace = jest.fn((href) => (this.href = href));
    reload = jest.fn();

    onWindow(window) {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: this
      });
      return this;
    }
  }

  function changeLocation(location) {
    window.location.href = `${mockDomain}/${location}`;
  }

  beforeAll(() => {
    new MockLocation(mockDomain).onWindow(window);
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  describe('on first visit', () => {
    beforeEach(() => {
      changeLocation('?gh_src=test12345&utm_source=testsource&utm_campaign=none');
    });
    it('saves referrer on direct access', () => {
      const { result } = renderHook(() => useGreenhouseReferrer());
      expect(result.current).toBe('test12345');
    });
    it('saves referrer and rememebers it after page is changed', () => {
      renderHook(() => useGreenhouseReferrer());
      changeLocation('somepage');
      const { result } = renderHook(() => useGreenhouseReferrer());
      expect(result.current).toBe('test12345');
    });
  });

  describe('on consecutive visit', () => {
    beforeEach(() => {
      window.localStorage.setItem('sbks.careers.gh_src', 'some54321');
    });
    it('keeps original referrer when new value is not present', () => {
      changeLocation('');
      const { result } = renderHook(() => useGreenhouseReferrer());
      expect(result.current).toBe('some54321');
    });
    it('updates original referrer when provided with new value', () => {
      changeLocation('?gh_src=new12345&utm_source=testsource&utm_campaign=none');
      const { result } = renderHook(() => useGreenhouseReferrer());
      expect(result.current).toBe('new12345');
    });
  });

  describe('on visit without gh_src query param', () => {
    it('does not store anything', () => {
      window.localStorage.clear();
      changeLocation('');
      const { result } = renderHook(() => useGreenhouseReferrer());
      expect(result.current).toBe('');
    });
  });
});
