import SkillList from "@components/information/SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'SQL', experienceWith: '3 years' },
            { heading: 'MySQL', experienceWith: '2 years' },
            { heading: 'SQL server', experienceWith: '1 year' },
            { heading: 'PostgreSQL', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
