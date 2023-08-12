import SkillList from "./SkillList";

export default function VersionControl() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Git', experienceWith: '3 Years' },
            { heading: 'Github', experienceWith: '3 Years' },
            { heading: 'Bitbucket', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
