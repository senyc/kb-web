import { create } from 'react-test-renderer';

import BottomRightCorner from '@components/wrapper/BottomRightCorner';
import ExternalLinks from '@components/wrapper/ExternalLinks';
import TopLeftCorner from '@components/wrapper/TopLeftCorner';

describe('main elements match recorded snapshots', () => {
  describe('BottomRightCorner', () => {
    it('renders with standard size', () => {
      const tree = create(<BottomRightCorner width={300} height={300} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('TopLeftCorner', () => {
    it('renders with standard size', () => {
      const tree = create(<TopLeftCorner width={300} height={300} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('External Links', () => {
    it('exist upon render', () => {
      const tree = create(<ExternalLinks />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
