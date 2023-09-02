export enum Direction {
  Right,
  Left,
  NoDirection
}

export type CaptchaExtensionProps = {
  onClick: () => Promise<void>;
}
