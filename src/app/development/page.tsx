import ArrowTab from '@components/pageNav/ArrowTab';

import Backend from './Backend';
import Database from './Database';
import Deploy from './Deploy';
import Design from './Design';
import Frontend from './Frontend';
import Style from './Style';
import System from './System';
import Testing from './Testing';
import VersionControl from './VersionControl';

export default function Development() {
  return (
    <main className='flex w-full flex-row justify-center'>
      <ArrowTab
        tabs={[
          'Style',
          'Frontend',
          'Backend',
          'Deploy',
          'System',
          'Database',
          'VC',
          'Testing',
          'Design'
        ]}
        tabContent={[
          <Style />,
          <Frontend />,
          <Backend />,
          <Deploy />,
          <System />,
          <Database />,
          <VersionControl />,
          <Testing />,
          <Design />,
        ]}
      />
    </main>
  );
}
