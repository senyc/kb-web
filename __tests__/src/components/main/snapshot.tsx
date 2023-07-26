import { create } from 'react-test-renderer';

import { TextEntry } from '@annotations';

import StyledLine from '@components/main/ColoredLine';
import PrimaryDisplay from '@components/main/PrimaryDisplay';

describe('main elements match recorded snapshots', () => {
  describe('StyledLine', () => {
    it('renders on the bottom', () => {
      const tree = create(<StyledLine displayOn='left' />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders on the left', () => {
      const tree = create(<StyledLine displayOn='bottom' />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });

  describe('Primary Display', () => {
    it('displays welcome correctly', () => {
      const tree = create(<PrimaryDisplay textDisplay={TextEntry.Welcome}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
});
