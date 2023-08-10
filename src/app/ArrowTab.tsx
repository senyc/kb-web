'use client';
import { useState } from 'react';
import LeftTabArrow from './LeftTabArrow';
import RightTabArrow from './RightTabArrow';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
interface ArrowTabProps {
  tabs: Array<string>;
  /**
  * These items should be in the same order as the tab labels
  * they are related to
  */
  tabContent: Array<JSX.Element>;
}

export default function ArrowTab({ tabs, tabContent }: ArrowTabProps) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <div className='mt-8 flex flex-row justify-center'>
        <div className='flex items-center space-x-4'>
          <LeftTabArrow
            onClick={() => setCurrentTab((currentTab) => {
              const newTab = (currentTab - 1) % tabs.length;
              return newTab >= 0 ? newTab : tabs.length - 1;
            })
            }
          />
          <div className='w-64'>
            <Tabs
              value={currentTab}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab
                label={tabs[(currentTab - 1 + tabs.length) % tabs.length]}
                value={(currentTab - 1 + tabs.length) % tabs.length}
                className='text-gray-400'
              />
              <Tab
                label={tabs[currentTab]}
                value={currentTab}
              />
              <Tab
                label={tabs[(currentTab + 1) % tabs.length]}
                value={(currentTab + 1) % tabs.length}
                className='text-gray-400'
              />
            </Tabs>
          </div>
          <RightTabArrow
            onClick={() => setCurrentTab((currentTab) => (currentTab + 1) % tabs.length)}
          />
        </div>
      </div >
      <section className='mt-9 flex flex-row justify-center '>
        {tabContent[currentTab]}
      </section>
    </>
  );
}
