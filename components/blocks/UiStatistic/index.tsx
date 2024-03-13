import { Statistic } from '../../../storybookBuild/index';

// Interfaces
import { jsonModel } from '@/interfaces/blocks';
// import { useRouter } from 'next/router';
// import { useLanguageDetector } from 'context/langDetector';

export function UiStatisticComp(props: { block: jsonModel }): JSX.Element {
  const { data } = props.block;

  // const router = useRouter();
  // const  langDetector = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector?.langDetector([data?.description], router.locale)
  return (
    <Statistic
      description={data?.description}
      num={data.number}
      unitKey={data.unitKey}
      unitPlacement={data.unitPlacement}
    />
  );
}
