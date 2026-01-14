import SkillList from "@components/information/SkillList";

export default function Backend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Node.js', experienceWith: '1 year' },
            { heading: 'Go', experienceWith: '2 years' },
            { heading: 'Python', experienceWith: '4 years' },
            { heading: 'C', experienceWith: '3 years' },
            { heading: 'Lua', experienceWith: '2 years' },
            { heading: 'Bash', experienceWith: '4 years' },
            { heading: 'C++', experienceWith: '1 year' },
            { heading: 'Ruby', experienceWith: '2 years' },
            { heading: 'Java', experienceWith: '1 year' },
            { heading: 'PowerShell', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
