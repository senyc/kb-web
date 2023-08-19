import SkillList from "@components/information/SkillList";

export default function Frontend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'React.js', experienceWith: '1 year' },
            { heading: 'TypeScript', experienceWith: '1 year' },
            { heading: 'JavaScript', experienceWith: '3 years' },
            { heading: 'Next.js', experienceWith: '1 year' },
            { heading: 'HTML5', experienceWith: '3 years' },
            { heading: 'Material UI', experienceWith: '6 months' },
            { heading: 'DaisyUI', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
