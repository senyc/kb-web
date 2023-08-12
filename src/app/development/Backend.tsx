import SkillList from "./SkillList";

export default function Backend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Python', experienceWith: '3 Years' },
            { heading: 'C', experienceWith: '3 Years' },
            { heading: 'Lua', experienceWith: '1 Year' },
            { heading: 'Node.js', experienceWith: '1 Year' },
            { heading: 'Go', experienceWith: '6 months' },
            { heading: 'Bash', experienceWith: '4 Years' },
            { heading: 'C++', experienceWith: '1 Year' },
            { heading: 'Java', experienceWith: '1 Year' },
            { heading: 'Ruby', experienceWith: '6 months' },
            { heading: 'PowerShell', experienceWith: '1 Year' },
          ]}
      />
    </>
  );
}
