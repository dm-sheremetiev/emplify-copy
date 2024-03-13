// import { useRouter } from 'next/router';
import { UiCardAdvanced } from '@/interfaces/blocks';
// import { useLanguageDetector } from 'context/langDetector';

import styles from './tabView.module.scss';

export default function TabViewTab(props: { item: UiCardAdvanced; index?: number; active: boolean; width: string; selectTab }): JSX.Element {
  const { item, active, width = '100%', selectTab, index = 0 } = props;
  // const router = useRouter();
  // const { langDetector } = useLanguageDetector();

  // Check if there is not translated text // Alert message
  // langDetector([item.tabTitle], router.locale);

  return (
    <div
      className={`${styles.tabItem} ${active ? styles.active : ''}`}
      style={{
        width,
        height: 68,
        zIndex: active ? 100 : index,
        color: active ? item?.activeTabTitleColor || '#fff' : item?.inactiveTabTitleColor || '#000',
        backgroundColor: active ? item?.activeTabBgColor || '#a30c65' : item?.inactiveTabBgColor || '#fff'
      }}
      onClick={() => selectTab()}
    >
      {item?.tabTitle}

      {active && <div style={{ color: item?.activeTabBgColor || '#a30c65' }} className={styles.tabActiveItem} />}
    </div>
  );
}
