import SkillList from "@components/information/SkillList";

export default function Style() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'CSS', experienceWith: '3 years' },
            { heading: 'SCSS', experienceWith: '1 year' },
            { heading: 'tailwindcss', experienceWith: '1 year' },
            { heading: 'Material UI', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
