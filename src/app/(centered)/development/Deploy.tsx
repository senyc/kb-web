import SkillList from "@components/information/SkillList";

export default function Deploy() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Vercel', experienceWith: '2 years' },
            { heading: 'Kubernetes', experienceWith: '2 years' },
            { heading: 'Docker', experienceWith: '3 years' },
            { heading: 'Jenkins', experienceWith: '1 year' },
            { heading: 'GitHub Actions', experienceWith: '1 year' },
            { heading: 'AWS', experienceWith: '2 Year' },
            { heading: 'Terraform', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
