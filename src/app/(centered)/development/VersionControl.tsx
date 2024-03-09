import SkillList from "@components/information/SkillList";

export default function VersionControl() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Git', experienceWith: '3 years' },
            { heading: 'GitHub', experienceWith: '3 years' },
            { heading: 'Bitbucket', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
