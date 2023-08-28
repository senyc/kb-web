import SkillList from "@components/information/SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Linux (Ubuntu, Arch)', experienceWith: '3 years' },
            { heading: 'Vim (Neovim)', experienceWith: '1 year' },
            { heading: 'tmux', experienceWith: '1 year' },
            { heading: 'Bash Scripting', experienceWith: '3 years' },
            { heading: 'AWK', experienceWith: '6 months' },
            { heading: 'Windows', experienceWith: '6 years' },
          ]}
      />
    </>
  );
}
