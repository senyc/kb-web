import SkillList from "@components/information/SkillList";

export default function Testing() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Pytest', experienceWith: '1 years' },
            { heading: 'Jest', experienceWith: '1 years' },
            { heading: 'Cyprus', experienceWith: '6 months' },
            { heading: 'Selenium', experienceWith: '6 months' },
          ]}
      />
    </>
  );
}
