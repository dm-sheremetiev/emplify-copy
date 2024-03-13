import { useState, Fragment } from 'react';
import { UiThreeCardGroup } from '@/interfaces/blocks';

import styles from './tabView.module.scss';
import TabViewContent from './tabViewContent';
import TabViewTab from '@/components/blocks/UiTabViewComp/tabViewTab';

export default function UiTabViewComp(props: { block: UiThreeCardGroup }): JSX.Element {
  const { block } = props;
  const items = block.cardsCollection?.items;

  const [tab, selectTab] = useState(0);

  return (
    items &&
    items.length !== 0 && (
      <div className={styles.container}>
        <div className="d-md-flex d-none" style={{ overflow: 'hidden', height: 80, marginBottom: -12 }}>
          {items.map((item, index) => (
            <TabViewTab
              key={index}
              index={items.length - index}
              width={`${100 / items.length}%`}
              item={item}
              active={tab === index}
              selectTab={() => selectTab(index)}
            />
          ))}
        </div>
        {items.map((item, index) => (
          <Fragment key={index}>
            <div className="d-md-none">
              <TabViewTab width="100%" item={item} active={tab === index} selectTab={() => selectTab(index)} />
            </div>
            <TabViewContent item={item} show={tab === index} />
          </Fragment>
        ))}
      </div>
    )
  );
}
