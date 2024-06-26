import SkillList from "@components/information/SkillList";

export default function Testing() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'pytest', experienceWith: '1 years' },
            { heading: 'Jest', experienceWith: '1 years' },
            { heading: 'Cypress', experienceWith: '6 months' },
            { heading: 'Selenium', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
