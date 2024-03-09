import SkillList from "@components/information/SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'SQL', experienceWith: '1 year' },
            { heading: 'MySQL', experienceWith: '6 months' },
            { heading: 'SQL server', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
