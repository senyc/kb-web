'use client';

import { useState } from 'react';
import LeftTabArrow from './LeftTabArrow';
import RightTabArrow from './RightTabArrow';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { Direction } from 'src/lib/annotations/components';

const getAnimationClass = (direction?: Direction) => {
  switch (direction) {
    case (Direction.Right):
      return 'slide-in-from-right';
    case (Direction.Left):
      return 'slide-in-from-left';
    default:
      return '';
  }
};

interface ArrowTabProps {
  /**
  * Contains the tab labels, in the order they should be shown
  */
  tabs: Array<string>;
  /**
  * These items should be in the same order as the tab labels
  * they are related to
  */
  tabContent: Array<JSX.Element>;
}

export default function ArrowTab({ tabs, tabContent }: ArrowTabProps) {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [animationDirection, setAnimationDirection] = useState<Direction>();

  const prevTab = () => {
    setCurrentTab((currentTab) => (currentTab + 1) % tabs.length);
    setAnimationDirection(Direction.Left);
  };

  const nextTab = () => {
    setCurrentTab((currentTab) => {
      const newTab = (currentTab - 1) % tabs.length;
      return newTab > 0 ? newTab : tabs.length - 1;
    });
    setAnimationDirection(Direction.Right);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    setAnimationDirection(currentTab >= newValue ? Direction.Right : Direction.Left);
  };

  return (
    <>
      <div className='mt-8 flex flex-row justify-center'>
        <div className='flex w-11/12 items-center justify-center space-x-4'>
          <LeftTabArrow
            onClick={nextTab}
          />
          <Tabs
            value={currentTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label={tabs[(currentTab - 1 + tabs.length) % tabs.length]}
              value={(currentTab - 1 + tabs.length) % tabs.length}
              className='text-text'
              sx={{
                ".Mui-selected": {
                  color: '#a9a9b3',
                }
              }}
            />
            <Tab
              label={tabs[currentTab]}
              value={currentTab}
            />
            <Tab
              label={tabs[(currentTab + 1) % tabs.length]}
              value={(currentTab + 1) % tabs.length}
              className='text-text'
              sx={{
                ".Mui-selected": {
                  color: '#a9a9b3',
                }
              }}
            />
          </Tabs>
          <RightTabArrow
            onClick={prevTab}
          />
        </div>
      </div >
      <section className='mt-9 flex flex-row justify-center '>
        <div
          className={getAnimationClass(animationDirection)}
          key={currentTab}
        >
          {tabContent[currentTab]}
        </div>
      </section>
    </>
  );
}
