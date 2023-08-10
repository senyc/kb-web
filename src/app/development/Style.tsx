import SkillList from "./SkillList";

export default function Style() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'CSS', experienceWith: '3 Years' },
            { heading: 'SCSS', experienceWith: '1 Years' },
            { heading: 'tailwindcss', experienceWith: '1 Year' },
            { heading: 'Material UI', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
