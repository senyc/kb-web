import SectionButton from '@components/nav/SectionButton';
import ShowTextItem from '@components/nav/ShowTextItem';
import SmallTopRightBorder from '@components/nav/SmallTopRightBorder';
import { create } from 'react-test-renderer';

describe('main elements match recorded snapshots', () => {
  describe('Section Button', () => {
    it('renders the title', () => {
      const tree = create(<SectionButton title='test' onClick={() => undefined} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('SmallToprightBorder', () => {
    it('renders', () => {
      const tree = create(<SmallTopRightBorder />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('ShowTextItem', () => {
    it('renders', () => {
      const tree = create(<ShowTextItem title={'tests'} onClick={() => undefined} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
