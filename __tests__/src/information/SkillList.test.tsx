import { create } from 'react-test-renderer';

import SkillList from '@components/information/SkillList';

describe('SkillList elements match recorded snapshots', () => {
  describe('SkillList', () => {
    it('renders items', () => {
      const tree = create(<SkillList skills={[{heading: 'one', experienceWith:'1 Year'}]} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
