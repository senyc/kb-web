
interface ListItem {
  heading: string;
  experienceWith: string;
}

interface SkillListProps {
  skills: ListItem[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className='flex w-screen flex-row justify-center'>
      <ul className='flex w-11/12 min-w-fit max-w-sm flex-col'>
        <li className='border-b-text mb-2 flex flex-row border-b-2 pb-1'>
          <h2 className='text-xl font-bold'>
            Tool/Language
          </h2>
          <h3 className='grow text-right text-xl font-bold'>
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
    </div>
  );
}
