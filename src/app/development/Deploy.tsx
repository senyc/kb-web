import SkillList from "./SkillList";

export default function Deploy() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Vercel', experienceWith: '1 Year' },
            { heading: 'Jenkins', experienceWith: '1 Year' },
            { heading: 'GitHub Actions', experienceWith: '1 Year' },
            { heading: 'Docker', experienceWith: '2 Years' },
            { heading: 'AWS', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
