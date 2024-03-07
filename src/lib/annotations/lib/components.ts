export enum Direction {
  Right,
  Left,
  NoDirection
}

export type CaptchaExtensionProps = {
  onClick: () => Promise<void>;
}

export interface FormDropdownOption {
  label: string | number;
  value: any;
  hidden?: boolean;
}

export enum ReasonForContact {
  Default = 'na',
  ResumeRequest = 'resumeRequest',
  GeneralContact = 'generalContact',
  InterviewRequest = 'interviewRequest',
  Other = 'other'
}
