import SkillList from "@components/information/SkillList";

export default function Frontend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'React.js', experienceWith: '3 year' },
            { heading: 'TypeScript', experienceWith: '3 year' },
            { heading: 'JavaScript', experienceWith: '5 years' },
            { heading: 'Next.js', experienceWith: '3 year' },
            { heading: 'HTML5', experienceWith: '5 years' },
          ]}
      />
    </>
  );
}
