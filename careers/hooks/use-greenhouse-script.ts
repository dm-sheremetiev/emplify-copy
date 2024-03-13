/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

/* Variation of the useScript hook for Greenhouse
 *
 * Job board script is tied to a single job board, but we want to swap it dynamically, i.e. force the script to rerun.
 * This is not good for useScript since it keeps check of all previously loaded scripts; if we go EN -> FR -> EN, the EN would be handled as already loaded
 * and FR version would be used.
 * So instead we keep check only of the last loaded board token to prevent reloading while we are at a single locale and force the script load when the token changes.
 */

let loadedBoardToken: string;

export function useGreenhouseScript(boardToken: string): [boolean, boolean] {
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(() => {
    if (loadedBoardToken === boardToken) {
      setState({
        loaded: true,
        error: false
      });
      return;
    }

    loadedBoardToken = boardToken;

    const script = document.createElement('script');
    script.src = `https://boards.greenhouse.io/embed/job_board/js?for=${boardToken}`;
    script.async = true;
    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      });
    };

    const onScriptError = (e) => {
      loadedBoardToken = '';
      script.remove();

      setState({
        loaded: true,
        error: true
      });
    };

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
      script.remove();
    };
  }, [boardToken]);

  return [state.loaded, state.error];
}
