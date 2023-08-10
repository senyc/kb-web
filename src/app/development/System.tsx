import SkillList from "./SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Linux', experienceWith: '3 Years' },
            { heading: 'Tmux', experienceWith: '1 Years' },
            { heading: 'Vim (neovim)', experienceWith: '1 Year' },
            { heading: 'VS Code', experienceWith: '3 Years' },
            { heading: 'Bash Scripting', experienceWith: '3 Years' },
            { heading: 'AWK', experienceWith: '6 months' },
            { heading: 'Windows', experienceWith: '6 Years' },
          ]}
      />
    </>
  );
}
