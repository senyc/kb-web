import EmailLink from "./EmailLink";

export default function AboutMe() {
  return (
    <div className='border-b-text border-b-2 pb-4 text-lg'>
      <p className='mb-4'>
        Kyler is a full-stack developer with professional experience building web applications. He is very passionate about software architecture and constructing applications such that they are testable, and actually tested.
      </p>
      If you are interested in learning more about his work history and experience, please check out his <a className='underline' target='_blank' href='BomhofKylerResume.pdf'>resume</a>. To get in contact with him directly, you can  <EmailLink /> him, or find him on <a className='underline' target='_blank' href='https://www.linkedin.com/in/kyler-bomhof/'>LinkedIn</a>. If you would like to see his work firsthand, feel free to visit his <a className='underline' target='_blank' href='https://github.com/senyc'>GitHub</a>.
    </div>
  );
}
