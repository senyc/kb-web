import SkillList from "@components/information/SkillList";

export default function Deploy() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Vercel', experienceWith: '1 year' },
            { heading: 'Docker', experienceWith: '2 years' },
            { heading: 'Jenkins', experienceWith: '1 year' },
            { heading: 'GitHub Actions', experienceWith: '1 year' },
            { heading: 'AWS', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
