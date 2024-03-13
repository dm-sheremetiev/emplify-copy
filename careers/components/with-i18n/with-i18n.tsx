import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';
import { ComponentType } from 'react';

type WithLngDictProps = {
  lngDict: any;
};

const withI18n =
  <P extends object>(Component: ComponentType<P>): React.FC<P & WithLngDictProps> =>
  ({ lngDict, ...props }) => {
    const { locale } = useRouter();
    return (
      <I18nProvider lngDict={lngDict} locale={locale}>
        <Component {...(props as P)} />
      </I18nProvider>
    );
  };

export default withI18n;
