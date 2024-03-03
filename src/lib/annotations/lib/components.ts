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
