import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';

export default function useGreenhouseReferral(): string {
  const [ghSrc, setGhSrc] = useLocalStorage('sbks.careers.gh_src', '');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('gh_src')) {
      setGhSrc(params.get('gh_src'));
    }
  }, [setGhSrc]);
  return ghSrc;
}
