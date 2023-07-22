'use client';

import { useReducer } from 'react';

import BottomRightCorner from '@components/wrapper/BottomRightCorner';
import ContentSelection from '@components/nav/ContentSelection';
import ExternalLinks from '@components/wrapper/ExternalLinks';
import PrimaryDisplay from '@components/main/PrimaryDisplay';
import TopLeftCorner from '@components/wrapper/TopLeftCorner';
import { TextEntry } from '@annotations';

/**
* Upon double click will display the welcome text
*/
const reducer = (state: TextEntry, newState: TextEntry) => {
  switch (newState) {
    case state:
      return TextEntry.Welcome;
    default:
      return newState;
  }
};

export default function Index() {
  const [displayedText, displayedTextDispatch] = useReducer(reducer, TextEntry.Welcome);
  return (
    <div className='relative flex h-screen w-[1280px] grow flex-col xl:h-4/6 xl:min-w-max xl:grow-0 xl:flex-row'>
      <ExternalLinks />
      <PrimaryDisplay
        textDisplay={displayedText}
      />
      <BottomRightCorner
        height={300}
        width={300}
      />
      <TopLeftCorner
        height={300}
        width={300}
      />
      <ContentSelection
        displayedTextDispatch={displayedTextDispatch}
      />
    </div >
  );
}
