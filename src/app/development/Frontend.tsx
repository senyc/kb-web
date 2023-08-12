import SkillList from "./SkillList";

export default function Frontend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'React.js', experienceWith: '1 Year' },
            { heading: 'TypeScript', experienceWith: '1 Year' },
            { heading: 'JavaScript', experienceWith: '3 Years' },
            { heading: 'Next.js', experienceWith: '1 Year' },
            { heading: 'HTML5', experienceWith: '3 Years' },
            { heading: 'Material UI', experienceWith: '6 months' },
            { heading: 'DaisyUI', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
