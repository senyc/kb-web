'use client';

import { useState } from 'react';

import { Direction } from 'src/lib/annotations/components';

import LeftTabArrow from './LeftTabArrow';
import RightTabArrow from './RightTabArrow';

type Tab = 0 | 1 | 2;

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

const moveTabsRight = (tabIndexes: number[], lastTab: number) => {
  return tabIndexes.map(tab => tab + 1 > lastTab ? 0 : tab + 1);
};

const moveTabsLeft = (tabIndexes: number[], lastTab: number) => {
  return tabIndexes.map(tab => tab - 1 < 0 ? lastTab : tab - 1);
};

export default function ArrowTab({ tabs, tabContent }: ArrowTabProps) {
  const [currentTab, setCurrentTab] = useState<Tab>(1);
  const [tabValues, setTabValues] = useState<number[]>([0, 1, 2]);
  const [animationDirection, setAnimationDirection] = useState<Direction>(Direction.NoDirection);

  const nextTab = () => {
    if (currentTab < 2) {
      setCurrentTab(currentTab => (currentTab + 1) as Tab);
      setAnimationDirection(Direction.NoDirection);
    } else {
      setTabValues(moveTabsRight(tabValues, tabs.length - 1));
      setAnimationDirection(Direction.Left);
    }
  };

  const prevTab = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab => (currentTab - 1) as Tab);
      setAnimationDirection(Direction.NoDirection);
    } else {
      setTabValues(moveTabsLeft(tabValues, tabs.length - 1));
      setAnimationDirection(Direction.Right);
    }
  };

  const handleTabSelection = (newTab: Tab) => {
    setCurrentTab(newTab);
    setAnimationDirection(Direction.NoDirection);
  };

  return (
    <div>
      <div className='mt-8 flex items-center justify-center space-x-2'>
        <LeftTabArrow
          onClick={prevTab}
        />
        <div className='tabs flex-nowrap'>
          <a
            onClick={() => handleTabSelection(0)}
            className={`tab tab-bordered text-text ${currentTab == 0 && 'tab-active border-primary'} w-[4rem]  xs:w-[5.5rem]  sm:w-32`.replace('false', '')}
          >
            {tabs[tabValues[0]]}
          </a>
          <a
            className={`tab tab-bordered text-text ${currentTab == 1 && 'tab-active border-primary'} w-[4rem]  xs:w-[5.5rem] sm:w-32`.replace('false', '')}
            onClick={() => handleTabSelection(1)}
          >
            {tabs[tabValues[1]]}
          </a>
          <a
            onClick={() => handleTabSelection(2)}
            className={`tab tab-bordered text-text ${currentTab == 2 && 'tab-active border-primary'} w-[4rem] xs:w-[5.5rem]  sm:w-32`.replace('false', '')}
          >
            {tabs[tabValues[2]]}
          </a>
        </div>
        <RightTabArrow onClick={nextTab} />
      </div >
      <section className='mt-9 flex w-full min-w-fit flex-row justify-center'>
        <div
          className={`${getAnimationClass(animationDirection)} grow max-w-sm sm:max-w-md`}
          key={tabs[tabValues[currentTab]]}
        >
          {tabContent[tabValues[currentTab]]}
        </div>
      </section>
    </div >
  );
}
