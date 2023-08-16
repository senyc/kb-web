
interface ListItem {
  heading: string;
  experienceWith: string;
}

interface SkillListProps {
  skills: ListItem[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
      <ul className='flex flex-col'>
        <li className='border-b-text mb-2 flex flex-row border-b-2 pb-1'>
          <h2 className='font-bold sm:text-xl'>
            Tool/Language
          </h2>
          <h3 className='grow text-right font-bold sm:text-xl'>
            Experience
          </h3>
        </li>
        {skills.map(skill => (
          <div>
            <li key={skill.heading} className='mb-6 flex flex-row'>
              <h2 className='text-lg font-bold'>
                {skill.heading}
              </h2>
              <h3 className='grow text-right text-lg italic'>
                {skill.experienceWith}
              </h3>
            </li>
          </div>
        ))}
      </ul>
  );
}
