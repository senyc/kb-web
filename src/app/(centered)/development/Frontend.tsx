import SkillList from "@components/information/SkillList";

export default function Frontend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'React.js', experienceWith: '3 years' },
            { heading: 'TypeScript', experienceWith: '3 years' },
            { heading: 'JavaScript', experienceWith: '5 years' },
            { heading: 'Next.js', experienceWith: '3 years' },
            { heading: 'HTML5', experienceWith: '5 years' },
          ]}
      />
    </>
  );
}
