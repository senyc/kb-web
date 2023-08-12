import SkillList from "./SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Linux (Ubuntu, Arch)', experienceWith: '3 Years' },
            { heading: 'Vim (Neovim)', experienceWith: '1 Year' },
            { heading: 'Tmux', experienceWith: '1 Year' },
            { heading: 'Bash Scripting', experienceWith: '3 Years' },
            { heading: 'AWK', experienceWith: '6 months' },
            { heading: 'Windows', experienceWith: '6 Years' },
          ]}
      />
    </>
  );
}
