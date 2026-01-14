import SkillList from "@components/information/SkillList";

export default function Testing() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'pytest', experienceWith: '1 year' },
            { heading: 'Jest', experienceWith: '1 year' },
            { heading: 'Cypress', experienceWith: '6 months' },
            { heading: 'Selenium', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
