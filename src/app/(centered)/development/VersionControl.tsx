import SkillList from "@components/information/SkillList";

export default function VersionControl() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Git', experienceWith: '4 years' },
            { heading: 'GitHub', experienceWith: '4 years' },
            { heading: 'Bitbucket', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
