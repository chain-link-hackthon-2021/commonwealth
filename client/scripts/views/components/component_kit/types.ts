export enum ComponentType {
  Button = 'Button',
  GradientButton = 'GradientButton',
  ButtonGroup = 'ButtonGroup',
  ExternalLink = 'ExternalLink',
  RadioButton = 'RadioButton',
  RadioGroup = 'RadioGroup',
  EngagementButton = 'EngagementButton',
}

export type StyleAttrs = {
  disabled?: boolean;
  className?: string;
};

export type ButtonType = 'primary' | 'secondary';