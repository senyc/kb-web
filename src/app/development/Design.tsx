import SkillList from "./SkillList";

export default function Design() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Figma', experienceWith: '2 Years' },
            { heading: 'Lucid Chart', experienceWith: '1 Year' },
            { heading: 'ExcaliDraw', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
