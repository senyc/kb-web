import { create } from 'react-test-renderer';

import TechnologiesUsed from "@components/information/TechnologiesUsed";

describe('TechnologiesUsed elements match recorded snapshots', () => {
  describe('TechnologiesUsed', () => {
    it('renders items', () => {
      const tree = create(<TechnologiesUsed items={['one', 'two', 'three']} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
