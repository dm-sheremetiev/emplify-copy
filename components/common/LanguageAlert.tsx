import Link from 'next/link';
import { useState } from 'react';
import { AlertBar } from '../../storybookBuild/index';
// import { useLanguageDetector } from 'context/langDetector';
import { siteConfigI } from '@/interfaces/siteConfig';

export function LanguageAlert(props: { data: siteConfigI['languageAlertMessage'], showLanguageAlertMessage?: boolean }): JSX.Element {
  const { data, showLanguageAlertMessage } = props;

  const [show, setShow] = useState(true);
  // const { showAlertLanguage } = useLanguageDetector();
  // const showAlert: boolean = showLanguageAlertMessage || showAlertLanguage
  const showAlert: boolean = showLanguageAlertMessage
  const link = data?.data.cta;
  return <>
    {data?.data?.message && showAlert && (
      <AlertBar
        isToggle={show}
        onPress={() => setShow(!show)}
        backgroundColor="#A30C65"
        message={data?.data?.message}
        textColor="#FFFFFF"
        buttonChildren={
          <Link
            prefetch={false}
            href={link.link}
            target={link.target ? link.target : undefined}
            passHref
          >
             {link.title}
          </Link>
        }
      />
    )}
  </>;
}
