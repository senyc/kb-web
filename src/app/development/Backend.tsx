import SkillList from "@components/information/SkillList";

export default function Backend() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Python', experienceWith: '3 years' },
            { heading: 'C', experienceWith: '3 years' },
            { heading: 'Lua', experienceWith: '1 year' },
            { heading: 'Node.js', experienceWith: '1 year' },
            { heading: 'Go', experienceWith: '6 months' },
            { heading: 'Bash', experienceWith: '4 years' },
            { heading: 'C++', experienceWith: '1 year' },
            { heading: 'Java', experienceWith: '1 year' },
            { heading: 'Ruby', experienceWith: '6 months' },
            { heading: 'PowerShell', experienceWith: '1 year' },
          ]}
      />
    </>
  );
}
