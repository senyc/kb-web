import SkillList from "./SkillList";

export default function Frontend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Javascript', experienceWith: '3 Years' },
            { heading: 'HTML5', experienceWith: '3 Years' },
            { heading: 'Typescript', experienceWith: '1 Year' },
            { heading: 'React.js', experienceWith: '1 Year' },
            { heading: 'Nextjs', experienceWith: '1 Year' },
            { heading: 'Material UI', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
