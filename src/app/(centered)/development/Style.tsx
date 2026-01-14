import SkillList from "@components/information/SkillList";

export default function Style() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'CSS', experienceWith: '4 years' },
            { heading: 'tailwindcss', experienceWith: '3 year' },
            { heading: 'Material UI', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
