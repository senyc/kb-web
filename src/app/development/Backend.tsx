import SkillList from "./SkillList";

export default function Backend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Python', experienceWith: '3 Years' },
            { heading: 'Go', experienceWith: '1 Year' },
            { heading: 'C', experienceWith: '3 Years' },
            { heading: 'C++', experienceWith: '1 Year' },
            { heading: 'Java', experienceWith: '1 Year' },
            { heading: 'Lua', experienceWith: '1 Year' },
            { heading: 'Bash', experienceWith: '4 Years' },
            { heading: 'Powershell', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
