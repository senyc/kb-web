import SkillList from "@components/information/SkillList";

export default function System() {
  return (
    <>
      <SkillList
        skills={
          [
            { heading: 'Linux', experienceWith: '4 years' },
            { heading: 'Vim (Neovim)', experienceWith: '2 years' },
            { heading: 'tmux', experienceWith: '3 years' },
            { heading: 'Bash Scripting', experienceWith: '4 years' },
            { heading: 'Windows', experienceWith: '6 years' },
          ]}
      />
    </>
  );
}
