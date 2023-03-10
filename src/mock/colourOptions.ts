export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  {
    value: 'orange', label: 'In process', color: '#FF8B00',
  },
  {
    value: 'yellow', label: 'Review', color: '#FFC400',
  },
  {
    value: 'green', label: 'Done', color: '#36B37E',
  },
  {
    value: 'silver', label: 'To do', color: '#666666',
  },
];
