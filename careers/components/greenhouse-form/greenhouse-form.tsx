import React, { useEffect } from 'react';
import formWrapper from './form-wrapper.module.scss';
import clsx from 'clsx';
import useGreenhouseReferrer from '@/careers/hooks/use-greenhouse-referrer';
import { useGreenhouseScript } from '@/careers/hooks/use-greenhouse-script';

type Props = {
  positionId: string | number;
  boardToken?: string;
  center?: boolean;
};

function Form({ positionId, center, boardToken = process.env.GREENHOUSE_JOB_BOARD_TOKEN }: Props) {
  const [loaded] = useGreenhouseScript(boardToken);
  const ghSrc = useGreenhouseReferrer();

  useEffect(() => {
    if (loaded && window.Grnhse) {
      window.Grnhse.Iframe.load(positionId, ghSrc);
    }
  }, [ghSrc, loaded, positionId]);

  return <div id="grnhse_app" className={clsx(formWrapper.formWrapper, center && formWrapper.center)} />;
}

// Wrapper only for key prop to force reset hooks' state
export default function GreenhouseForm(props: Props): JSX.Element {
  return <Form key={props.positionId} {...props} />;
}
