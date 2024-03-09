import SkillList from "@components/information/SkillList";

export default function Design() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Figma', experienceWith: '2 years' },
            { heading: 'Lucid Chart', experienceWith: '1 year' },
            { heading: 'ExcaliDraw', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
