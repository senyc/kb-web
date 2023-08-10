
interface ListItem {
  heading: string;
  experienceWith: string;
}

interface SkillListProps {
  skills: ListItem[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <ul>
      <li>
        <div className='flex w-96 flex-row'>
          <h2 className='text-xl font-bold'>
            Tool/Language
          </h2>
          <h3 className='grow text-right text-xl font-bold'>
            Experience
          </h3>
        </div>
          <div className='mb-8 mt-1 h-0 border opacity-30'> </div>
      </li>
      {skills.map(skill => (
        <li key={skill.heading} className='mb-8'>
          <div className='flex w-96 flex-row'>
            <h2 className='text-lg font-bold'>
              {skill.heading}
            </h2>
            <h3 className='grow text-right text-lg italic'>
              {skill.experienceWith}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
